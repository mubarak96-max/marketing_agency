'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const SESSION_KEY = 'mmts_admin_token';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined); // undefined = loading

  useEffect(() => {
    const token = sessionStorage.getItem(SESSION_KEY);
    setUser(token ? { token } : null);
  }, []);

  async function login(email, password) {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.message || 'Login failed');
    sessionStorage.setItem(SESSION_KEY, data.token);
    setUser({ token: data.token });
    return data;
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
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
