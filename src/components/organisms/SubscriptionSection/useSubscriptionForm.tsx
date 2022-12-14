import { useCallback, useState } from 'react';
import axios from 'axios';
import { ISubscriptionForm } from './SubscriptionSection';

const useSubscriptionForm = () => {
  const [loading, setLoading] = useState(false);
  const [isSucceed, setIsSucceed] = useState<boolean | undefined>(undefined);

  const sendData = useCallback(async (data: ISubscriptionForm) => {
    setLoading(true);
    setIsSucceed(undefined);

    axios
      .post('https://my-server.com', data)
      .then(() => {
        setIsSucceed(true);
      })
      .catch(() => setIsSucceed(false))
      .finally(() => setLoading(false));
  }, []);

  return { sendData, isSucceed, loading };
};

export default useSubscriptionForm;
