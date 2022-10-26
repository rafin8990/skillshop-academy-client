import React from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    // google sign in methos 
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };
    // github sign in function
    const gitHubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    };


    // sign out function 
    const logOut = () => {
        return signOut(auth);
    }

    // onauthstatechange 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    }, [])


    const authInfo = {user, googleSignIn, gitHubSignIn, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;