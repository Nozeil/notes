import { useAppDispatch } from '@/hooks';
import { deleteNote, getNotes } from '@/redux/notesSlice';

interface Props {
  id: number;
  className: string;
}

export function DeleteButton({ id, className }: Props) {
  const dispatch = useAppDispatch();

  const onClick = async () => {
    await dispatch(deleteNote(id));
    await dispatch(getNotes());
  };

  return <button className={className} onClick={onClick} />;
}
