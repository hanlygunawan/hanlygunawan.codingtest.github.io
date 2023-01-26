import React from 'react'
import { Container } from 'react-bootstrap';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL_AFTER_LOGIN, SCOPES, SPOTIFY_AUTHORIZE_ENDPOINT } from '../auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {

    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES}&response_type=token&show_dialog=true`;
    }

    return (
    <Container>
        <h1 className='login '>Login Spotify</h1>
        <button  onClick={() => handleLogin()}>Login</button>
    </Container>
  );
};
