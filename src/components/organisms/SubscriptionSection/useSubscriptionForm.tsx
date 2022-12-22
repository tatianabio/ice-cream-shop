import { useCallback, useState } from 'react';
import { ISubscriptionForm } from './SubscriptionSection';
import postDataRequest from '../../utils/commonFunctions';

const useSubscriptionForm = () => {
  const [loading, setLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean | undefined>(undefined);

  const sendData = useCallback(async (data: ISubscriptionForm) => {
    setLoading(true);
    setIsSuccessful(undefined);

    const response = await postDataRequest(data);
    setIsSuccessful(response);
    setLoading(false);
  }, []);

  return { sendData, isSuccessful, loading };
};

export default useSubscriptionForm;
