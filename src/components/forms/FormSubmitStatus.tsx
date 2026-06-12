import type { FormSubmitStatus as SubmitStatus } from '@/types';
import { cn } from '@/utils/classNames';

interface FormSubmitStatusProps {
  status: SubmitStatus;
}

export function FormSubmitStatus({ status }: FormSubmitStatusProps) {
  if (status === 'idle' || status === 'loading') {
    return null;
  }

  const isSuccess = status === 'success';

  return (
    <div
      role="alert"
      className={cn(
        'rounded-md px-4 py-3 text-small',
        isSuccess
          ? 'bg-accent-light text-accent-dark dark:bg-accent-dark/20 dark:text-accent'
          : 'bg-rose-50 text-rose-800 dark:bg-rose-900/20 dark:text-rose-300',
      )}
    >
      {isSuccess
        ? "Thank you — I'll get back to you soon!"
        : 'Something went wrong. Please try again.'}
    </div>
  );
}
