import React, { useState } from 'react';
import { Welcome } from '../styles/Welcome.style';
import AuthForm from '../ui/organisms/AuthForm';

export default function Home() {
    const [isLogin, setIslogin] = useState(true)

    const handleSwitch = () => {
        setIslogin((prev) => !prev)
    }
    return (
        <Welcome>
            <p>Welcome</p>
            <AuthForm isLogin={isLogin} handleSwitch={handleSwitch} />
        </Welcome>
    )
}
