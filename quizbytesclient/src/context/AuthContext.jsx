import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, setPersistence, browserLocalPersistence } from 'firebase/auth';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ token: '', user: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            user.getIdToken().then((token) => {
              setAuth({ token: token, user: user });
              setLoading(false);
            });
          } else {
            setAuth({ token: '', user: null });
            setLoading(false);
          }
        });

        return () => unsubscribe();
      })
      .catch((error) => {
        console.error('Error setting persistence:', error);
        setLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}