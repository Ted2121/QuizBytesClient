import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAuth, signOut as firebaseSignOut } from "firebase/auth";

function useAuth() {
  const { auth, setAuth } = useContext(AuthContext);

  const signOut = async () => {
    const authInstance = getAuth(); // Get the Firebase Auth instance
    try {
      await firebaseSignOut(authInstance); // Sign out using Firebase Auth
      setAuth({ token: "", user: null }); // Clear user in app's context
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  return { auth, signOut };
}

export default useAuth;