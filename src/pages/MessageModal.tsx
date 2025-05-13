import React, { useState, useRef, useEffect } from 'react';

import './MessageModal.css';
import { SparklesIcon, XIcon, FileMinusIcon } from '../shared/Icons';

interface MessageModalProps {
  onClose: () => void;
  onSave: () => void;
}

// 임시 이모지
const emojiList = Array.from({ length: 10 }, (_, i) => `/emojis/emoji${i + 1}.png`);

const MessageModal: React.FC<MessageModalProps> = ({ onClose }) => {
  const [receiver, setReceiver] = useState('');
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [bgColor, setBgColor] = useState('white');
  const [error, setError] = useState('');
  const [showEmojiList, shoShowEmojiList] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const emojiRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (selectedId !== null && emojiRefs.current[selectedId]) {
      const el = emojiRefs.current[selectedId];
      if (el) el.style.transformOrigin = 'top left';
    }
  }, [selectedId]);

  const handleSave = async () => {
    if (!receiver.trim() || !sender.trim()) {
      setError('이름을 모두 입력해주세요.');
      return;
    }
    if (message.trim().length < 1) {
      setError('메시지를 1자 이상 입력해주세요.');
      return;
    }
    if (password.length !== 4 || !/^[0-9]+$/.test(password)) {
      setError('비밀번호는 4자리 숫자여야 합니다.');
      return;
    }

    try {
      setError('');
      // TODO: 서버에 메시지 저장하는 API 호출});
    } catch (err) {
      setError(`메시지 저장 중 오류가 발생했습니다. ${err}`);
    }
  };

  return (
    <div className='modal-backdrop'>
      <div className='modal' role='dialog' aria-modal='true' aria-labelledby='message-modal-title'>
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
              <label>받는 사람</label>
              <input
                type='text'
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
                placeholder='받는 사람의 이름'
                maxLength={20}
              />
            </div>
            <div className='modal-section'>
              <label>보내는 사람</label>
              <input
                type='text'
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                placeholder='당신의 이름'
                maxLength={20}
              />
            </div>
          </div>

          <div className='modal-section'>
            <label>메시지 내용</label>
            <div
              className='message-canvas'
              ref={canvasRef}
              style={{ position: 'relative' }}
              onClick={() => setSelectedId(null)}
            >
              <textarea
                ref={textareaRef}
                className='message-input'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='축하와 응원의 메시지를 작성해보세요!'
                maxLength={200}
              />
            </div>
            <div className='emoji-button-wrapper'>
              <button className='emoji-toggle' onClick={() => shoShowEmojiList(!showEmojiList)}>
                <FileMinusIcon /> 이모지 추가
              </button>
            </div>
          </div>

          {showEmojiList && (
            <div className='emoji-panel'>
              <div className='emoji-header'>
                <strong>이모지 선택</strong>
                <button onClick={() => shoShowEmojiList(false)}>✕</button>
              </div>
              <div className='emoji-grid'>
                {emojiList.map((src) => (
                  <img key={src} src={src} alt='이모지' className='emoji-img' />
                ))}
              </div>
            </div>
          )}

          <div className='modal-row'>
            <div className='modal-section'>
              <label>비밀번호 (4자리)</label>
              <input
                type='password'
                value={password}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,4}$/.test(value)) setPassword(value);
                }}
                placeholder='4자리 숫자'
                inputMode='numeric'
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
      </div>
    </div>
  );
};

export default MessageModal;
