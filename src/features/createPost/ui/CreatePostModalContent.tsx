import React, { useState, useRef, useEffect } from 'react';

import { insertEmojiToSelection } from '@/entities/emoji/libs/utils';
import EmojiPanel from '@/entities/emoji/ui/EmojiPanel';
import { SparklesIcon, XIcon, FileMinusIcon } from '@/shared/Icons';
import LabelInput from '@/shared/labelInput/LabelInput';

import './CreatePostModalContent.css';

interface CreatePostModalProps {
  onClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ onClose }) => {
  const [receiver, setReceiver] = useState('');
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [bgColor, setBgColor] = useState('white');
  const [showEmojiList, setShowEmojiList] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  function handleClickEmoji(src: string) {
    insertEmojiToSelection(src);
    editorRef.current?.focus();
  }

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleSave = () => {
    if (!receiver.trim() || !sender.trim()) {
      alert('이름을 모두 입력해주세요.');
    } else if (message.trim().length < 1) {
      alert('메시지를 1자 이상 입력해주세요.');
    } else if (password.length !== 4) {
      alert('비밀번호는 4자리 숫자여야 합니다.');
    } else {
      // onSave(); -> 별도 파일로 분리
    }
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
          <div
            ref={editorRef}
            className='message-input'
            contentEditable
            onInput={(e) => setMessage(e.currentTarget.innerText)}
            placeholder='축하와 응원의 메시지를 작성해보세요!'
          />
          <div className='emoji-button-wrapper'>
            <button className='emoji-toggle' onClick={() => setShowEmojiList(!showEmojiList)}>
              <FileMinusIcon /> 이모지 추가
            </button>
          </div>
        </div>

        <EmojiPanel
          showEmojiList={showEmojiList}
          onClickEmoji={handleClickEmoji}
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
        <div className='modal-actions'>
          <button onClick={onClose}>취소</button>
          <button onClick={handleSave}>메시지 저장하기</button>
        </div>
      </div>
    </>
  );
};

export default CreatePostModal;
