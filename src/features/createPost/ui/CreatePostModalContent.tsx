import React, { useRef, useEffect } from 'react';

import { insertEmojiToSelection } from '@/entities/createPost/libs/utils';
import { useCreatePostForm } from '@/entities/createPost/model/useCreatePostForm';
import EmojiButton from '@/entities/createPost/ui/EmojiButton';
import EmojiPanel from '@/entities/createPost/ui/EmojiPanel';
import FormRow from '@/entities/createPost/ui/FormRow';
import FormSection from '@/entities/createPost/ui/FormSection';
import MessageEditor from '@/entities/createPost/ui/MessageEditor';
import './CreatePostModalContent.css';

interface CreatePostModalContentProps {
  onClose: () => void;
  // eslint-disable-next-line no-unused-vars
  onSave: (values: any) => void;
}

const CreatePostModalContent: React.FC<CreatePostModalContentProps> = ({ onClose, onSave }) => {
  const { values, setField, validateAndSave } = useCreatePostForm(onSave);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    editorRef.current?.focus();
  }, []);

  function handleClickEmoji(src: string) {
    insertEmojiToSelection(src);
    editorRef.current?.focus();
  }

  return (
    <>
      <div className='modal-header'>
        <h2 className='modal-title'>프론트엔드 1팀에게 메시지 작성하기</h2>
        <button className='modal-close' onClick={onClose}>
          ✕
        </button>
      </div>

      <div className='modal-body'>
        <FormRow>
          <FormSection label='받는 사람'>
            <input
              value={values.receiver}
              onChange={(e) => setField('receiver', e.target.value)}
              placeholder='받는 사람의 이름'
              maxLength={20}
            />
          </FormSection>
          <FormSection label='보내는 사람'>
            <input
              value={values.sender}
              onChange={(e) => setField('sender', e.target.value)}
              placeholder='당신의 이름'
              maxLength={20}
            />
          </FormSection>
        </FormRow>

        <FormSection label='메시지 내용'>
          <MessageEditor
            ref={editorRef}
            value={values.message}
            onChange={(text) => setField('message', text)}
          />
        </FormSection>

        <FormRow style={{ justifyContent: 'flex-end' }}>
          {/* TODO: 위치 조정 및 tailwind로 치환하기 */}
          <EmojiButton onToggle={() => setField('showEmojiList', !values.message)} />

          <EmojiPanel
            show={values.showEmojiList}
            emojiList={Array.from({ length: 10 }, (_, i) => `/emojis/emoji${i + 1}.png`)}
            onClickEmoji={handleClickEmoji}
            onClose={() => setField('showEmojiList', false)}
          />
        </FormRow>

        <FormRow>
          <FormSection label='비밀번호 (4자리)'>
            <input
              type='password'
              value={values.password}
              onChange={(e) => setField('password', e.target.value)}
              placeholder='4자리 숫자'
              maxLength={4}
            />
          </FormSection>
          <FormSection label='배경 색상'>
            <select value={values.bgColor} onChange={(e) => setField('bgColor', e.target.value)}>
              <option value='white'>흰색</option>
              <option value='pink'>분홍</option>
              <option value='yellow'>노랑</option>
              <option value='blue'>파랑</option>
            </select>
          </FormSection>
        </FormRow>
      </div>

      <div className='modal-footer'>
        {/* {error && <div className='error-message'>{error}</div>} */}
        <div className='modal-actions'>
          <button onClick={onClose}>취소</button>
          <button onClick={validateAndSave}>메시지 저장하기</button>
        </div>
      </div>
    </>
  );
};

export default CreatePostModalContent;
