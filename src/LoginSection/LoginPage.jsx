import React from "react";
import { Button } from "react-bootstrap";
import "./LoginSection.css";

const LoginPage = () => {
  return (
    <div className="loginpage">
          <div className="sub_loginpage">
            <form>
              <h1>Log in</h1>
              <label>Email</label>
              <br />
              <input type="email" name="email"></input>
              <br /> <br />
              <label>Password</label>
              <br /> 
              <input type="password" name="password"></input>
              <br /> <br />
              <Button variant="success">Log in</Button>
              <p><a href="#xyz">Forget password?</a></p>
             
            </form>
          </div>
    </div>
  );
};

export default LoginPage;
