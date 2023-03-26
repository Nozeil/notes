import { v4 as uuidv4 } from 'uuid';
import './index.style.scss';

interface Props {
  hashtags: string[];
}

export function HashtagsList({ hashtags }: Props) {
  return (
    <ul className="hashtags-list">
      {hashtags.map((hashtag) => (
        <li key={uuidv4()}>{hashtag}</li>
      ))}
    </ul>
  );
}
