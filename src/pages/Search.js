import React, { useState, useEffect} from "react";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import Navigation from "../components/Navigation";
import SearchResult from "../components/SearchResult";


export default function Search() {
    const [token, setToken] = useState("");
    const [search, setSearch] = useState({});
    const [searchResults, setSearchResults] = useState([])

    const SEARCH_ENDPOINT = `https://api.spotify.com/v1/search?q=${search}type=album`

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
      getData(SEARCH_ENDPOINT, setSearch);
    }, []);


  return (
    <>
    <Navigation/>
    <Container>
      <Form>
        <Form.Control type="search" placeholder="Search Songs/Artists" value={searchResults} onChange={e => setSearch(e.target.value)}/>
        <Container>
          {setSearchResults.map(track =>  (
            <SearchResult track={track} key={track.uri} />
          ))}
          
        </Container>
      </Form>
    </Container>
    </>
    
  );
}
