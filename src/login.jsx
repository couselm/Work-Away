import React from "react";
import { Routes, Route, Link } from "react-router-dom";


function Login() {
    return ( 
        <div> 
        <h2>Log-in to WorkAway</h2>
    <p>Username:</p>
    <p>Password:</p>
    <Link to="/register">Sign Up</Link>
        </div>
    )
}

export default Login;