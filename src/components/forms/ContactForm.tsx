import { useCallback, useState } from 'react';

import { Button } from '@/components/ui/Button';
import { useFormValidation } from '@/hooks/useFormValidation';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { submitContactForm } from '@/services/formSubmission';
import type { ContactFormValues, FormSubmitStatus as SubmitStatus } from '@/types';

import { FormField } from './FormField';
import { FormSubmitStatus } from './FormSubmitStatus';

const DRAFT_STORAGE_KEY = 'contact-form-draft';

export function ContactForm() {
  const {
    values,
    errors,
    setFieldValue,
    setFieldTouched,
    validateAll,
    resetForm,
  } = useFormValidation();

  const [, setDraft, clearDraft] = useLocalStorage<ContactFormValues | null>(
    DRAFT_STORAGE_KEY,
    null,
  );

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleChange = useCallback(
    (name: keyof ContactFormValues, value: string) => {
      setFieldValue(name, value);
      setDraft((prev) => ({ ...(prev ?? values), [name]: value }));
    },
    [setFieldValue, setDraft, values],
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateAll()) {
      return;
    }

    setSubmitStatus('loading');

    try {
      await submitContactForm(values);
      setSubmitStatus('success');
      resetForm();
      clearDraft();
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <FormField
        id="contact-name"
        label="Name"
        name="name"
        value={values.name}
        placeholder="Your name"
        required
        error={errors.name}
        onChange={handleChange}
        onBlur={setFieldTouched}
      />

      <FormField
        id="contact-email"
        label="Email"
        name="email"
        type="email"
        value={values.email}
        placeholder="you@example.com"
        required
        error={errors.email}
        onChange={handleChange}
        onBlur={setFieldTouched}
      />

      <FormField
        id="contact-subject"
        label="Subject"
        name="subject"
        value={values.subject}
        placeholder="What would you like to discuss?"
        required
        error={errors.subject}
        onChange={handleChange}
        onBlur={setFieldTouched}
      />

      <FormField
        id="contact-message"
        label="Message"
        name="message"
        type="textarea"
        value={values.message}
        placeholder="Tell me about your project or opportunity…"
        required
        rows={6}
        error={errors.message}
        onChange={handleChange}
        onBlur={setFieldTouched}
      />

      <FormSubmitStatus status={submitStatus} />

      <Button
        type="submit"
        size="lg"
        isLoading={submitStatus === 'loading'}
        disabled={submitStatus === 'loading'}
      >
        Send Message
      </Button>
    </form>
  );
}
