import React, { useState } from "react";
import Router from "next/router";
import firebase from 'firebase/app';
import clientCredentials from '../credentials/client';
import styles from '../styling/auth';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (!firebase.apps.length)
        firebase.initializeApp(clientCredentials);

    function handleLogin(event) {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            console.log(error);
        });
        Router.push("/");
    }

    function handleSignup(event) {
        event.preventDefault();
        Router.push("/signup");
    }

    return (
        <>
            <form className="login" href="/" >
                <div className="intro">
                    Sign in.
                </div>
                <div>
                    <label>Email address</label>
                    <input type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleSignup}>Sign up instead</button>
            </form>
            <style jsx>{styles}</style>
        </>
    );
}