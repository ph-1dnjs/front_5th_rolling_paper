import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/index.css';
import { QueryProvider } from '@/app/providers/QueryProvider';
import BgmAudioController from '@/features/bgm/ui/BgmAudioController';
import HomePage from '@/pages/HomePage';
// TODO: 테스트를 위해 임시로 추가
// import MessageModal from '@/pages/MessageModal';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <HomePage />
      <BgmAudioController />
      {/* <MessageModal onClose={() => {}} onSave={() => {}} /> */}
    </QueryProvider>
  </StrictMode>,
);
