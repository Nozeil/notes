import { StringObject } from '@/types';

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: StringObject;
}

export type NotesData = Note[];
