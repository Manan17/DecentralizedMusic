import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import logo from "../assets/nirvanalogo.png";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/UserDashboard");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="mainLogin">
        <div className="leftSide">
          <div className="topLogoHeader">
            <img className="logo" src={logo} />
            <h1 className="nirvana">Nirvana</h1>
          </div>
          <img
            className="gif"
            src="https://uploads-ssl.webflow.com/5fb7b360073b51cf7bb31896/5fbccaf01a2f0fb2c8ff5bbf_Girl-with-headphones-1.gif"
          />
          <h1 className="musicspeak">Let the Music Speak!</h1>
        </div>
        <div className="rightSide">
          <Card className="bgyellow">
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password" className="passwordButton">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button
                  disabled={loading}
                  className="w-100 passwordButton buttonStyle"
                  type="submit"
                >
                  Log In as User
                </Button>
                <Button className="w-100 text-center mt-3 buttonStyle">
                  <Link to="/Artist-Login">
                    <h6 className="artistText ">Artist Login</h6>
                  </Link>
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}
