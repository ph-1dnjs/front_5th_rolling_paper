import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen min-w-[390px]'>
      <main className=' w-full mx-auto'>{children}</main>
    </div>
  );
};

export default MainLayout;
