// src/features/bgm/model/useBgmStore.ts
import { create } from 'zustand';

interface BgmStore {
  isPlaying: boolean;
  selectedBgm: string;
  volume: number;
  setPlaying: (playing: boolean) => void;
  setSelectedBgm: (url: string) => void;
  setVolume: (v: number) => void;
}

export const useBgmStore = create<BgmStore>((set) => ({
  isPlaying: false,
  selectedBgm: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  volume: 0.5,

  setPlaying: (playing) => set({ isPlaying: playing }),
  setSelectedBgm: (url) => set({ selectedBgm: url, isPlaying: true }),
  setVolume: (v) => set({ volume: v }),
}));
