import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useState, useEffect } from 'react';
import db, { auth } from '../firebase';
import { useRouter } from 'next/router';
import { doc, getDoc, setDoc } from 'firebase/firestore';

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
          const docSnap = await getDoc(doc(db, 'users', userLogin.email));
          if (docSnap.exists()) {
            const { email, photo } = docSnap.data();
            setUser({
              email: email,
              photo: photo,
            });
          } else {
            const dataUser = {
              email: userLogin.email,
              photo: userLogin.photoURL
                ? userLogin.photoURL
                : `images/profil-${Math.ceil(Math.random() * 5)}.jpg`,
            };
            await setDoc(doc(db, 'users', userLogin.email), dataUser);
            setUser(dataUser);
          }

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
