import type { NotesData } from '@/models/NotesData';
import axios from 'axios';

const BASE_URL = 'https://courageous-curious-krill.glitch.me/notes';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

const getNotes = async () => {
  const resp = await apiClient<NotesData>('');
  return resp.data;
};

export const notesApi = { getNotes };
