import React from 'react';

interface Props {
  item: string;
}

const TeamCard: React.FC<Props> = ({ item }) => {
  return <div className='aspect-square bg-gray-200 rounded-lg'>{item}팀</div>;
};

export default TeamCard;
