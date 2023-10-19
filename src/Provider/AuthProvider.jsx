import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from "../firebase/firebase.config"
import { useEffect, useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createAccountwithGoogle =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    
      }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
      setLoading(true)
      return signOut(auth);
  }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log("Current value of the current user", currentUser);
          setUser(currentUser);
          setLoading(false)
        });
        return () => {
          unSubscribe();
        };
      }, []);

    const authInfo = {
        createUserAccount,
        createAccountwithGoogle,
        logInUser,
        user,
        loading,
        logOut
    }


    
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
