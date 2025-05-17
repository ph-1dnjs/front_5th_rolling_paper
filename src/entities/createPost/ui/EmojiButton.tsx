import React from 'react';

import { FileMinusIcon } from '@/shared/Icons';
import './EmojiButton.css';

interface EmojiButtonProps {
  onToggle: () => void;
}

const EmojiButton: React.FC<EmojiButtonProps> = ({ onToggle }) => (
  <button
    className='emoji-button mt-2 text-blue-500 flex items-center justify-center float-right'
    onClick={onToggle}
  >
    <FileMinusIcon /> <span className='text-gray-900'>이모지 추가</span>
  </button>
);

export default EmojiButton;
