import { AddNoteForm } from './AddNoteForm';
import { FiltersList } from './FiltersList';
import { NotesList } from './NotesList';

export function Layout() {
  return (
    <main>
      <section>
        <AddNoteForm />
      </section>
      <section>
        <FiltersList />
        <NotesList />
      </section>
    </main>
  );
}
