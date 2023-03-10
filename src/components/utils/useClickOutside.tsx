import { useEffect } from 'react';

const useClickOutside = (
  ref: HTMLDivElement | null,
  handler: () => void,
  isElementShown: boolean,
  openingButtonRef?: HTMLButtonElement | null
) => {
  useEffect(() => {
    // A function for monitoring a click event outside the ref element
    const listener = (event: Event) => {
      // If the ref element does not contain the target of the click event: (1) call handler() and (2) remove click listeners
      if (!ref?.contains(event.target as HTMLElement) && !openingButtonRef?.contains(event.target as HTMLElement)) {
        handler();
        document.removeEventListener('click', listener);
        document.removeEventListener('touchstart', listener);
      }
    };

    // If the ref element is shown, add click listeners, otherwise, remove them
    if (!isElementShown) {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    } else {
      document.addEventListener('click', listener);
      document.addEventListener('touchstart', listener);
    }

    // If the ref element is destroyed, remove click listeners
    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, isElementShown]);
};

export default useClickOutside;
