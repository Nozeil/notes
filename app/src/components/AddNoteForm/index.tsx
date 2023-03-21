import { useForm } from 'react-hook-form';
import { Textarea } from '../Textarea';
import { TextInput } from '../TextInput';
import { Messages, Names, Placeholders } from './constants';
import type { FormData } from './types';

export function AddNoteForm() {
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

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
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
        <Textarea
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
