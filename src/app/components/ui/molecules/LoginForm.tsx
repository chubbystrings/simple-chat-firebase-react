import React, { ChangeEvent, FormEvent, useState } from "react";
import AppButton from "../atoms/Button";
import useLogin from "../../../api/useLogin";
import { Error } from "../../styles/Welcome.style";
import { useHistory } from "react-router-dom";
import { Spinner } from "../../styles/Backdrop.style";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState("");
  const { error, login} = useLogin()
  const history = useHistory()

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.name === "email") {
      setEmail(event.currentTarget.value);
    }
    if (event.currentTarget.name === 'password') {
        setPassword(event.currentTarget.value)
    }
  };

  const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setIsLoading(true)
      await login(email, password)
      history.push('/chatroom')
  };
  return (
    <form onSubmit={handleSubmit}>
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
      <AppButton disabled={isLoading}>{ isLoading ? <Spinner width="10" height="10" /> : 'Log in'}</AppButton>
    </form>
  );
}
