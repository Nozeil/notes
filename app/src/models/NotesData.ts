interface Note {
  id: string;
  title: string;
  content: string;
  tags: { [k: string]: string };
}

export type NotesData = Note[];
