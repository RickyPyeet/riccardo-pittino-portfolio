import type { ContactFormField } from '@/types';

import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';

interface FormFieldProps {
  id: string;
  label: string;
  name: ContactFormField;
  type?: 'text' | 'email' | 'textarea';
  value: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  rows?: number;
  onChange: (name: ContactFormField, value: string) => void;
  onBlur?: (name: ContactFormField) => void;
}

export function FormField({
  id,
  label,
  name,
  type = 'text',
  value,
  placeholder,
  required = false,
  error,
  rows,
  onChange,
  onBlur,
}: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-small font-medium text-primary dark:text-[var(--color-text)]"
      >
        {label}
        {required && (
          <span className="text-accent-dark dark:text-accent" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>

      {type === 'textarea' ? (
        <FormTextarea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          rows={rows}
          error={error}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <FormInput
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          error={error}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-tiny text-rose-600 dark:text-rose-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}
