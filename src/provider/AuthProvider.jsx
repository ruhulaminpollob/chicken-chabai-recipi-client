import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(false)

    
    
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const userData=(name,photo)=>{
        updateProfile(auth.user,{
            displayName:name,
        })
    }
    const googleSignIn=()=>{
        return signInWithPopup(auth,provider)
        
    }
    const githubSignIn=()=>{
        return signInWithPopup(auth,githubProvider)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    
    
    
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
        
    },[])
    
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        userData,
        logOut,
        googleSignIn,
        githubSignIn,
        setLoading,
    }
    
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;