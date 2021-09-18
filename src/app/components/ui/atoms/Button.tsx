import React from 'react';
import { Button} from '../../styles/Button.style';

type PROPS = {
    link?: boolean;
    handleClick?: () => void;
    disabled?: boolean
}

const  AppButton: React.FC<PROPS> = ({children, link, disabled, handleClick}) => {
    return (
        <Button onClick={handleClick} disabled={disabled} link={link}>{children}</Button>
    )
}

export default AppButton
