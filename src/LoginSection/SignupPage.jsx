import React from 'react'
import {Button } from "react-bootstrap"
import "./LoginSection.css"


const SignupPage = () => {
    return (
        <div className="signup_page">
            <div className="sub_signup_page">
            <form>
              <h1>Sign up</h1>
              <label>Email</label>
              <br />
              <input type="email" name="email"></input>
              <br /> <br />
              <label>Password</label>
              <br /> 
              <input type="password" name="password"></input>
              <br /> <br />
              <label>Confirm Password</label>
              <br /> 
              <input type="password" name="password"></input>
              <br /> <br />
              <Button variant="success">Sign up</Button>
            </form>
            </div>
        </div>
    )
}

export default SignupPage
