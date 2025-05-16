import React from 'react';

import Header from '@/widgets/Header';

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ title, description, children }) => {
  return (
    <div className='flex flex-col min-h-screen min-w-[390px] py-8 px-4 lg:px-9'>
      <Header title={title} description={description} />
      <main className='w-full mx-auto text-center'>{children}</main>
    </div>
  );
};

export default MainLayout;
