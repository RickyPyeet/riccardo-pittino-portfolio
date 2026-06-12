export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormField = keyof ContactFormValues;

export type FormSubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export type FormErrors = Partial<Record<ContactFormField, string>>;

export interface FormSubmissionResponse {
  success: boolean;
  message?: string;
}

export interface FormFieldProps {
  id: string;
  label: string;
  name: ContactFormField;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (name: ContactFormField, value: string) => void;
  onBlur?: (name: ContactFormField) => void;
}
