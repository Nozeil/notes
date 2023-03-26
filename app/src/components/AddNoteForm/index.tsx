import { useAppDispatch } from '@/hooks';
import { createNote, getNotes } from '@/redux/notesSlice';
import { SubmitHandler } from '@/types';
import { Form } from '../Form';
import { BUTTONS_VALUES } from '@/constants';
import { transformData } from '@/utils';
import './index.style.scss';

export function AddNoteForm() {
  const dispatch = useAppDispatch();

  const sumbitHandler: SubmitHandler = async (data, ref, reset) => {
    const transformedData = transformData(data, ref.current);
    reset();
    await dispatch(createNote(transformedData));
    await dispatch(getNotes());
  };

  return (
    <div className="add-note-form">
      <h2 className="add-note-form__title">Create your note</h2>
      <Form buttonValue={BUTTONS_VALUES.CREATE} submitHandler={sumbitHandler} />
    </div>
  );
}
