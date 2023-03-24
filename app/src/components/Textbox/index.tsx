import { useDebounce } from '@/hooks';
import { TextboxProps } from '@/types';
import { findHashtags, replaceHashtags } from '@/utils';
import { ChangeEvent, forwardRef, useState } from 'react';
import { HashtagsList } from '../HashtagsList';
import './styles.scss';

function getDefault<T, K>(fn: (initialContent: T) => K, initialContent?: T) {
  return initialContent ? fn(initialContent) : [];
}

export const TextBox = forwardRef<HTMLTextAreaElement, TextboxProps>(
  ({ name, onChange, placeholder, error, hashtagsRef, initialContent }, ref) => {
    const defaultContent = getDefault(replaceHashtags, initialContent);
    const defaultHashtags = getDefault(findHashtags, initialContent);

    const [content, setContent] = useState<ReturnType<typeof replaceHashtags>>(defaultContent);
    const [hashtags, setHashtags] = useState<string[]>(defaultHashtags);
    const debouncedHashtags = useDebounce(hashtags, 1000);

    const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e);
      const value = e.target.value;
      const newContent = replaceHashtags(value);
      setContent(newContent);
      const newHashtags = findHashtags(value);
      setHashtags(newHashtags);
      hashtagsRef.current = newHashtags;
    };

    return (
      <div className="textbox">
        <textarea
          className="textbox__editor"
          ref={ref}
          name={name}
          onChange={handleInput}
          placeholder={placeholder}
        />
        <div className="textbox__placeholder">{content}</div>
        <HashtagsList tags={debouncedHashtags} />
        {error && error.message}
      </div>
    );
  }
);
