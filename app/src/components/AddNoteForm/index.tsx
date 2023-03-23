import { useAppDispatch } from '@/hooks';
import { createNote, getNotes } from '@/redux/notesSlice';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { TextBox } from '../TextBox';
import { TextInput } from '../TextInput';
import { Messages, Names, Placeholders } from './constants';
import type { FormData } from '@/types';
import { transformData } from '@/utils';
import { v4 as uuidv4 } from 'uuid';

export function AddNoteForm() {
  const hashtagsRef = useRef<string[]>([]);
  const dispatch = useAppDispatch();
  const id = uuidv4();

  const { TITLE_NAME, CONTENT_NAME } = Names;
  const { TITLE_PLACEHOLDER, CONTENT_PLACEHOLDER } = Placeholders;
  const { TITLE_MESSAGE, CONTENT_MESSAGE } = Messages;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    const transformedData = transformData(data, hashtagsRef.current);
    reset();
    await dispatch(createNote(transformedData));
    await dispatch(getNotes());
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          placeholder={TITLE_PLACEHOLDER}
          error={errors.title}
          {...register(TITLE_NAME, {
            required: { value: true, message: TITLE_MESSAGE },
          })}
        />
        <TextBox
          key={id}
          hashtagsRef={hashtagsRef}
          placeholder={CONTENT_PLACEHOLDER}
          error={errors.content}
          {...register(CONTENT_NAME, {
            required: { value: true, message: CONTENT_MESSAGE },
          })}
        />
        <input type="submit" value="Create note" />
      </form>
    </section>
  );
}
