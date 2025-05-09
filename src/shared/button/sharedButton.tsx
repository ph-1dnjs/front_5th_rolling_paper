import React from 'react';

interface Props {
  children: React.ReactNode;
  label: string;
}

export const ShareButton: React.FC<Props> = ({ children, label }) => {
  return (
    <button className='flex items-center gap-2 bg-grey-95 border border-grey-91 text-azure-11 px-4 py-2 rounded'>
      <span className='w-4 h-4'>{children}</span>
      <span className='text-sm font-medium'>{label}</span>
    </button>
  );
};
