import { TextboxProps } from '@/types';
import { findHashtags, replaceHashtags } from '@/utils';
import { ChangeEvent, forwardRef, UIEvent, useEffect, useRef, useState } from 'react';
import reactStringReplace from 'react-string-replace';
import { DebouncedHashtagsList } from '../DebouncedHashtagsList';
import './index.style.scss';

export type ReplacedArr = ReturnType<typeof reactStringReplace>;

function getDefault<T, K>(fn: (initialContent: T) => K, initialContent?: T) {
  return initialContent ? fn(initialContent) : [];
}

export const TextBox = forwardRef<HTMLTextAreaElement, TextboxProps>(
  (
    { name, onChange, placeholder, error, hashtagsRef, initialContent, isSubmitSuccessful },
    ref
  ) => {
    const [content, setContent] = useState<ReplacedArr>([]);
    const [hashtags, setHashtags] = useState<string[]>([]);

    const placeholderRef = useRef<HTMLDivElement>(null);

    const setBoxState = (content: ReplacedArr, hashtags: string[]) => {
      setContent(content);
      setHashtags(hashtags);
    };

    useEffect(() => {
      if (isSubmitSuccessful) {
        setBoxState([], []);
      }
    }, [isSubmitSuccessful]);

    useEffect(() => {
      const defaultContent = getDefault(replaceHashtags, initialContent);
      const defaultHashtags = getDefault(findHashtags, initialContent);
      setBoxState(defaultContent, defaultHashtags);
    }, [initialContent]);

    const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e);
      const value = e.currentTarget.value;
      const newContent = replaceHashtags(value);
      const newHashtags = findHashtags(value);
      setBoxState(newContent, newHashtags);
      hashtagsRef.current = newHashtags;
    };

    const onScroll = (e: UIEvent<HTMLTextAreaElement>) => {
      const target = e.currentTarget;
      const top = target.scrollTop;
      placeholderRef.current?.scrollTo({ top });
    };

    const textareaClassName = error ? 'textbox__editor textbox__editor_error' : 'textbox__editor';

    return (
      <div className="textbox">
        <textarea
          className={textareaClassName}
          ref={ref}
          name={name}
          onChange={handleInput}
          onScroll={onScroll}
          placeholder={placeholder}
        />
        <div ref={placeholderRef} className="textbox__placeholder">
          {content}
        </div>
        <label className="textbox__error">{error && error.message}</label>
        <DebouncedHashtagsList hashtags={hashtags} />
      </div>
    );
  }
);
