import axios from 'axios';

const notesApi = axios.create({
  baseURL: 'https://courageous-curious-krill.glitch.me/notes',
});
