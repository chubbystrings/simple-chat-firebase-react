import React from "react";
import SignupForm from "../molecules/SignupForm";
import LoginForm from "../molecules/LoginForm";

const AuthForm: React.FC<{ isLogin: boolean; handleSwitch: () => void }> = (props) => {

    const handleSwitch = () => {
        props.handleSwitch()
    }
  return (
    <>
      {props.isLogin && (
        <div>
          <h2>Log In</h2>
          <LoginForm />
          <p>
            No account Yet? <span onClick={handleSwitch}> Sign up </span> instead
          </p>
        </div>
      )}
      {!props.isLogin && <div>
          <h2>Sign Up</h2>
          <SignupForm />
          <p>
            have an account already? <span onClick={handleSwitch}> Login</span> here
          </p>
        </div>}
    </>
  );
};

export default AuthForm;
