import reactStringReplace from 'react-string-replace';
import type { FormData } from '@/types';
import { NoteResponse } from '@/models/Notes';
import { HASH_EX, LINEFEED_EX } from './index.constants';

export const getUniqTags = (tags: string[]) => Array.from(new Set(tags));

export const replaceHashtags = (text: string) => {
  const newText = text.replace(LINEFEED_EX, '\n\n');
  return reactStringReplace(newText, HASH_EX, (match, i) => <mark key={i}>{match}</mark>);
};

export const findHashtags = (text: string) => {
  const hashTags = text.match(HASH_EX) || [];
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
