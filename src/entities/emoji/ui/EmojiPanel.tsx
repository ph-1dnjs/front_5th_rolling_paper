import { emojiList } from '@/entities/emoji/libs/constants';
import './EmojiPanel.css';

type EmojiPanelProps = {
  showEmojiList: boolean;
  // eslint-disable-next-line no-unused-vars
  onClickEmoji: (src: string) => void;
  onClickCloseButton: () => void;
};

const EmojiPanel = (props: EmojiPanelProps) => {
  const { showEmojiList, onClickCloseButton, onClickEmoji } = props;

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
              <img
                key={src}
                src={src}
                alt='이모지'
                className='emoji-img'
                onClick={() => onClickEmoji(src)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default EmojiPanel;
