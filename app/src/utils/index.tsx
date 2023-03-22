import { StringObject } from '@/types';
import reactStringReplace from 'react-string-replace';
import type { FormData } from '@/types';

const exp = /(#+[a-z0-9]{1,})/gi;

export const replaceHashtags = (text: string) => {
  return reactStringReplace(text, exp, (match, i) => <mark key={i}>{match}</mark>);
};

export const findHashtags = (text: string) => {
  return text.match(exp) || [];
};

export const transformData = (data: FormData, tags: string[]) => {
  const transformedTags = tags.reduce<StringObject>((acc, curr) => {
    acc[curr] = curr;
    return acc;
  }, {});
  return { ...data, tags: transformedTags };
};
