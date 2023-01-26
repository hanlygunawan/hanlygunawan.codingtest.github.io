import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";
import TopTracks from "../components/TopTracks";
import Footer from "../components/Footer";

export default function Profile() {
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState({});
  

  const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";

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
    getData(PROFILE_ENDPOINT, setProfile);
  }, []);

  return (
    <div >
    <Navigation/>
      <Container className="">
        {profile.display_name && profile.images && (
          <div className="profile align-items-center text-center text-dark">
            <h1>PROFILE</h1>
            <img src={profile.images[0].url} className="rounded " alt="profile img" />
            <br/>
            <h2 className="mt-2">Hello, {profile.display_name}</h2>
          </div>
        )}
      </Container>
      <TopTracks/>
      <Footer/>
    </div>
  );
}
