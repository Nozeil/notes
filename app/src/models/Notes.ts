import { StringObject } from '@/types';

interface Note {
  title: string;
  content: string;
  tags: StringObject;
}

export interface NoteResponse extends Note {
  id: number;
}

export interface NoteRequest extends Note {
  id?: number;
}

export type NotesData = NoteResponse[];
