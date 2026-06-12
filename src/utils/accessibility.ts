export function getAriaDescribedBy(
  fieldId: string,
  error?: string,
): string | undefined {
  return error ? `${fieldId}-error` : undefined;
}

export function trapFocus(container: HTMLElement): () => void {
  const focusableSelector =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') {
      return;
    }

    const focusable = Array.from(
      container.querySelectorAll<HTMLElement>(focusableSelector),
    ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  container.addEventListener('keydown', handleKeyDown);
  return () => container.removeEventListener('keydown', handleKeyDown);
}
