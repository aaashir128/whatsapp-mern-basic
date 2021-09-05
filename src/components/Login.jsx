import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, fbProvider, gProvider } from "../config/firebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
    setEmail("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // history.push("/");
      })

      .catch((error) => {
        alert(error.message);
      });

    setEmail("");
    setPassword("");
  };

  const googleLogIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(gProvider)
      .then((result) => {
        // history.push("/");
      })

      .catch((error) => {
        alert(error.message);
      });
  };

  // const fbLogIn = (e) => {
  //   e.preventDefault();
  //   auth
  //     .signInWithPopup(fbProvider)
  //     .then((result) => {
  //       // history.push("/");
  //     })

  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  return (
    <div className="login">
      <div className="login__container">
        <img
          className="login__logo"
          src="https://www.designfreelogoonline.com/wp-content/uploads/2016/03/000707-online-digital-eye-logo-free-logo-maker-02.png"
          alt="logo"
        />

        {/* <div className="login__empty"></div> */}
        <div className="login__details">
          <form>
            {/* <h4>Email</h4> */}
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <h4>Password</h4> */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} type="submit">
              Login
            </button>
          </form>
          <button onClick={googleLogIn}>Sign In with Google</button>

          {/* <button onClick={fbLogIn}>Sign In with Facebook</button> */}

          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
