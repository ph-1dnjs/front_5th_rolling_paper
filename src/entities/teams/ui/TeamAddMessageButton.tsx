import { TeamExport } from './TeamExport';

export const TeamAddMessageButton = () => {
  return (
    <div className='flex justify-between items-center w-full'>
      <TeamExport />

      <button className='bg-azure-61 text-white px-4 py-2 rounded-lg shadow-lg hover:brightness-105 transition whitespace-nowrap'>
        메세지 작성하기
      </button>
    </div>
  );
};
