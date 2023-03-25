import { initialFilter } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { NotesData } from '@/models/Notes';
import { getNotes } from '@/redux/notesSlice';
import { useEffect } from 'react';
import { NoteItem } from './NoteItem';

function filterNotes(notes: NotesData, filter: string) {
  return filter === initialFilter ? notes : notes.filter((note) => note.tags.includes(filter));
}

export function NotesList() {
  const filter = useAppSelector((state) => state.notes.filter);
  const notes = useAppSelector((state) => state.notes.notes);
  const dispatch = useAppDispatch();
  const filteredNotes = filterNotes(notes, filter);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <ul>
      {filteredNotes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          tags={note.tags}
        />
      ))}
    </ul>
  );
}
