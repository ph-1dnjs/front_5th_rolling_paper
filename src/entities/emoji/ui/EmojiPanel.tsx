import { emojiList } from '@/entities/emoji/libs/constants';
import './EmojiPanel.css';

type EmojiPanelProps = {
  showEmojiList: boolean;
  onClickCloseButton: () => void;
};

const EmojiPanel = (props: EmojiPanelProps) => {
  const { showEmojiList, onClickCloseButton } = props;

  return (
    <>
      {showEmojiList && (
        <div className='emoji-panel'>
          <div className='emoji-header'>
            <strong>이모지 선택</strong>
            <button onClick={onClickCloseButton}>✕</button>
          </div>
          <div className='emoji-grid'>
            {emojiList.map((src) => (
              <img key={src} src={src} alt='이모지' className='emoji-img' />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default EmojiPanel;
