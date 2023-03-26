import { useAppDispatch, useAppSelector } from '@/hooks';
import { setFilter } from '@/redux/notesSlice';
import { v4 as uuidv4 } from 'uuid';
import './index.style.scss';

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

  const setItemClassName = (tag: string) =>
    tag === filter ? 'filters-list__item filters-list__item_active' : 'filters-list__item';

  return (
    <ul className="filters-list">
      {allTags.map((tag) => (
        <li className={setItemClassName(tag)} key={uuidv4()} onClick={() => onClick(tag)}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
