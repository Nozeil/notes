import reactStringReplace from 'react-string-replace';
import type { FormData } from '@/types';
import { NoteResponse } from '@/models/Notes';

const exp = /(#+[a-z0-9]{1,})/gi;

export const getUniqTags = (tags: string[]) => Array.from(new Set(tags));

export const replaceHashtags = (text: string) => {
  return reactStringReplace(text, exp, (match, i) => <mark key={i}>{match}</mark>);
};

export const findHashtags = (text: string) => {
  const hashTags = text.match(exp) || [];
  return getUniqTags(hashTags);
};

export const transformData = (data: FormData, tags: string[], id?: number) => {
  const result = id ? { ...data, tags: tags, id } : { ...data, tags: tags };
  return result;
};

export const getAllTagsFromNotes = (notes: NoteResponse[]) => {
  const tags = notes.reduce<string[]>((acc, note) => {
    return acc.concat(...Object.values(note.tags));
  }, []);
  return getUniqTags(tags);
};
