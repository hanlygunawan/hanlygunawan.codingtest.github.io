const CLIENT_ID = 'bcf654acddb64adc8f83bcc50949cd29';
const CLIENT_SECRET = "c518259971fc4ad88846710ba78f72b5";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/home";
const SCOPES = [
    "user-top-read",
    "user-read-private",
    "user-library-read",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-follow-read",
    "user-library-modify",
    "playlist-modify-private",
    "playlist-modify-public"

];
module.exports = {CLIENT_ID, CLIENT_SECRET, SPOTIFY_AUTHORIZE_ENDPOINT, REDIRECT_URL_AFTER_LOGIN, SCOPES};