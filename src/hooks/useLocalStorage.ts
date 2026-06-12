import { useCallback, useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const nextValue = value instanceof Function ? value(prev) : value;

        try {
          window.localStorage.setItem(key, JSON.stringify(nextValue));
        } catch {
          // Storage unavailable or quota exceeded
        }

        return nextValue;
      });
    },
    [key],
  );

  const removeValue = useCallback(() => {
    setStoredValue(initialValue);

    try {
      window.localStorage.removeItem(key);
    } catch {
      // Storage unavailable
    }
  }, [initialValue, key]);

  return [storedValue, setValue, removeValue];
}
