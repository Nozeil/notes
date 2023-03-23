import { MutableRefObject } from 'react';
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

export interface TextboxProps extends FormFieldProps {
  hashtagsRef: MutableRefObject<string[]>;
}

export interface FormData {
  title: string;
  content: string;
}

export type EmptyObject = Record<string, never>;
