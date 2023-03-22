import { HashtagsList } from './HashtagsList';

interface Props {
  title: string;
  content: string;
  tags: string[];
}

export function NoteItem({ title, content, tags }: Props) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{content}</p>
      <HashtagsList tags={tags} />
    </li>
  );
}
