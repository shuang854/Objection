import React, { useState, useEffect, useRef } from "react";
import Router from "next/router";
import firebase from 'firebase';
import clientCredentials from '../credentials/client';
import styles from '../styling/auth';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    var _isMounted = false;

    useEffect(() => {
        require('firebase/auth');
        if (!firebase.apps.length)
            firebase.initializeApp(clientCredentials);
        _isMounted = true;

        return function cleanup() {
            _isMounted = false;
        }
    });
    
    function handleLogin(event) {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            Router.push("/");
        }).catch(function(error) {
            setError(error.message);
        });
    }

    function handleSignup(event) {
        event.preventDefault();
        Router.push("/signup");
    }

    function changeEmail(email) {
        if (_isMounted)
            setEmail(email);
    }

    function changePassword(pass) {
        if (_isMounted)
            setPassword(pass);
    }

    return (
        <>
            <form className="login" href="/" >
                <div className="error">
                    {error}
                </div>
                <div className="intro">
                    Sign in.
                </div>
                <div>
                    <label>Email address</label>
                    <input type="email" placeholder="Enter email" onChange={e => changeEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={e => changePassword(e.target.value)}/>
                </div>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleSignup}>Sign up instead</button>
            </form>
            <style jsx>{styles}</style>
        </>
    );
}