import React from 'react';

interface CardGridProps<T> {
  items: T[];
  RenderItem: React.ComponentType<{ item: T }>;
}

const CardGrid: React.FC<CardGridProps<any>> = ({ items, RenderItem }) => {
  return (
    <div className='w-full flex justify-center '>
      <div
        className={`
          p-6
          bg-gray-400
          inline-grid
          grid-cols-[repeat(1,_306px)]
          md:grid-cols-[repeat(3,_212px)]
          xl:grid-cols-[repeat(4,_311px)]
          gap-x-6
          gap-y-6
          mx-auto
          rounded-lg
        `}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`
              aspect-square
              bg-gray-200
              flex items-center justify-center
              text-xl font-semibold
              rounded-lg
            `}
          >
            <RenderItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
