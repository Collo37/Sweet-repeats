import classes from "../css/Login.module.css";

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <h4>Welcome back to Sweet repeats</h4>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
      </div>
      <button type="submit">Login</button>
    </div>
  );
};

export default Login;
