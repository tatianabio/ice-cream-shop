import { useEffect, useState } from 'react';
import { setupWorker } from 'msw';
import globalMswHandlers from '../../mock/mswHandlers';

const useMSW = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const worker = setupWorker(...globalMswHandlers);
    worker.start().then(() => {
      setIsLoading(true);
    });

    return () => {
      worker.stop();
      setIsLoading(false);
    };
  }, []);

  return isLoading;
};

export default useMSW;
