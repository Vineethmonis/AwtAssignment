
import React, { useState } from "react";
import "./Password.css";

function Password() {

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validatePassword = () => {

    const capital = /[A-Z]/;
    const small = /[a-z]/;
    const number = /[0-9]/;
    const special = /[!@#$%^&*]/;
    const length = /.{8,}/;

    if (
      capital.test(password) &&
      small.test(password) &&
      number.test(password) &&
      special.test(password) &&
      length.test(password)
    ) {
      setMessage("Password is Valid!");
    } 
    else {
      setMessage("Invalid Password! Try Again.");
    }
  };

  return (
    <div className="container">

      <h2>Password Validation</h2>

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setMessage("");
        }}
      />

      <button onClick={validatePassword}>
        Validate Password
      </button>

      <h3 className={
        message === "Password is Valid!"
          ? "success"
          : "error"
      }>
        {message}
      </h3>

      <div className="requirements">
        <p>Password must contain:</p>
        <ul>
          <li>At least one capital letter</li>
          <li>At least one small letter</li>
          <li>At least one number</li>
          <li>At least one special character</li>
          <li>Minimum 8 characters</li>
        </ul>
      </div>

    </div>
  );
}

export default Password;
