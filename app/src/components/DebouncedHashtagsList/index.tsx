import { useDebounce } from '@/hooks';
import { useEffect, useState } from 'react';
import { HashtagsList } from '../HashtagsList';

interface Props {
  isInput: boolean;
  hashtags: string[];
}

export function DebouncedHashtagsList({ hashtags, isInput }: Props) {
  const [delay, setDelay] = useState<number>(0);
  const debouncedHashtags = useDebounce(hashtags, delay);

  useEffect(() => {
    if (isInput) {
      setDelay(2000);
    } else {
      setDelay(0);
    }
  }, [isInput]);

  return <HashtagsList hashtags={debouncedHashtags} />;
}
