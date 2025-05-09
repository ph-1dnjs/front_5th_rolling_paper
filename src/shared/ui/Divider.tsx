import React from 'react';

interface Props {
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

// TODO: 하드코딩 컬러셋 적용 필요

const Divider: React.FC<Props> = ({ orientation = 'horizontal', className }) => {
  const horizontal = 'h-px w-full bg-[#E2E8F0]';
  const vertical = 'w-px h-full bg-[#E2E8F0]';

  const baseStyle = orientation === 'vertical' ? vertical : horizontal;

  return <div className={`${baseStyle} ${className}`} />;
};

export default Divider;
