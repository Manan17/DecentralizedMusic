import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import logo from "../assets/nirvanalogo.png";
export default function ArtistLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    window.location = "/ArtistDashboard";

    // try {
    //   setError('');
    //   setLoading(true);
    //   await login(emailRef.current.value, passwordRef.current.value);
    //   history.push('/ArtistDashboard');
    // } catch {
    //   setError('Failed to log in');
    // }

    // setLoading(false);
  }

  return (
    <>
      <div className="mainLogin">
        <div className="artistLeftSide">
          <div className="topLogoHeader">
            <img className="logo" src={logo} />
            <h1 className="nirvana">Nirvana</h1>
          </div>
          <img
            className="gif"
            src="https://i.pinimg.com/originals/3b/5a/b9/3b5ab90e804b1e1658c668afa9a75f28.gif"
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
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button
                  disabled={loading}
                  className="w-100 passwordButton buttonStyle"
                  type="submit "
                >
                  Log In as Aritst
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
