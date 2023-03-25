import { useAppDispatch, useAppSelector } from '@/hooks';
import { setFilter } from '@/redux/notesSlice';
import { v4 as uuidv4 } from 'uuid';

export function FiltersList() {
  const filter = useAppSelector((state) => state.notes.filter);
  const allTags = useAppSelector((state) => state.notes.allTags);
  const dispatch = useAppDispatch();

  const onClick = async (tag: string) => {
    if (tag === filter) {
      return;
    }
    dispatch(setFilter(tag));
  };

  return (
    <ul>
      {allTags.map((tag) => (
        <li key={uuidv4()} onClick={() => onClick(tag)}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
