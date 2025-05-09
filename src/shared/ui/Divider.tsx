import React from 'react';

interface Props {
  orientation: 'vertical' | 'horizontal';
  className: string;
}

const Divider: React.FC<Props> = ({ orientation, className }) => {
  const horizontal = 'h-px w-full bg-gray-300 my-2';
  const vertical = 'w-px h-full bg-gray-300 mx-2';

  const baseStyle = orientation === 'vertical' ? vertical : horizontal;

  return <div className={`${baseStyle} ${className}`} />;
};

export default Divider;
