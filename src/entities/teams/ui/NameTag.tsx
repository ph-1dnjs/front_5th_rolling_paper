import React from 'react';

interface Props {
  name: string;
}

// TODO: 하드코딩 컬러셋 적용

const NameTag: React.FC<Props> = ({ name }) => {
  return (
    <div className='bg-[#D5EAFF] px-2.5 py-1 rounded-2xl mx-0.5 shadow-md text-sm'>{name}</div>
  );
};

export default NameTag;
