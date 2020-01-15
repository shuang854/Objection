import React, { useState } from "react";
import Router from "next/router";
import firebase from 'firebase';
import clientCredentials from '../credentials/client';
import styles from '../styling/auth';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(" ");

    require('firebase/auth');
    if (!firebase.apps.length)
        firebase.initializeApp(clientCredentials);

    function handleSubmit(event) {
        event.preventDefault();
        const db = firebase.firestore();
        firebase.auth().createUserWithEmailAndPassword(email, password).then((data) => {
            console.log(data.user);
            db.collection('users').doc(data.user.uid).set({
                'username': username
            });
            Router.push("/");
        }).catch(function(error) {
            console.log(error);
            setError(error.message);
        });
    }

    return (
        <>
            <form className="signup" onSubmit={handleSubmit} href="/" >
                <div className="error">
                    {error}
                </div>
                <div className="intro">
                    Create an account.
                </div>
                <div>
                    <label>Email address</label>
                    <input type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                    <small className="text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div>
                    <label>Username</label>
                    <input placeholder="Username" onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <button>Sign up</button>
            </form>
            <style jsx>{styles}</style>
        </>
    );
}