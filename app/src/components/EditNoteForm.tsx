import { useAppDispatch } from '@/hooks';
import { transformData } from '@/utils';
import { SubmitHandler } from '@/types';
import { Form } from './Form';
import { updateNote } from '@/redux/notesSlice';
import { BUTTONS_VALUES } from '@/constants';

interface Props {
  id: number;
  title: string;
  content: string;
  toggler: () => void;
}

export function EditNoteForm({ id, title, content, toggler }: Props) {
  const dispatch = useAppDispatch();

  const sumbitHandler: SubmitHandler = async (data, ref) => {
    toggler();
    if (data.content === content && data.title === title) {
      return;
    }
    const transformedData = transformData(data, ref.current, id);
    await dispatch(updateNote(transformedData));
  };

  return (
    <Form
      buttonValue={BUTTONS_VALUES.SAVE}
      initialTitle={title}
      initialContent={content}
      submitHandler={sumbitHandler}
    />
  );
}
