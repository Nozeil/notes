import { AddNoteForm } from './AddNoteForm';
import { NotesList } from './NotesList';

export function Layout() {
  return (
    <main>
      <AddNoteForm />
      <NotesList />
    </main>
  );
}
