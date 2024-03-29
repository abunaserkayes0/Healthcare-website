import initializationAuthentication from "../Component/Firebase/firebase.init";
import {getAuth,signInWithPopup,GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { useEffect, useState } from "react";

initializationAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider =new GoogleAuthProvider();
  
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            
    }
    const createEmailPassword = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })
    }, [auth])
    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName:name
          }).then(() => {
              const userName = { ...user, displayName: name };
              setUser(userName);
          }).catch(error=>console.log(error.message))
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
        }).catch(error=>console.log(error.message))
    }
    return {
        user,
        signInWithGoogle,
        setUser,
        logOut,
        createEmailPassword,
        signInEmailPassword,
        updateUser

    }
}

export default useFirebase;