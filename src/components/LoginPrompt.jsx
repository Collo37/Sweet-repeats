import classes from "../css/LoginPrompt.module.css";
import { useHistory } from "react-router-dom";
const LoginPrompt = () => {
  const history = useHistory();
  return (
    <div
      classNam={classes.Container}
      style={{
        position: "fixed",
        width: "90vw",
        height: "40vh",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "15",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "deeppink",
        borderRadius: "10px",
        boxShadow: "2px 3px 5px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className={classes.Prompt}>
        <p>You need to be logged in to do Add favorite Items</p>
      </div>
      <div className={classes.loginButtonsContainer}>
        <button
          className={classes.signUp}
          onClick={() => history.push("/signup")}
        >
          Sign up
        </button>
        <button
          className={classes.login}
          onClick={() => history.push("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPrompt;
