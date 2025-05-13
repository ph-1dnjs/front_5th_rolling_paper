import './EmojiPanel.css';

type EmojiPanelProps = {
  show: boolean;
  // eslint-disable-next-line no-unused-vars
  onClickEmoji: (src: string) => void;
  onClose: () => void;
  emojiList: string[];
};

const EmojiPanel = (props: EmojiPanelProps) => {
  const { show, onClose, onClickEmoji, emojiList } = props;

  return (
    <>
      {show && (
        <div className='emoji-panel'>
          <div className='emoji-header'>
            <strong>이모지 선택</strong>
            <button onClick={onClose}>✕</button>
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
