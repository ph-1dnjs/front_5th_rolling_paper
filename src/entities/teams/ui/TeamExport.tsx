import { ShareButton } from '@/shared/button/sharedButton';
import { CopyIcon, DownloadIcon, Share2Icon } from '@/widgets/Icons';

export const TeamExport = () => {
  return (
    <div className='flex justify-between items-center w-full'>
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

      <button className='bg-azure-61 text-white px-4 py-2 rounded-lg shadow-lg hover:brightness-105 transition whitespace-nowrap'>
        메세지 작성하기
      </button>
    </div>
  );
};
