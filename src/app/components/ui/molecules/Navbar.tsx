import React, { useContext } from "react";
import { Nav } from "../../styles/Nav.style";
import { Button } from "../../styles/Button.style";
import { AuthContext  } from "../../../context/AuthContext";

const Navbar = () => {
    const authCtx = useContext(AuthContext)

    const handleClick = async () => {
      await authCtx.logout()
    }

  return (
    <Nav>
      <div>
        <p>{ authCtx.currentUser?.displayName}</p>
        <p className="email">Logged in as { authCtx.currentUser?.email}</p>
      </div>
      <div>
        <Button onClick={handleClick}>Logout</Button>
      </div>
    </Nav>
  );
};

export default Navbar;
