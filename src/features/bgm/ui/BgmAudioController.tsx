import { useEffect, useRef } from 'react';

import { useBgmStore } from '../model/useBgmStore';

const BgmAudioController = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { selectedBgm, isPlaying, volume, setPlaying } = useBgmStore();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = selectedBgm;
    audioRef.current.load();
    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [selectedBgm]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => setPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return <audio ref={audioRef} loop preload='auto' />;
};

export default BgmAudioController;
