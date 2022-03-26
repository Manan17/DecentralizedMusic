import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { encode as base64_encode } from 'base-64';

export default function Dashboard() {
  const [error, setError] = useState('');
  const [playlist, setPlaylist] = useState();
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          base64_encode(
            '85acc1ba7c3a4349b1abca61d53e2b26' +
              ':' +
              'ae1de5a2ad0c4ab4983f3d0a3b22ae68'
          ),
      },
      data: 'grant_type=client_credentials',
      method: 'POST',
    }).then((tokenResponse) => {
      axios(`https://spotify23.p.rapidapi.com/search/`, {
        method: 'GET',
        params: {
          q: 'drake',
          type: 'multi',
          offset: '0',
          limit: '10',
          numberOfTopResults: '5',
        },
        headers: {
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
          'X-RapidAPI-Key':
            '20baf1fca8msha5de52bce1c53b5p147629jsn796ca2bbb868',
          //Authorization: 'Bearer ' + tokenResponse.data.access_token,
        },
      }).then((playlistResponse) => {
        console.log('tracks', playlistResponse.data.tracks.items);
        setPlaylist(playlistResponse.data.tracks.items);
      });
    });
  }, []);

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
