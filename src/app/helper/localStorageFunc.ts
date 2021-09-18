import { User } from "@firebase/auth";

export const setUserToLocalStorage = (user: User) => {
    const localUserDetails = {
        id: user.uid,
        displayName: user.displayName,
        email: user.email
    }
    localStorage.setItem('chatUser', JSON.stringify(localUserDetails));
}

export const removeUserFromLocalStorage = () => {
    localStorage.clear()
}