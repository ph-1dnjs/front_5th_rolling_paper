import React from 'react';

interface Props {
  item: string;
}

const TeamCard: React.FC<Props> = ({ item }) => {
  return <div>{item}팀</div>;
};

export default TeamCard;
