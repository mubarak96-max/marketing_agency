'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined); // undefined = loading

  useEffect(() => {
    let active = true;

    async function loadSession() {
      try {
        const res = await fetch('/api/admin/session', {
          method: 'GET',
          cache: 'no-store',
        });

        if (!active) return;

        if (!res.ok) {
          setUser(null);
          return;
        }

        const data = await res.json();
        setUser(data.user ?? null);
      } catch {
        if (active) setUser(null);
      }
    }

    loadSession();

    return () => {
      active = false;
    };
  }, []);

  async function login(email, password) {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.message || 'Login failed');
    setUser({ email });
    return data;
  }

  async function logout() {
    await fetch('/api/admin/session', {
      method: 'DELETE',
    });
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
