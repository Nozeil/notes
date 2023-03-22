import { v4 as uuidv4 } from 'uuid';

interface Props {
  tags: string[];
}

export function HashtagsList({ tags }: Props) {
  return (
    <ul>
      {tags.map((tag) => (
        <li key={uuidv4()}>{tag}</li>
      ))}
    </ul>
  );
}
