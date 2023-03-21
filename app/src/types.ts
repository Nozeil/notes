import { ChangeHandler, FieldError } from 'react-hook-form';

export interface StringObject {
  [k: string]: string;
}

export interface FormFieldProps {
  name: string;
  onChange: ChangeHandler;
  placeholder: string;
  error: FieldError | undefined;
}
