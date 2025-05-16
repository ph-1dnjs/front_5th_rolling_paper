import { ShareButton } from '@/shared/button/sharedButton';
import { CopyIcon, DownloadIcon, Share2Icon } from '@/widgets/Icons';

export const TeamExport = () => {
  return (
    <div className='flex gap-2'>
      <ShareButton label='URL 복사'>
        {' '}
        <CopyIcon />{' '}
      </ShareButton>
      <ShareButton label='Discord 공유'>
        {' '}
        <Share2Icon />{' '}
      </ShareButton>
      <ShareButton label='PDF 저장'>
        {' '}
        <DownloadIcon />{' '}
      </ShareButton>
    </div>
  );
};
