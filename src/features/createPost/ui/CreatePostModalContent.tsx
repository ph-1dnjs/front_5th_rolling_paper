import React, { useState, useRef, useEffect } from 'react';

import EmojiPanel from '@/entities/emoji/ui/EmojiPanel';
import { SparklesIcon, XIcon, FileMinusIcon } from '@/shared/Icons';
import LabelInput from '@/shared/labelInput/LabelInput';

import './CreatePostModalContent.css';

interface CreatePostModalProps {
  onClose: () => void;
  onSave: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ onClose, onSave }) => {
  const [receiver, setReceiver] = useState('');
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [bgColor, setBgColor] = useState('white');
  const [error, setError] = useState('');
  const [showEmojiList, setShowEmojiList] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleSave = () => {
    if (!receiver.trim() || !sender.trim()) {
      setError('이름을 모두 입력해주세요.');
      return;
    }
    if (message.trim().length < 1) {
      setError('메시지를 1자 이상 입력해주세요.');
      return;
    }
    if (password.length !== 4) {
      setError('비밀번호는 4자리 숫자여야 합니다.');
      return;
    }
    setError('');
    onSave();
  };

  return (
    <>
      <div className='modal-header'>
        <h2 id='message-modal-title' className='modal-title'>
          <SparklesIcon /> 프론트엔드 1팀에게 메시지 작성하기
        </h2>

        <button className='modal-close' onClick={onClose} aria-label='Close modal'>
          <XIcon />
        </button>
      </div>

      <div className='modal-body'>
        <div className='modal-row'>
          <div className='modal-section'>
            <LabelInput
              label='받는 사람'
              value={receiver}
              onChange={setReceiver}
              placeholder='받는 사람의 이름'
              maxLength={20}
              inputMode='text'
            />
          </div>
          <div className='modal-section'>
            <LabelInput
              label='보내는 사람'
              value={sender}
              onChange={setSender}
              placeholder='당신의 이름'
              maxLength={20}
              inputMode='text'
            />
          </div>
        </div>

        <div className='modal-section'>
          <label>메시지 내용</label>
          <textarea
            ref={textareaRef}
            className='message-input'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='축하와 응원의 메시지를 작성해보세요!'
            maxLength={200}
          />
          <div className='emoji-button-wrapper'>
            <button className='emoji-toggle' onClick={() => setShowEmojiList(!showEmojiList)}>
              <FileMinusIcon /> 이모지 추가
            </button>
          </div>
        </div>

        <EmojiPanel
          showEmojiList={showEmojiList}
          onClickCloseButton={() => setShowEmojiList(false)}
        />

        <div className='modal-row'>
          <div className='modal-section'>
            <LabelInput
              label='비밀번호 (4자리)'
              type='password'
              value={password}
              onChange={setPassword}
              placeholder='4자리 숫자'
              inputMode='numeric'
              maxLength={4}
            />
            <small className='password-guide'>메시지 수정/삭제 시 필요합니다</small>
          </div>
          <div className='modal-section'>
            <label>배경 색상</label>
            <select value={bgColor} onChange={(e) => setBgColor(e.target.value)}>
              <option value='white'>기본 (흰색)</option>
              <option value='pink'>분홍</option>
              <option value='yellow'>노랑</option>
              <option value='blue'>파랑</option>
            </select>
          </div>
        </div>
      </div>

      <div className='modal-footer'>
        {error && <div className='error-message'>{error}</div>}
        <div className='modal-actions'>
          <button onClick={onClose}>취소</button>
          <button onClick={handleSave}>메시지 저장하기</button>
        </div>
      </div>
    </>
  );
};

export default CreatePostModal;
