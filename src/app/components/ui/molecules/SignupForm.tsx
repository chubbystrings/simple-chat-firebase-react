import React, { ChangeEvent, FormEvent, useState } from "react";
import AppButton from "../atoms/Button";
import useSignup from "../../../api/useSignup";
import { Error } from "../../styles/Welcome.style";
import { useHistory } from "react-router-dom";


export default function SignupForm() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signup } = useSignup();
  const history = useHistory()

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.name === "displayName") {
      setDisplayName(event.currentTarget.value);
    }
    if (event.currentTarget.name === "email") {
      setEmail(event.currentTarget.value);
    }
    if (event.currentTarget.name === "password") {
      setPassword(event.currentTarget.value);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signup(email, password, displayName);
    history.push('/chatroom')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="displayName"
        type="text"
        placeholder="display name"
        value={displayName}
        required
        onChange={handleInput}
      />
      <input
        name="email"
        type="email"
        placeholder="email"
        value={email}
        onChange={handleInput}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={handleInput}
        required
      />
      {error && <Error>{ error }</Error> }
      <AppButton>Sign Up</AppButton>
    </form>
  );
}
