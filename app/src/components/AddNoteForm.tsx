import { useAppDispatch } from '@/hooks';
import { createNote, getNotes } from '@/redux/notesSlice';
import { SubmitHandler } from '@/types';
import { transformData } from '@/utils';
import { Form } from './Form';
import { BUTTONS_VALUES } from '@/constants';

export function AddNoteForm() {
  const dispatch = useAppDispatch();

  const sumbitHandler: SubmitHandler = async (data, ref, reset) => {
    const transformedData = transformData(data, ref.current);
    reset();
    await dispatch(createNote(transformedData));
    await dispatch(getNotes());
  };

  return <Form buttonValue={BUTTONS_VALUES.CREATE} submitHandler={sumbitHandler} />;
}
