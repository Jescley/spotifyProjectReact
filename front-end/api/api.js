import axios from 'axios';

const URL = "http://localhost:3000";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// teste de funcionalidade ignora//

// .data pega so os arrays
// console.log(responseArtists.data);
// console.log(responseSongs.data);