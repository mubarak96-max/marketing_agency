import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, memoryLocalCache } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

// Use initializeFirestore instead of getFirestore to enable long-polling
// This is much more stable on weak internet connections
const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  localCache: memoryLocalCache(),
});

// Initialize Analytics (optional, client-side only)
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) analytics = getAnalytics(app);
  });
}

export { app, auth, db, analytics };
