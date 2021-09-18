import React, { createContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth, onAuthStateChanged, signOut } from '../firebase/config';
import { removeUserFromLocalStorage } from '../helper/localStorageFunc'

type AuthStatus = {
    isLoggedIn: boolean
    currentUser: User | null,
    logout: () => Promise<void>,
}

export const AuthContext = createContext({} as AuthStatus)

const AuthProvider: React.FC = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(auth.currentUser);

    const logout = async () => {
        await signOut(auth)
        removeUserFromLocalStorage()
        window.location.reload()
    }

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            user ? setIsLoggedIn(true) : setIsLoggedIn(false)
        })
        return () => {
            listen()
        }
    }, [])

    const value = {
        isLoggedIn,
        currentUser,
        logout,
    }

    return <AuthContext.Provider value={value}>{children }</AuthContext.Provider>
    
}

export default AuthProvider