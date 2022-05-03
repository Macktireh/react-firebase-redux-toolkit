import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const ConnectModal = () => {
  const [singUp, setSingUp] = useState(false);

  return (
    <div className="connect-modal">
      <div className="header-btn">
        <button
          className={singUp ? "active" : ""}
          onClick={() => setSingUp(true)}
        >
          S'incrire
        </button>
        <button
          className={singUp ? "" : "active"}
          onClick={() => setSingUp(false)}
        >
          Se connecter
        </button>
      </div>
      {singUp ? <SignUp /> : <Login />}
    </div>
  );
};

export default ConnectModal;
