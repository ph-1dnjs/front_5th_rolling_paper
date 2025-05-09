import React from 'react';

interface CardGridProps<T> {
  items: T[];
  RenderItem: React.ComponentType<{ item: T }>;
}

// TODO: 하드코딩 컬러셋 적용

const CardGrid: React.FC<CardGridProps<any>> = ({ items, RenderItem }) => {
  return (
    <div
      className={`
          p-6
          bg-[#F3F4F6]
          inline-grid
          grid-cols-[repeat(1,_306px)]
          md:grid-cols-[repeat(3,_212px)]
          2xl:grid-cols-[repeat(4,_311px)]
          gap-x-6
          gap-y-6
          rounded-lg
        `}
    >
      {items.map((item, index) => (
        <RenderItem key={index} item={item} />
      ))}
    </div>
  );
};

export default CardGrid;
