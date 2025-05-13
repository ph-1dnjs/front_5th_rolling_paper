import React from 'react';

import { FileMinusIcon } from '@/shared/Icons';
import './EmojiButton.css';

interface EmojiButtonProps {
  onToggle: () => void;
}

const EmojiButton: React.FC<EmojiButtonProps> = ({ onToggle }) => (
  <button className='emoji-button' onClick={onToggle}>
    <FileMinusIcon /> 이모지 추가
  </button>
);

export default EmojiButton;
