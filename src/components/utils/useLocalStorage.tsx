import { useEffect, useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useLocalStorage = <T,>(key: string, defaultVal?: T): [T | undefined, () => void] => {
  const [currentEl, setCurrentEl] = useState<T | undefined>(defaultVal);

  useEffect(() => {
    const cur = localStorage.getItem(key);
    cur && setCurrentEl(JSON.parse(cur));
  }, [key]);

  return [currentEl, () => {}];
};
