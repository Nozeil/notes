import { useAppDispatch } from '@/hooks';
import { deleteNote, getNotes } from '@/redux/notesSlice';

interface Props {
  id: number;
}

export function DeleteButton({ id }: Props) {
  const dispatch = useAppDispatch();

  const onClick = async () => {
    await dispatch(deleteNote(id));
    await dispatch(getNotes());
  };

  return <button onClick={onClick}>Delete</button>;
}
