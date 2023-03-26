import { FormFieldProps } from '@/types';
import { forwardRef } from 'react';
import './index.style.scss';

export const TextInput = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ name, onChange, placeholder, error }: FormFieldProps, ref) => {
    const inputClassName = error ? 'input input_error' : 'input';

    return (
      <div className="text-input">
        <input
          className={inputClassName}
          ref={ref}
          name={name}
          onChange={onChange}
          type="text"
          placeholder={placeholder}
          autoComplete="off"
        />
        <span className="text-input__error">{error && error.message}</span>
      </div>
    );
  }
);
