import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Router from "next/router";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formStyle = {
        maxWidth: '300px',
        marginLeft: '10%',
        marginTop: '10%',
    };

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
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
            <link href="../components/custom.css" rel="stylesheet" />
            <Form className="signup" style={formStyle} onSubmit={handleSubmit} href="/" >
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}