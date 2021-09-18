import React, { useState, ChangeEvent } from "react";
import { ChatForm } from "../../styles/NewChatForm.style";
import useGetCurrentUser from "../../../api/useGetCurrentUser";
import { serverTimestamp } from "../../../firebase/config";
import useAddToCollection from "../../../api/useAddToCollection";
import { Error } from "../../styles/Welcome.style";

export default function NewChatForm() {
  const [message, setMessage] = useState("");
  const { user } = useGetCurrentUser();
  const { error, addDocument } = useAddToCollection("messages");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
    if (e.key === "Enter") {
      e.preventDefault();
      const newChat = {
        name: user?.displayName,
        message: message,
        userId: user?.uid,
        createdAt: serverTimestamp(),
      };

      setMessage("");
      await addDocument(newChat);
    }
  };
  return (
    <ChatForm>
      <textarea
        placeholder="Type message and press enter"
        value={message}
        onChange={handleChange}
        onKeyPress={handleSubmit}
      ></textarea>
      {error && <Error />}
    </ChatForm>
  );
}
