/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Cookies from "universal-cookie";
import userService from "../../services/user";
import { setUserSession } from "../../utils/common";
import appContext from "../../contexts/context";
import "./login.scss";

const cookies = new Cookies();

const Login = (props) => {
  const context = useContext(appContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (email !== "" && password !== "") {
      try {
        const response = await userService.login(email, password);
        await setUserSession(response.data.token, response.data.user);
        cookies.set("authcookie", response.data.token, { path: "/" });
        setLoading(false);
        setMessage("");
        context.setAuth(true);
        context.setUser(response.data.user);
        props.history.push("/");
      } catch (e) {
        setMessage(e.response.data.message);
        setLoading(false);
      }
    } else {
      setMessage("Mot de passe et email recquis");
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="formTitle">Connexion</h1>
      <form className="loginForm">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {message && <p className="error-msg">{message}</p>}
        <input
          type="button"
          value={loading ? "Chargement..." : "Se connecter"}
          disabled={loading}
          onClick={handleLogin}
        />
      </form>
    </>
  );
};

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Login;
