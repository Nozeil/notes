import { NoteResponse } from '@/models/Notes';
import { useState } from 'react';
import { DeleteButton } from './DeleteButton';
import { EditButton } from './EditButton';
import { EditNoteForm } from './EditNoteForm';
import { HashtagsList } from './HashtagsList';

interface Props extends Omit<NoteResponse, 'tags'> {
  tags: string[];
}

export function NoteItem({ id, title, content, tags }: Props) {
  const [isForm, setIsForm] = useState(false);

  const toggleIsForm = () => setIsForm(!isForm);

  const element = isForm ? (
    <EditNoteForm id={id} title={title} content={content} toggler={toggleIsForm} />
  ) : (
    <li>
      <h3>{title}</h3>
      <p>{content}</p>
      <HashtagsList tags={tags} />
      <EditButton toggler={toggleIsForm} />
      <DeleteButton id={id} />
    </li>
  );

  return element;
}
