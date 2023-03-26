import { useDebounce } from '@/hooks';
import { HashtagsList } from '../HashtagsList';

interface Props {
  hashtags: string[];
}

export function DebouncedHashtagsList({ hashtags }: Props) {
  const debouncedHashtags = useDebounce(hashtags, 2000);

  return <HashtagsList hashtags={debouncedHashtags} />;
}
