import { AddNoteForm } from './AddNoteForm';
import { NotesList } from './NotesList';

export function Layout() {
  return (
    <main>
      <section>
        <AddNoteForm />
      </section>
      <section>
        <NotesList />
      </section>
    </main>
  );
}
