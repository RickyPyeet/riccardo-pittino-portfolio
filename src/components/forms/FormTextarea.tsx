import type { ContactFormField } from '@/types';
import { getAriaDescribedBy } from '@/utils/accessibility';
import { cn } from '@/utils/classNames';

interface FormTextareaProps {
  id: string;
  name: ContactFormField;
  value: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  error?: string;
  onChange: (name: ContactFormField, value: string) => void;
  onBlur?: (name: ContactFormField) => void;
}

export function FormTextarea({
  id,
  name,
  value,
  placeholder,
  required = false,
  rows = 5,
  error,
  onChange,
  onBlur,
}: FormTextareaProps) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      rows={rows}
      aria-required={required}
      aria-invalid={Boolean(error)}
      aria-describedby={getAriaDescribedBy(id, error)}
      onChange={(event) => onChange(name, event.target.value)}
      onBlur={() => onBlur?.(name)}
      className={cn(
        'w-full resize-y rounded-md border border-primary/20 bg-white px-4 py-2.5 text-body text-primary transition-colors placeholder:text-tertiary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 dark:border-[var(--color-border)] dark:bg-[var(--color-bg)] dark:text-[var(--color-text)]',
        error && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/30',
      )}
    />
  );
}
