import React from 'react';

import { SparklesIcon } from '@/shared/Icons';

interface Props {
  title: string;
  description: string;
}

const Header: React.FC<Props> = ({ title, description }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center justify-center'>
        <SparklesIcon className='text-azure-61' />
        <h1 className='text-[40px] mx-2 text-azure-36'>{title}</h1>
        <SparklesIcon className='text-azure-82' />
      </div>
      <p className='max-w-[685px] my-2 text-[18px] font-gowun text-center text-azure-34'>
        {description}
      </p>
    </div>
  );
};

export default Header;
