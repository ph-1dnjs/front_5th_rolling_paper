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
        <div className='emoji-panel bg-gray-100 p-4'>
          <div className='emoji-header flex justify-between items-center mb-2'>
            <strong>이모지 선택</strong>
            <button onClick={onClose}>✕</button>
          </div>
          <div className='emoji-box grid'>
            {emojiList.map((src) => (
              <img
                key={src}
                src={src}
                alt='이모지'
                className='emoji-img w-10 h-10 object-contain cursor-pointer rounded-md'
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
