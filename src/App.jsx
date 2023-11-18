import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
        alert("login successful");
      })
      .catch((error) => {
        console.log(error);
        alert("login Failed");
      });
  };

  return (
    <>
      <div className="login-form">
        <div className="sidecontent">
          <img src="./images/logo.png" alt="logo" className="logo" />
          <h1>CleanMyCar</h1>
          <p>India's first waterless car cleaning Company</p>
        </div>
        <div className="login-input">
          <div className="help">
            <p>Need help?</p>
          </div>
          <h2>Log in</h2>
          <div>
            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Phone"
                required
                value={email}
                onChange={handleEmail}
              />
              <label>Password</label>
              <input
                type="Password"
                placeholder="password"
                required
                value={password}
                onChange={handlePassword}
              />
              <p className="forgot">Forgot password?</p>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
