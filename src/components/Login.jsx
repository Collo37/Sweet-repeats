import { useRef } from "react";
import { publicRequest } from "./axios";
import classes from "../css/Login.module.css";
import { useHistory } from "react-router";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const history = useHistory();

  const loginClickedHandler = async () => {
    try {
      const res = await publicRequest.post(`/users/login`, {
        email: email.current.value,
        password: password.current.value,
      });
      localStorage.setItem("Token", res.data.userdata.accessToken);
      history.push("/");
    } catch (err) {
      alert("Incorrect credentials. Try again");
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <h4>Welcome back to Sweet repeats</h4>
        <input type="email" placeholder="email" ref={email} />
        <input type="password" placeholder="password" ref={password} />
      </div>
      <button onClick={loginClickedHandler}>Login</button>
    </div>
  );
};

export default Login;
