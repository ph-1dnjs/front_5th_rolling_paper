import { useState } from 'react';

import { useBgmStore } from '../model/useBgmStore';

import PlayIcon from '@/features/bgm/ui/icons/play.svg?react';
import VolumeIcon from '@/features/bgm/ui/icons/volume.svg?react';
import PauseIcon from '@/features/bgm/ui/icons/pause.svg?react';
import BgmVolumeSlider from '@/features/bgm/ui/BgmVolumeSlider';
import ArrowDown from '@/features/bgm/ui/icons/arrow-down.svg?react';

import './custom-select.css';

const BGM_LIST = [
  {
    label: '샘플 음악 1',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    label: '샘플 음악 2',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
];

const BgmPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { isPlaying, selectedBgm, volume, setPlaying, setSelectedBgm, setVolume } = useBgmStore();

  const selectedLabel = BGM_LIST.find((bgm) => bgm.url === selectedBgm)?.label ?? '음악 선택';

  const handlePlayToggle = () => {
    setPlaying(!isPlaying);
  };

  const handleBgmChange = (url: string) => {
    setSelectedBgm(url);
    setIsDropdownOpen(false);
  };

  const handleVolumeChange = (v: number) => {
    setVolume(v);
  };

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
              <span className='w-[13px] h-[16px] text-sm font-medium text-[#0F1729]'>▼</span>
            </button>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <span className='text-[14px] font-medium text-[#0F1729]'>BGM 플레이어</span>

            <div className='custom-select'>
              <button
                className='custom-select-trigger'
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                {selectedLabel}
                <ArrowDown />
              </button>
              {isDropdownOpen && (
                <ul className='custom-select-options'>
                  {BGM_LIST.map((bgm) => (
                    <li
                      key={bgm.url}
                      className='custom-select-option'
                      onClick={() => handleBgmChange(bgm.url)}
                    >
                      {bgm.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className='flex items-center justify-between gap-2'>
              <button
                className='w-8 h-8 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full cursor-pointer'
                onClick={handlePlayToggle}
                aria-label={isPlaying ? '일시정지' : '재생'}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>
              <span className='text-[12px] text-[#0F1729] flex-1 truncate'>{selectedLabel}</span>
            </div>

            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center w-8 h-8'>
                <VolumeIcon />
              </div>
              <BgmVolumeSlider volume={volume} setVolume={handleVolumeChange} />
            </div>
          </div>
        </div>
      )}

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
