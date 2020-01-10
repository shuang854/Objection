import React, { useState } from "react";
import Router from "next/router";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            console.log(error);
        });
        Router.push("/");
    }

    var firebase = require("firebase/app");
    require("firebase/auth");
    var firebaseConfig = {
        apiKey: "AIzaSyBz4xV2rQpIVJC7BdYAV9x1zcUuAuNPxWU",
        authDomain: "objection-aebf9.firebaseapp.com",
        databaseURL: "https://objection-aebf9.firebaseio.com",
        projectId: "objection-aebf9",
        storageBucket: "objection-aebf9.appspot.com",
        messagingSenderId: "710244510578",
        appId: "1:710244510578:web:90c6aa662c7befd0fc4beb",
        measurementId: "G-18QK219PSF"
    };
    if (!firebase.apps.length)
        firebase.initializeApp(firebaseConfig);

    return (
        <>
            <form className="signup" onSubmit={handleSubmit} href="/" >
                <div className="formBasicEmail" >
                    <label>Email address</label>
                    <input type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                    <small className="text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div controlId="formBasicPassword">
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <button variant="primary" type="submit">
                    Sign up
                </button>
            </form>
            <style jsx>{`
                form {
                    font-family: Verdana, Geneva, sans-serif;
                    font-size: 20px;
                    max-width: 500px;
                    margin-left: calc(50% - 250px);
                    margin-top: 200px;
                }

                form small {
                    display: block;
                    font-size: 10px;
                }

                form input {
                    width: 100%;
                    border-radius: .25rem;
                    border: 1px solid #ced4de;
                    font-size: 16px;
                    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                    padding: .375rem .75rem;
                    outline: none;
                    margin-bottom: .3rem;
                }

                form input:focus {
                    box-shadow: 0 0 3px 3px #b3e0ff;
                    border-color: #66c2ff;
                }

                form label {
                    display: block;
                    margin-bottom: .5rem;
                }

                form button {
                    padding: .5rem 1rem;
                    font-size: 1rem;
                    border: 1px solid transparent;
                    border-radius: .25rem;
                    background-color: #008ae6;
                    border-color: #008ae6;
                    color: #fff;
                }

                form button:hover {
                    background-color: #006bb3;
                    border-color: #006bb3;
                }

                form div {
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    );
}