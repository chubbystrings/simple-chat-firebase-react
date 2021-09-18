import React from 'react';
import { Container } from '../styles/Container.style';
import Navbar from '../ui/molecules/Navbar';
import NewChatForm from '../ui/molecules/NewChatForm';
import ChatWindow from '../ui/molecules/ChatWindow';

const Chatroom = () => {
    return (
        <Container>
            <Navbar />
            <ChatWindow />
            <NewChatForm />
        </Container>
    )
}

export default Chatroom
