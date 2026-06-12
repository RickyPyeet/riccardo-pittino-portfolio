import type { ContactFormValues, FormSubmissionResponse } from '@/types';

export async function submitContactForm(
  values: ContactFormValues,
): Promise<FormSubmissionResponse> {
  const endpoint = import.meta.env.VITE_API_ENDPOINT;

  if (!endpoint) {
    // Dev fallback: simulate success when no endpoint configured
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, message: 'Message sent successfully.' };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error('Form submission failed');
  }

  const data = (await response.json()) as FormSubmissionResponse;
  return data;
}
