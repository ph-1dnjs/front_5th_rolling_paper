import React, { useState, useRef, useEffect } from 'react';
import Moveable from 'react-moveable';
import './MessageModal.css';

interface MessageModalProps {
  onClose: () => void;
  onSave: () => void;
}

const STICKERS = Array.from({ length: 10 }, (_, i) => `/stickers/sticker${i + 1}.png`);

const MessageModal: React.FC<MessageModalProps> = ({ onClose }) => {
  const [receiver, setReceiver] = useState('');
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [bgColor, setBgColor] = useState('white');
  const [error, setError] = useState('');
  const [showStickers, setShowStickers] = useState(false);
  const [stickers, setStickers] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const stickerRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (selectedId !== null && stickerRefs.current[selectedId]) {
      const el = stickerRefs.current[selectedId];
      if (el) el.style.transformOrigin = 'top left';
    }
  }, [selectedId]);

  const addStickerToCanvas = (src: string) => {
    if (!textareaRef.current || !canvasRef.current) return;

    const textarea = textareaRef.current;
    const canvas = canvasRef.current;

    const textareaRect = textarea.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();

    const offsetX = textareaRect.left - canvasRect.left + canvas.scrollLeft + 10;
    const offsetY = textareaRect.top - canvasRect.top + canvas.scrollTop + 10;

    const id = Date.now();
    const newSticker = {
      id,
      src,
      x: offsetX,
      y: offsetY,
      width: 80,
      height: 80,
      rotation: 0,
    };

    setStickers((prev) => [...prev, newSticker]);
    setSelectedId(id);
  };

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
      // TODO: 서버에 메시지 저장하는 API 호출
      // const response = await fetch('/api/messages', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     receiver,
      //     sender,
      //     message: message.trim(),
      //     password,
      //     bgColor,
      //     stickers,
      //   }),
      // });
      // if (!response.ok) throw new Error('서버 오류 발생');
      // onSave({ receiver, sender, message, password, bgColor, stickers });
    } catch (err) {
      setError(`메시지 저장 중 오류가 발생했습니다. ${err}`);
    }
  };

  return (
    <div className='modal-backdrop'>
      <div className='modal' role='dialog' aria-modal='true' aria-labelledby='message-modal-title'>
        <div className='modal-header'>
          <h2 id='message-modal-title' className='modal-title'>
            ✨ 프론트엔드 1팀에게 메시지 작성하기
          </h2>
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
                // onMouseDown={(e) => selectedId !== null && e.preventDefault()}
                // onFocus={(e) => selectedId !== null && e.preventDefault()}
                placeholder='축하와 응원의 메시지를 작성해보세요!'
                maxLength={200}
              />
              {stickers.map((sticker) => (
                <div
                  key={sticker.id}
                  ref={(el) => (stickerRefs.current[sticker.id] = el)}
                  style={{
                    position: 'absolute',
                    width: sticker.width,
                    height: sticker.height,
                    left: 0,
                    top: 0,
                    transform: `translate(${sticker.x}px, ${sticker.y}px) rotate(${sticker.rotation}deg)`,
                    transformOrigin: 'top left',
                    zIndex: selectedId === sticker.id ? 10 : 1,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(sticker.id);
                  }}
                >
                  <img src={sticker.src} alt='스티커' style={{ width: '100%', height: '100%' }} />
                </div>
              ))}
              {selectedId && (
                // TODO: 스티커를 2번 클릭해야 선택되는 문제 수정해야함!
                <Moveable
                  target={stickerRefs.current[selectedId]}
                  container={canvasRef.current}
                  draggable
                  resizable
                  rotatable
                  origin={false}
                  bounds={{
                    left: textareaRef.current?.offsetLeft || 0,
                    top: textareaRef.current?.offsetTop || 0,
                    right:
                      (textareaRef.current?.offsetLeft || 0) +
                      (textareaRef.current?.offsetWidth || 0),
                    bottom:
                      (textareaRef.current?.offsetTop || 0) +
                      (textareaRef.current?.offsetHeight || 0),
                  }}
                  onDrag={({ target, beforeTranslate }) => {
                    const [x, y] = beforeTranslate;

                    // 부모 컨테이너와 스티커 크기 가져오기
                    const parent = target.parentElement;
                    if (!parent) return;

                    const parentRect = parent.getBoundingClientRect();
                    const targetRect = target.getBoundingClientRect();

                    // 최대 이동 가능 거리 계산
                    const maxX = parentRect.width - targetRect.width;
                    const maxY = parentRect.height - targetRect.height;

                    // clamp 함수
                    const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

                    // 제한된 좌표
                    const clampedX = clamp(x, 0, maxX);
                    const clampedY = clamp(y, 0, maxY);

                    // transform 업데이트
                    const rotation = stickers.find((s) => s.id === selectedId)?.rotation || 0;
                    target.style.transform = `translate(${clampedX}px, ${clampedY}px) rotate(${rotation}deg)`;

                    // 상태 업데이트
                    setStickers((prev) =>
                      prev.map((s) =>
                        s.id === selectedId ? { ...s, x: clampedX, y: clampedY } : s,
                      ),
                    );
                  }}
                  onResize={({ width, height, drag }) => {
                    const [x, y] = drag.beforeTranslate;

                    const el = stickerRefs.current[selectedId];
                    if (el) {
                      el.style.transform = `translate(${x}px, ${y}px) rotate(${stickers.find((s) => s.id === selectedId)?.rotation || 0}deg)`;
                      el.style.width = `${width}px`;
                      el.style.height = `${height}px`;
                    }

                    setStickers((prev) =>
                      prev.map((s) => (s.id === selectedId ? { ...s, width, height, x, y } : s)),
                    );
                  }}
                  onRotate={({ beforeRotate }) => {
                    const el = stickerRefs.current[selectedId];
                    if (el) {
                      el.style.transform = `translate(${stickers.find((s) => s.id === selectedId)?.x}px, ${stickers.find((s) => s.id === selectedId)?.y}px) rotate(${beforeRotate}deg)`;
                    }

                    setStickers((prev) =>
                      prev.map((s) => (s.id === selectedId ? { ...s, rotation: beforeRotate } : s)),
                    );
                  }}
                />
              )}
            </div>
            <div className='sticker-button-wrapper'>
              <button className='sticker-toggle' onClick={() => setShowStickers(!showStickers)}>
                📎 스티커 추가
              </button>
            </div>
          </div>

          {showStickers && (
            <div className='sticker-panel'>
              <div className='sticker-header'>
                <strong>스티커 선택</strong>
                <button onClick={() => setShowStickers(false)}>✕</button>
              </div>
              <div className='sticker-grid'>
                {STICKERS.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt='스티커'
                    className='sticker-img'
                    onClick={() => addStickerToCanvas(src)}
                  />
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
              <small>메시지 수정/삭제 시 필요합니다</small>
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
