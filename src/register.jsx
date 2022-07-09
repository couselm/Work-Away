import React from "react";
import { Routes, Route, Link } from "react-router-dom";


function Register() {
    return ( 
        <div> 
        <h2>Sign Up to WorkAway</h2>
    <p>Username:</p>
    <p>Password:</p>
    <Link to="/login">Login</Link>
        </div>
    )
}

export default Register;