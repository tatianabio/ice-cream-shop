import { useCallback, useState } from 'react';
import axios from 'axios';
import { ISubscriptionForm } from './SubscriptionSection';

const useSubscriptionForm = () => {
  const [loading, setLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean | undefined>(undefined);

  const sendData = useCallback(async (data: ISubscriptionForm) => {
    setLoading(true);
    setIsSuccessful(undefined);

    axios
      .post('https://my-server.com', data)
      .then(() => {
        setIsSuccessful(true);
      })
      .catch(() => setIsSuccessful(false))
      .finally(() => setLoading(false));
  }, []);

  return { sendData, isSuccessful, loading };
};

export default useSubscriptionForm;
