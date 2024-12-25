import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import Spinner from '../components/Spinner';
import axios from 'axios';


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    // Create a new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Update user profile
    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    // Log in an existing user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign in with Google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Log out the current user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Observe user authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser.email };

                axios.post('https://service-sphere-server.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        setLoading(false);
                    })
            }
            else {
                axios.post('https://service-sphere-server.vercel.app/logout', {}, { withCredentials: true })
                    .then(res => {
                        setLoading(false);
                    })
            }


        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        loginUser,
        logOutUser,
        signInWithGoogle,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {loading ? <Spinner /> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
