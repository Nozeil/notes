import { FormFieldProps } from '@/types';
import { forwardRef } from 'react';

export const TextInput = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ name, onChange, placeholder, error }: FormFieldProps, ref) => {
    return (
      <>
        <input
          ref={ref}
          name={name}
          onChange={onChange}
          type="text"
          placeholder={placeholder}
          autoComplete="off"
        />
        {error && error.message}
      </>
    );
  }
);
