import { useAppDispatch } from '@/hooks/hooks';
import { getNotes } from '@/redux/notesSlice';
import { useEffect } from 'react';

export function Layout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return <div>Layout</div>;
}
