import React from 'react';

import TeamCard from '@/entities/teams/ui/TeamCard';
import BgmPlayer from '@/features/bgm/ui/BgmPlayer';
import MainLayout from '@/shared/layouts/MainLayout';
import CardGrid from '@/widgets/CardGrid';

const TeamPage: React.FC = () => {
  return (
    <MainLayout>
      <h1 className='text-3xl font-bold'>Rolling Paper</h1>
      <CardGrid items={Array.from({ length: 13 }, (_, index) => index + 1)} RenderItem={TeamCard} />
      <BgmPlayer />
    </MainLayout>
  );
};

export default TeamPage;
