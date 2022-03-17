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
    if (!user) {
      onAuthStateChanged(auth, async (userLogin) => {
        if (userLogin) {
          setUser({
            uid: userLogin.uid,
            email: userLogin.email,
          });
          if (router.pathname === '/signin' || router.pathname === '/signup') {
            await router.replace('/');
            return;
          }
        } else {
          setUser(null);
          if (router.pathname != '/signin' && router.pathname != '/signup') {
            await router.replace('/signin');
            return;
          }
        }
        setLoading(false);
      });
    }
  }, [router, user]);

  return <AuthContext.Provider value={{ user, setUser, loading }}>{children}</AuthContext.Provider>;
};
