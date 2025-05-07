import React from 'react';

import TeamCard from '@/entities/teams/ui/TeamCard';
import MainLayout from '@/shared/layouts/MainLayout';
import CardGrid from '@/widgets/CardGrid';

const TeamPage: React.FC = () => {
  return (
    <MainLayout>
      <CardGrid items={Array.from({ length: 13 }, (_, index) => index + 1)} RenderItem={TeamCard} />
    </MainLayout>
  );
};

export default TeamPage;
