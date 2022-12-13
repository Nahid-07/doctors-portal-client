import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config'
export const authProvider = createContext();
const FirebaseContext = ({children}) => {
    const [user,setUser] =  useState('');
    const [loader,setLoader] = useState(true)
    const auth = getAuth(app)
    const googleLoginProvider = new GoogleAuthProvider()
    const SignUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const gooogleLogin = ()=>{
        setLoader(true)
        return signInWithPopup(auth, googleLoginProvider)
    }

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }

    const updateProfilerName = (name)=>{
        return updateProfile(auth.currentUser,{
            displayName : name
        })
    }
    const authInfo = {
        SignUp,
        login,
        user,
        logOut,
        gooogleLogin,
        loader,
        updateProfilerName
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoader(false)
        })
        return ()=> unsubscribe()
    })
    return (
        <authProvider.Provider value={authInfo}>
            {children}
        </authProvider.Provider>
    );
};

export default FirebaseContext;