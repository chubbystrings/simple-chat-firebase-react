import { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebase/config';
import errorResponse from '../utils/errorResponse';
import { setUserToLocalStorage } from '../helper/localStorageFunc';


const useLogin = () => {
    const [ error, setError] = useState('')

    const login = async (email:string, password: string) => {
        setError('');

        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredentials.user)
            setUserToLocalStorage(userCredentials.user)
        } catch (err: any) {
            const e = errorResponse(err.message)
            setError(e)
        }
    }

    return { error, login}
}

export default useLogin