import { useState } from 'react';
import { auth, createUserWithEmailAndPassword, updateProfile } from '../firebase/config'
import { setUserToLocalStorage } from '../helper/localStorageFunc';


const useSignup = () => {
    const [error, setError] = useState(null)
    const signup = async (email: string, password: string, displayName: string) => {
        setError(null)
    
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            if (!userCredentials) {
                throw Error("an error occurred")
            }
            console.log(userCredentials.user)
            await updateProfile(auth.currentUser!, { displayName: displayName})
            setUserToLocalStorage(userCredentials.user)
            return userCredentials.user
        } catch (err: any) {
            console.log(err.message)
            const e = err.message.replace(/(Error|auth|Firebase|\)|\(|\\:|\/)/g, '')
           setError(e)
        }
    
    
    }
    return { error, signup}
}

export default useSignup