interface Note {
  title: string;
  content: string;
  tags: string[];
}

export interface NoteResponse extends Note {
  id: number;
}

export interface NoteRequest extends Note {
  id?: number;
}

export type NotesData = NoteResponse[];
