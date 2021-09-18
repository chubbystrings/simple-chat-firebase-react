import { useEffect, useState } from 'react';
import { auth, onAuthStateChanged } from '../firebase/config';


const useGetCurrentUser = () => {
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unlisten = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unlisten()
        }
    }, [])

    return { user }
}

export default useGetCurrentUser;



