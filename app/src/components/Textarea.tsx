import { FormFieldProps } from '@/types';
import { forwardRef } from 'react';

export const Textarea = forwardRef<HTMLTextAreaElement, FormFieldProps>(
  ({ name, onChange, placeholder, error }, ref) => {
    return (
      <>
        <textarea ref={ref} name={name} onChange={onChange} placeholder={placeholder} />
        {error && error.message}
      </>
    );
  }
);
