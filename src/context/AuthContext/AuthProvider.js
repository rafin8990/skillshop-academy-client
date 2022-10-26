import React from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google sign in methos 
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    // github sign in function
    const gitHubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };
    // create user with email password 
    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // sign in with email and password 

    const signInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    // sign out function 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };


    // update profile name and photo 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    // onauthstatechange 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);


            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = { updateUserProfile, user, googleSignIn, gitHubSignIn, logOut, createUserWithEmail, signInWithEmail, loading, setLoading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;