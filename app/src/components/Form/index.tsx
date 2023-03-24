import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { CONTENT, TITLE } from './constants';
import { TextInput } from '../TextInput';
import { v4 as uuidv4 } from 'uuid';
import type { FormData, SubmitHandler } from '@/types';
import { TextBox } from '../TextBox';

interface Props {
  submitHandler: SubmitHandler;
  buttonValue: string;
  initialTitle?: string;
  initialContent?: string;
}

export function Form({ submitHandler, buttonValue, initialTitle, initialContent }: Props) {
  const hashtagsRef = useRef<string[]>([]);
  const uuid = uuidv4();

  const { TITLE_MESSAGE, TITLE_NAME, TITLE_PLACEHOLDER } = TITLE;
  const { CONTENT_MESSAGE, CONTENT_NAME, CONTENT_PLACEHOLDER } = CONTENT;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: initialTitle || '',
      content: initialContent || '',
    },
  });

  const onSubmit = async (data: FormData) => submitHandler(data, hashtagsRef, reset);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        placeholder={TITLE_PLACEHOLDER}
        error={errors.title}
        {...register(TITLE_NAME, {
          required: { value: true, message: TITLE_MESSAGE },
        })}
      />
      <TextBox
        key={uuid}
        hashtagsRef={hashtagsRef}
        placeholder={CONTENT_PLACEHOLDER}
        error={errors.content}
        initialContent={initialContent}
        {...register(CONTENT_NAME, {
          required: { value: true, message: CONTENT_MESSAGE },
        })}
      />
      <input type="submit" value={buttonValue} />
    </form>
  );
}
