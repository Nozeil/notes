import type { NoteRequest, NoteResponse, NotesData } from '@/models/Notes';
import axios from 'axios';

const BASE_URL = 'https://glory-woolen-wren.glitch.me/notes';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

const getNotes = async () => {
  const resp = await apiClient<NotesData>('');
  return resp.data;
};

const createNote = async ({ title, content, tags }: NoteRequest) => {
  const resp = await apiClient.post<NoteResponse>('', {
    title,
    content,
    tags,
  });
  return resp.data;
};

export const notesApi = { getNotes, createNote };
