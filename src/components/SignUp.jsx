import classes from "../css/SignUp.module.css";

const SignUp = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <h3>
          Welcome to{" "}
          <span
            style={{
              fontSize: "1.5rem",
              textDecoration: "none",
            }}
          >
            Sweet Repeats
          </span>
        </h3>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="Confirm password" />
        <div className={classes.phoneNumberContainer}>
          <select>
            <option>254</option>
          </select>
          <input type="number" placeholder="phone number" />
        </div>
      </div>
      <button type="submit">Sign up</button>
      <p>
        Already have an account? <span>Login</span> instead.
      </p>
    </div>
  );
};

export default SignUp;
