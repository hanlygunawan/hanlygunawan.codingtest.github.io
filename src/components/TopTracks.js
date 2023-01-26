import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row } from "react-bootstrap";
import './cards.css';

export default function TopTracks() {
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState({});

  const TRACKS_ENDPOINT =
    "https://api.spotify.com/v1/me/top/tracks?time_range=long_term";

  const getParamsFromHash = (hash) => {
    const hashContent = hash.substr(1);
    const paramsSplit = hashContent.split("&");
    let params = {};
    let values = [];
    paramsSplit.forEach((param) => {
      values = param.split("=");
      params[values[0]] = values[1];
    });
    return params;
  };

  const getData = async (endpoint, setFunction) => {
    await axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setFunction(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      const tokens = getParamsFromHash(hash);
      localStorage.setItem("token", tokens.access_token);
      setToken(tokens.access_token);
      window.history.pushState({}, null, "/home");
    }
    getData(TRACKS_ENDPOINT, setTracks);
  }, []);

  return (
    <Container>
      {tracks.items && 
        <div className="tracks">
          <h4>Top Tracks</h4>
          <div>
            <Row className="mx-2 row row-cols-4">
              {tracks.items.map((tracks, index) => {
                console.log(tracks);
                return (
                  <div
                    key={index}
                    className="track"
                    style={{ textAlign: "center" }}
                  >                    
                    <Card className="cards mb-2 d-flex">
                      <Card.Img className="card-image"
                        src={tracks.album.images[0].url}
                        alt="album img"
                      />
                      <Card.Body>
                        <Card.Title className="card-name">{tracks.name}</Card.Title>
                        <Card.Title className="card-artist">{tracks.artists[0].name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
              ;
            </Row>
          </div>
        </div>
      };
    </Container>
  );
}
