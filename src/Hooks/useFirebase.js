import initializationAuthentication from "../Component/Firebase/firebase.init";
import {getAuth,signInWithPopup,GoogleAuthProvider,signOut,onAuthStateChanged} from 'firebase/auth';
import { useEffect, useState } from "react";

initializationAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const[error,setError] = useState('');

    const auth = getAuth();
    const googleProvider =new GoogleAuthProvider();
  
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
        }).catch(error=>setError(error.message))
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
    },[auth])
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
        }).catch(error=>setError(error.message))
    }
    return {
        user,
        signInWithGoogle,
        logOut,
        error
    }
}

export default useFirebase;