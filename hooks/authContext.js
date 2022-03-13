import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useRouter } from 'next/router';

export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        if (router.pathname === '/signin' || router.pathname === '/signup') {
          await router.replace('/');
        }
      } else {
        setUser(null);
        if (router.pathname != '/signin' && router.pathname != '/signup') {
          await router.replace('/signin');
        }
      }
      setLoading(false);
    });
  }, [router]);

  return <AuthContext.Provider value={{ user, setUser, loading }}>{children}</AuthContext.Provider>;
};
