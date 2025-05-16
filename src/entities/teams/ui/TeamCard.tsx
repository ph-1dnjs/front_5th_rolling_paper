import React from 'react';

import NameTag from '@/entities/teams/ui/NameTag';
import Divider from '@/shared/ui/Divider';

interface Props {
  item: string;
}

const TeamCard: React.FC<Props> = ({ item }) => {
  return (
    <div className='aspect-square bg-white rounded-lg flex flex-col justify-between border border-azure-88'>
      <div className='pt-5 px-5'>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-bold'>프론트엔드 {item}팀</div>
          <div className='bg-azure-61 opacity-80 py-[3px] px-3 rounded-2xl text-sm text-white'>
            {0}명
          </div>
        </div>
        <div className='flex mt-1.5 mb-2 text-sm text-azure-47'>팀 한줄소개</div>
        <div className='flex flex-wrap justify-center gap-y-2'>
          <NameTag name='정민' />
          <NameTag name='유빈' />
          <NameTag name='혜원' />
          <NameTag name='재연' />
        </div>
      </div>
      <div>
        <Divider />
        <div className='mt-0.5 pb-5 px-5'>{0}개의 메세지</div>
      </div>
    </div>
  );
};

export default TeamCard;
