import React, { Fragment, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import LockOpenIcon from "@material-ui/icons/LockOpen"

const Login = () => {

    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");

    const loginSubmit = () => {

    }

    return (
        <Fragment>
            <div className="loginContainer">
                <div className="loginBox">
                    <form className="loginForm" onSubmit={loginSubmit}>
                        <div className="loginEmail">
                            <MailOutlineIcon/>
                            <input
                            type="email"
                            placeholder="Email"
                            required
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)} 
                            />
                        </div>
                        <div className="loginPassword">
                            <LockOpenIcon/>
                            <input
                            type="password"
                            placeholder="Password"
                            required
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)} 
                            />
                        </div>
                        <Link to="/reset/password">Reset Password</Link>
                        <input type="submit" value="login" className="loginBtn"/>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login