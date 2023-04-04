import React from 'react';

const RadioFrame = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      aria-hidden='true'
      focusable='false'
      data-testid='svg-radio-frame'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.00194 1.33332C8.00116 1.33333 8.00037 1.33333 7.99958 1.33333C4.31791 1.33333 1.33333 4.31791 1.33333 7.99957C1.33333 11.6806 4.31686 14.6648 7.99763 14.6658C7.99842 14.6658 7.99921 14.6658 8 14.6658C11.6817 14.6658 14.6662 11.6812 14.6662 7.99956C14.6662 4.31855 11.6827 1.33438 8.00194 1.33332ZM8.00194 15.9991C8.00116 15.9991 8.00037 15.9991 7.99958 15.9991C3.58153 15.9991 0 12.4176 0 7.99957C0 3.5825 3.57996 0.00157573 7.99666 -2.00795e-06C7.99777 -7.46214e-06 7.99888 -1.01924e-05 8 -1.01924e-05C12.418 -1.01924e-05 15.9996 3.58152 15.9996 7.99956C15.9996 12.417 12.4191 15.9981 8.00194 15.9991Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default RadioFrame;
