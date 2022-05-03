import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

const Login = () => {
  const LoginEmail = useRef();
  const LoginPassword = useRef();
  const [error, setError] = useState(false);

  const handlLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        LoginEmail.current.value,
        LoginPassword.current.value
      );
      console.log(user);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <h3>Se connecter</h3>
        <form className="form-login" onSubmit={(e) => handlLogin(e)}>
          <input type="text" placeholder="Email" required ref={LoginEmail} />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            ref={LoginPassword}
          />
          <input type="submit" value="Se connecter" />
          <span>{error && "le mail ou le mot de passe est incorrecte "}</span>
        </form>
      </div>
    </div>
  );
};

export default Login;
