import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../components/Navigation";
import TopTracks from "../components/TopTracks";
import Footer from "../components/Footer";
import TopPlaylist from "../components/TopPlaylist";

const Home = () => {

  return (
    <>
    <Navigation/>
    <TopTracks/>
    <TopPlaylist/>
    <Footer/>
    </>
  );
};

export default Home;
