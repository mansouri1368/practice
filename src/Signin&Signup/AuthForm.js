import { useState } from "react";
import styles from "./Login.module.css";

export default function AuthForm({ onSubmit }) {
  const [inputs, setInputs] = useState({
    username: "",
    cUsername: "",
    password: "",
    cPassword: "",
  });
  
  const [credentials, setCredentials] = useState({
    username: false,
    cUsername: false,
    password: false,
    cPassword: false,
  });

  const [isSigningup, setIsSigningup] = useState(false);

  const {
    username: usernameIsInvalid,
    cUsername: usernameIsUnConfirmed,
    password: passwordIsInvalid,
    cPassword: passwordIsUnConfirmed,
  } = credentials;

  function onChangeHandler(e) {
   
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setInputs((cr) => ({ ...cr, [name]: value }));
    setCredentials((cr) => ({ ...cr, [name]: !value }));
  }

  function signupHandler() {
    if (isSigningup) {
      setIsSigningup(false);
    } else {
      setIsSigningup(true);
    }
  }

  function submitHandler(e) {
    e.preventDefault();

    const username=inputs.username.trim();
    const cUsername=inputs.cUsername.trim();
    const password=inputs.password.trim();
    const cPassword=inputs.cPassword.trim();

    const usernameIsvalid =
      username.includes("@") && username.length > 1;
    const usernameIsEqual = username === cUsername;
    const passwordIsvalid = password.length > 4;
    const passwordIsEqual = password === cPassword;

    if (isSigningup) {
      if (
        !usernameIsvalid ||
        !usernameIsEqual ||
        !passwordIsvalid ||
        !passwordIsEqual
      ) {
        setCredentials({
          username: !usernameIsvalid,
          cUsername: !usernameIsEqual,
          password: !passwordIsvalid,
          cPassword: !passwordIsEqual,
        });
        console.log(credentials,inputs);
        return;
      }
    } else {
      if (!usernameIsvalid || !passwordIsvalid) {
        setCredentials({
          username: !usernameIsvalid,
          password: !passwordIsvalid,
        });
        console.log(credentials,inputs);
        return;
      }
    }
    onSubmit(inputs, isSigningup);
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label>Username</label>
      <input
        className={`${usernameIsInvalid && styles.invalid}`}
        name="username"
        value={inputs.username}
        onChange={onChangeHandler}
      />
      {isSigningup && (
        <>
          <label>Confirm Username</label>
          <input
            className={`${usernameIsUnConfirmed && styles.invalid}`}
            name="cUsername"
            value={inputs.cUsername}
            onChange={onChangeHandler}
          />
        </>
      )}
      <label>Password</label>
      <input
        className={`${passwordIsInvalid && styles.invalid}`}
        name="password"
        value={inputs.password}
        onChange={onChangeHandler}
      />
      {isSigningup && (
        <>
          <label> Confirm Password</label>
          <input
            className={`${passwordIsUnConfirmed && styles.invalid}`}
            name="cPassword"
            value={inputs.cPassword}
            onChange={onChangeHandler}
          />
        </>
      )}
      <div className={styles.buttonContainer}>
        <button type="button" onClick={signupHandler}>
          sign up
        </button>
        <button type="submit">log in</button>
      </div>
    </form>
  );
}
