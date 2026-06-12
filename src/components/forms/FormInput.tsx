import type { ContactFormField } from '@/types';
import { getAriaDescribedBy } from '@/utils/accessibility';
import { cn } from '@/utils/classNames';

interface FormInputProps {
  id: string;
  name: ContactFormField;
  type?: 'text' | 'email';
  value: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  onChange: (name: ContactFormField, value: string) => void;
  onBlur?: (name: ContactFormField) => void;
}

export function FormInput({
  id,
  name,
  type = 'text',
  value,
  placeholder,
  required = false,
  error,
  onChange,
  onBlur,
}: FormInputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      aria-required={required}
      aria-invalid={Boolean(error)}
      aria-describedby={getAriaDescribedBy(id, error)}
      onChange={(event) => onChange(name, event.target.value)}
      onBlur={() => onBlur?.(name)}
      className={cn(
        'w-full rounded-md border border-primary/20 bg-white px-4 py-2.5 text-body text-primary transition-colors placeholder:text-tertiary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 dark:border-[var(--color-border)] dark:bg-[var(--color-bg)] dark:text-[var(--color-text)]',
        error && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/30',
      )}
    />
  );
}
