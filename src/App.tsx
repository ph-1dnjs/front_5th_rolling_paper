import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/index.css';

import { QueryProvider } from '@/app/providers/QueryProvider';
import BgmAudioController from '@/features/bgm/ui/BgmAudioController';
import CreatePostModalContent from '@/features/createPost/ui/CreatePostModalContent';
import HomePage from '@/pages/HomePage';
import { ModalProvider } from '@/shared/modal/ModalService';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      {/* !! registry를 위해 CreatePostModalContent를 import하는 게 폴더 구조상 맞는지 고민 */}
      <ModalProvider registry={{ createPost: CreatePostModalContent }}>
        <HomePage />
        <BgmAudioController />
      </ModalProvider>
    </QueryProvider>
  </StrictMode>,
);
