import { initialFilter } from '@/constants';
import { useAppSelector } from '@/hooks';
import { NotesData } from '@/models/Notes';
import { NoteItem } from '../NoteItem';
import './index.style.scss';

function filterNotes(notes: NotesData, filter: string) {
  return filter === initialFilter ? notes : notes.filter((note) => note.tags.includes(filter));
}

export function NotesList() {
  const { filter, notes } = useAppSelector((state) => state.notes);
  const filteredNotes = filterNotes(notes, filter);

  const content = notes.length ? (
    <ul className="notes-list">
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
  ) : (
    <h4 className="title">You don&apos;t have any notes yet</h4>
  );

  return content;
}
