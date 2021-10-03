import React from 'react'
import { Route, Switch } from 'react-router'
import LoginPage from './LoginPage'
import LoginSection from './LoginSection'
import SignupPage from './SignupPage'
const SignupLoginSection = () => {
    return (
        <div>
            <LoginSection />
            <Switch>
                <Route  path to="/loginpage" component={LoginPage} />
                <Route  path to="/signuppage" component={SignupPage} />
            </Switch>
        </div>
    )
}

export default SignupLoginSection
