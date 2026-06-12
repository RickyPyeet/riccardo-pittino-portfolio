import { format, parseISO } from 'date-fns';

export function formatDate(
  dateString: string,
  pattern = 'MMMM d, yyyy',
): string {
  return format(parseISO(dateString), pattern);
}

export function formatDateShort(dateString: string): string {
  return formatDate(dateString, 'MMM yyyy');
}
