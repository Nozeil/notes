import { NoteResponse } from '@/models/Notes';
import { DeleteButton } from './DeleteButton';
import { HashtagsList } from './HashtagsList';

interface Props extends Omit<NoteResponse, 'tags'> {
  tags: string[];
}

export function NoteItem({ id, title, content, tags }: Props) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{content}</p>
      <HashtagsList tags={tags} />
      <DeleteButton id={id} />
    </li>
  );
}
