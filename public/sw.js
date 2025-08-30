const CACHE_NAME = 'nexus-digital-v1.0.0';
const STATIC_CACHE_NAME = 'nexus-static-v1.0.0';

// Files to cache for offline functionality
const STATIC_FILES = [
    '/',
    '/services',
    '/portfolio',
    '/about',
    '/contact',
    '/offline',
    '/manifest.json',
    // Add critical CSS and JS files
    '/_next/static/css/app.css',
    // Add fonts
    '/fonts/inter.woff2',
];

// API routes to cache
const API_CACHE_PATTERNS = [
    /^\/api\/services/,
    /^\/api\/portfolio/,
];

// Install event - cache static files
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');

    event.waitUntil(
        Promise.all([
            caches.open(STATIC_CACHE_NAME).then((cache) => {
                return cache.addAll(STATIC_FILES);
            }),
            caches.open(CACHE_NAME).then((cache) => {
                // Pre-cache critical pages
                return cache.addAll([
                    '/',
                    '/services',
                    '/portfolio'
                ]);
            })
        ])
    );

    // Skip waiting to activate immediately
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );

    // Take control of all clients
    return self.clients.claim();
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Skip chrome-extension and other non-http(s) requests
    if (!url.protocol.startsWith('http')) {
        return;
    }

    // Handle API requests with network-first strategy
    if (API_CACHE_PATTERNS.some(pattern => pattern.test(url.pathname))) {
        event.respondWith(
            networkFirstStrategy(request)
        );
        return;
    }

    // Handle navigation requests
    if (request.mode === 'navigate') {
        event.respondWith(
            networkFirstWithOfflineFallback(request)
        );
        return;
    }

    // Handle static assets with cache-first strategy
    if (isStaticAsset(url)) {
        event.respondWith(
            cacheFirstStrategy(request)
        );
        return;
    }

    // Default to network-first for everything else
    event.respondWith(
        networkFirstStrategy(request)
    );
});

// Network-first strategy (for API calls and dynamic content)
async function networkFirstStrategy(request) {
    try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.log('Network failed, trying cache:', request.url);
        const cachedResponse = await caches.match(request);

        if (cachedResponse) {
            return cachedResponse;
        }

        // Return offline page for navigation requests
        if (request.mode === 'navigate') {
            return caches.match('/offline');
        }

        throw error;
    }
}

// Cache-first strategy (for static assets)
async function cacheFirstStrategy(request) {
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
        // Update cache in background
        fetch(request).then(response => {
            if (response.ok) {
                const cache = caches.open(STATIC_CACHE_NAME);
                cache.then(c => c.put(request, response));
            }
        }).catch(() => {
            // Ignore network errors in background update
        });

        return cachedResponse;
    }

    try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            const cache = await caches.open(STATIC_CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.log('Failed to fetch static asset:', request.url);
        throw error;
    }
}

// Network-first with offline fallback for navigation
async function networkFirstWithOfflineFallback(request) {
    try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.log('Network failed for navigation, trying cache:', request.url);

        const cachedResponse = await caches.match(request);

        if (cachedResponse) {
            return cachedResponse;
        }

        // Return offline page
        return caches.match('/offline') || new Response('Offline', { status: 503 });
    }
}

// Check if URL is a static asset
function isStaticAsset(url) {
    const staticPatterns = [
        /\/_next\/static\//,
        /\/icons\//,
        /\/images\//,
        /\/fonts\//,
        /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/,
    ];

    return staticPatterns.some(pattern => pattern.test(url.pathname));
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync-form') {
        event.waitUntil(syncFormSubmissions());
    }
});

// Sync queued form submissions
async function syncFormSubmissions() {
    try {
        const db = await openDB();
        const tx = db.transaction(['form-submissions'], 'readonly');
        const store = tx.objectStore('form-submissions');
        const submissions = await store.getAll();

        for (const submission of submissions) {
            try {
                const response = await fetch(submission.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(submission.data),
                });

                if (response.ok) {
                    // Remove from queue after successful submission
                    const deleteTx = db.transaction(['form-submissions'], 'readwrite');
                    const deleteStore = deleteTx.objectStore('form-submissions');
                    await deleteStore.delete(submission.id);
                }
            } catch (error) {
                console.log('Failed to sync form submission:', error);
            }
        }
    } catch (error) {
        console.log('Background sync failed:', error);
    }
}

// Push notification handler
self.addEventListener('push', (event) => {
    if (!event.data) return;

    const data = event.data.json();
    const options = {
        body: data.body,
        icon: '/icons/icon-192x192.png',
        badge: '/icons/badge-72x72.png',
        image: data.image,
        data: data.data,
        actions: [
            {
                action: 'view',
                title: 'View',
                icon: '/icons/view-icon.png'
            },
            {
                action: 'dismiss',
                title: 'Dismiss',
                icon: '/icons/dismiss-icon.png'
            }
        ],
        tag: data.tag || 'nexus-notification',
        renotify: true,
        requireInteraction: false,
        silent: false,
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
    const { action, notification } = event;

    notification.close();

    if (action === 'view' || !action) {
        const urlToOpen = notification.data?.url || '/';

        event.waitUntil(
            clients.matchAll({ type: 'window' }).then((clientList) => {
                // Check if the site is already open
                for (const client of clientList) {
                    if (client.url === urlToOpen && 'focus' in client) {
                        return client.focus();
                    }
                }

                // Open new window if not already open
                if (clients.openWindow) {
                    return clients.openWindow(urlToOpen);
                }
            })
        );
    }
});

// Simple IndexedDB helper
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('nexus-digital-db', 1);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            if (!db.objectStoreNames.contains('form-submissions')) {
                const store = db.createObjectStore('form-submissions', { keyPath: 'id', autoIncrement: true });
                store.createIndex('timestamp', 'timestamp');
            }
        };
    });
}
