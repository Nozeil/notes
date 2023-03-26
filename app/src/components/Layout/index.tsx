import { AddNoteForm } from '../AddNoteForm';
import { FiltersList } from '../FiltersList';
import { NotesList } from '../NotesList';
import './index.style.scss';

export function Layout() {
  return (
    <main className="main">
      <section className="main__left">
        <AddNoteForm />
      </section>
      <section className="main__right">
        <FiltersList />
        <NotesList />
      </section>
    </main>
  );
}
