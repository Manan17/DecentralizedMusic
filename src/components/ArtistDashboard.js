import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './ArtistDashboard.css';
export default function ArtistDashboard() {
  return (
    <>
      <div className="wrapper-row">
        <div className="wrapper-column">
          <Card className="card">
            <Card.Body className="card-body">
              <h2 className="text-center">Profile</h2>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
