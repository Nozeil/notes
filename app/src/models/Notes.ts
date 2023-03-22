import { StringObject } from '@/types';

export interface NoteResponse {
  id: string;
  title: string;
  content: string;
  tags: StringObject;
}

export type NoteRequest = Omit<NoteResponse, 'id'>;

export type NotesData = NoteResponse[];
