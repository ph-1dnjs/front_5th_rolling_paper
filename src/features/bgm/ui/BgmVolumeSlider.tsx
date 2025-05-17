import React, { useEffect, useRef } from 'react';
import './slider.css';

interface Props {
  volume: number;
  setVolume: (v: number) => void;
}

const BgmVolumeSlider = ({ volume, setVolume }: Props) => {
  const sliderRef = useRef<HTMLInputElement>(null);

  const updateBackground = (value: number) => {
    const percent = value * 100;
    if (sliderRef.current) {
      sliderRef.current.style.background = `linear-gradient(to right, #4499EE ${percent}%, #99CCFF ${percent}%)`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    updateBackground(value);
  };

  useEffect(() => {
    updateBackground(volume);
  }, [volume]);

  return (
    <input
      type='range'
      ref={sliderRef}
      min='0'
      max='1'
      step='0.01'
      value={volume}
      onChange={handleChange}
      className='w-full h-2 appearance-none rounded-full cursor-pointer'
      style={{
        WebkitAppearance: 'none',
        appearance: 'none',
      }}
    />
  );
};

export default BgmVolumeSlider;
