import { useCallback, useState } from 'react';

import type {
  ContactFormField,
  ContactFormValues,
  FormErrors,
} from '@/types';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validateField(
  name: ContactFormField,
  value: string,
): string | undefined {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Name is required';
      return undefined;
    case 'email':
      if (!value.trim()) return 'Email is required';
      if (!EMAIL_PATTERN.test(value)) return 'Enter a valid email address';
      return undefined;
    case 'subject':
      if (!value.trim()) return 'Subject is required';
      return undefined;
    case 'message':
      if (!value.trim()) return 'Message is required';
      if (value.trim().length < MIN_MESSAGE_LENGTH) {
        return `Message must be at least ${MIN_MESSAGE_LENGTH} characters`;
      }
      return undefined;
    default:
      return undefined;
  }
}

export function useFormValidation() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactFormField, boolean>>>({});

  const setFieldValue = useCallback(
    (name: ContactFormField, value: string) => {
      setValues((prev) => ({ ...prev, [name]: value }));

      if (touched[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: validateField(name, value),
        }));
      }
    },
    [touched],
  );

  const setFieldTouched = useCallback((name: ContactFormField) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, values[name]),
    }));
  }, [values]);

  const validateAll = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    (Object.keys(values) as ContactFormField[]).forEach((field) => {
      const error = validateField(field, values[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    return Object.keys(newErrors).length === 0;
  }, [values]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, []);

  return {
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
    validateAll,
    resetForm,
  };
}
