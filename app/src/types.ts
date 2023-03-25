import { MutableRefObject } from 'react';
import { ChangeHandler, FieldError, UseFormReset } from 'react-hook-form';

export interface FormFieldProps {
  name: string;
  onChange: ChangeHandler;
  placeholder: string;
  error: FieldError | undefined;
}

export interface TextboxProps extends FormFieldProps {
  hashtagsRef: MutableRefObject<string[]>;
  initialContent?: string;
}

export interface FormData {
  title: string;
  content: string;
}

export type EmptyObject = Record<string, never>;

export type SubmitHandler = (
  data: FormData,
  ref: MutableRefObject<string[]>,
  reset: UseFormReset<FormData>
) => Promise<void>;
