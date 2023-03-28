import { useAppDispatch, useAppSelector } from '@/hooks';
import { getNotes } from '@/redux/notesSlice';
import { useEffect } from 'react';
import { AddNoteForm } from '../AddNoteForm';
import { FiltersList } from '../FiltersList';
import { Loader } from '../Loader';
import { NotesList } from '../NotesList';
import './index.style.scss';

export function Layout() {
  const isLoading = useAppSelector((state) => state.notes.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const content = isLoading ? (
    <Loader />
  ) : (
    <>
      <section className="main__left">
        <AddNoteForm />
      </section>
      <section className="main__right">
        <FiltersList />
        <NotesList />
      </section>
    </>
  );

  return <main className="main">{content}</main>;
}
