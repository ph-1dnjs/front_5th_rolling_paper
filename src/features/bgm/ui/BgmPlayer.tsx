import { useState } from 'react';
// import { ReactComponent as PlayIcon } from '../ui/icons/play.svg?react';
// import { ReactComponent as VolumeIcon } from '../ui/icons/volume.svg?react';
import './slider.css';

const BgmPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className='fixed bottom-4 right-4 w-[288px] h-[188px] bg-white rounded-[12px] border-2 border-[#C1E3FF] p-[14px] z-50'>
          <div className='absolute top-0 right-0'>
            <button
              className='cursor-pointer w-[29px] h-[36px]'
              onClick={() => setIsOpen(false)}
              aria-label='닫기'
            >
              {/* 예시: 아이콘 or 텍스트 */}
              <span className='w-[13px] h-[16px] text-sm font-medium text-[#0F1729]'>▼</span>
            </button>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <span className='text-[14px] font-medium text-[#0F1729]'>BGM 플레이어</span>

            <select className='w-full p-[9px_13px] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border-[#E2E8F0] bg-[#E6F2FF] text-[12px]'>
              <option>추억의 싸이월드 BGM 1</option>
              <option>추억의 싸이월드 BGM 2</option>
            </select>

            {/* 재생 영역 */}
            <div className='flex items-center justify-between gap-2'>
              <button className='w-8 h-8 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full'>
                {/* <PlayIcon /> */}
              </button>
              <span className='text-[12px] text-[#0F1729] flex-1 truncate'>
                추억의 싸이월드 BGM 1
              </span>
            </div>

            {/* 볼륨 조절 */}
            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center w-8 h-8'>{/* <VolumeIcon /> */}</div>
              <input
                type='range'
                min='0'
                max='1'
                step='0.01'
                className='custom-slider w-full cursor-pointer'
              />
            </div>
          </div>
        </div>
      )}

      {/* 축소 상태 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className='fixed bottom-4 right-4 w-[48px] h-[48px] flex items-center justify-center bg-white rounded-[16px] shadow-md border-2 border-[#C1E3FF] z-50 p-2 cursor-pointer'
        >
          🎵
        </button>
      )}
    </>
  );
};

export default BgmPlayer;
