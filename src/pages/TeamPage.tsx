import React from 'react';

import TeamCard from '@/entities/teams/ui/TeamCard';
import BgmPlayer from '@/features/bgm/ui/BgmPlayer';
import MainLayout from '@/shared/layouts/MainLayout';
import CardGrid from '@/widgets/CardGrid';

const TeamPage: React.FC = () => {
  return (
    <MainLayout
      title='롤링페이퍼'
      description='프론트엔드 부트캠프 수료생들을 위한 롤링페이퍼입니다. 팀을 선택하여 메시지를 남겨보세요!'
    >
      <CardGrid items={Array.from({ length: 13 }, (_, index) => index + 1)} RenderItem={TeamCard} />
      <BgmPlayer />
    </MainLayout>
  );
};

export default TeamPage;
