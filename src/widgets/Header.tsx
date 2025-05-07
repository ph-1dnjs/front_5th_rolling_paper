import React from 'react';

// TODO: 공통 디자인 셋업 적용 필요
const Header: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <div>
        {/* icon 추가 */}
        <h1 className='text-[40px] mx-2'>롤링페이퍼</h1>
        {/* icon 추가 */}
      </div>
      <p className='max-w-[685px] my-2 text-[18px] '>
        프론트엔드 부트캠프 수료생들을 위한 롤링페이퍼입니다. 팀을 선택하여 메시지를 남겨보세요!
      </p>
    </div>
  );
};

export default Header;
