import React from 'react';

import TeamCard from '@/entities/teams/ui/TeamCard';
import MainLayout from '@/shared/layouts/MainLayout';
import { useModal } from '@/shared/modal/ModalService';
import CardGrid from '@/widgets/CardGrid';

const TeamPage: React.FC = () => {
  const { show } = useModal();

  const handleCreatePost = () => {
    // TODO: 로직을 별도로 추출하기
    show('createPost', {
      onSave: () => {
        console.log('Message saved');
      },
    });
  };

  return (
    <MainLayout>
      <h1 className='text-3xl font-bold'>Rolling Paper</h1>
      <button onClick={handleCreatePost}>메시지 작성하기</button>
      <CardGrid items={Array.from({ length: 13 }, (_, index) => index + 1)} RenderItem={TeamCard} />
    </MainLayout>
  );
};

export default TeamPage;
