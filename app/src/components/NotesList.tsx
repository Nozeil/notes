import { useAppDispatch, useAppSelector } from '@/hooks';
import { getNotes } from '@/redux/notesSlice';
import { StringObject } from '@/types';
import { useEffect } from 'react';
import { NoteItem } from './NoteItem';

const createTagsArr = (tags: StringObject) => Object.values(tags);

export function NotesList() {
  const notes = useAppSelector((state) => state.notes.notes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <ul>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          tags={createTagsArr(note.tags)}
        />
      ))}
    </ul>
  );
}
