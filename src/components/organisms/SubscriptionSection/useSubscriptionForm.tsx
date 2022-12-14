import { useState } from 'react';
import { ISubscriptionForm } from './SubscriptionSection';

const useSubscriptionForm = () => {
  const [loading, setLoading] = useState(false);
  const [isSucceed, setIsSucceed] = useState<boolean | undefined>(undefined);

  const sendData = async (data: ISubscriptionForm) => {
    setLoading(true);
    setIsSucceed(undefined);

    fetch('https://my-server.com', {
      method: 'POST',

      body: data as unknown,
    })
      .then((response) => {
        setIsSucceed(response.ok);
      })
      .catch(() => setIsSucceed(false))
      .finally(() => setLoading(false));
  };

  return { sendData, isSucceed, loading };
};

export default useSubscriptionForm;
