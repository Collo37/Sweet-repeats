import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { publicRequest } from "./axios";
import classes from "../css/SignUp.module.css";

const SignUp = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const passwordConfirm = useRef(null);
  const phone = useRef(null);
  const history = useHistory();

  const signUpClickedHandler = async () => {
    if (
      (name.current.value.length > 1,
      password.current.value.length > 7,
      passwordConfirm.current.value.length > 7,
      email.current.value.length > 5,
      +phone.current.value.length > 8)
    ) {
      try {
        await publicRequest.post("/users/signup", {
          userName: name.current.value,
          password: password.current.value,
          email: email.current.value,
          phone: phone.current.value,
        });
        history.push("/login");
      } catch (err) {
        alert("this user already exists. Log in instead");
      }
    } else alert("Please fill the form correctly");
  };

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
        <input type="text" placeholder="Full Name" ref={name} />
        <input type="email" placeholder="email" ref={email} />
        <input type="password" placeholder="password" ref={password} />
        <input
          type="password"
          placeholder="Confirm password"
          ref={passwordConfirm}
        />
        <div className={classes.phoneNumberContainer}>
          <select>
            <option>254</option>
          </select>
          <input type="number" placeholder="phone number" ref={phone} />
        </div>
      </div>
      <button onClick={signUpClickedHandler}>Sign up</button>
      <p>
        Already have an account?{" "}
        <span onClick={() => history.push("/login")}>Login</span> instead.
      </p>
    </div>
  );
};

export default SignUp;
