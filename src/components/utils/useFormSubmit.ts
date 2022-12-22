import { useCallback, useState } from 'react';
import postDataRequest from './commonFunctions';

const useFormSubmit = (linkName: string) => {
  const [loading, setLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean | undefined>(undefined);

  const sendData = useCallback(async (data: unknown) => {
    setLoading(true);
    setIsSuccessful(undefined);

    const response = await postDataRequest(data, linkName);
    setIsSuccessful(response);
    setLoading(false);
  }, []);

  return { sendData, isSuccessful, loading };
};

export default useFormSubmit;
