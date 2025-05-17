import React, { useRef, useEffect } from 'react';

import { insertEmojiToSelection } from '@/entities/createPost/libs/utils';
import EmojiButton from '@/entities/createPost/ui/EmojiButton';
import EmojiPanel from '@/entities/createPost/ui/EmojiPanel';
import FormRow from '@/entities/createPost/ui/FormRow';
import FormSection from '@/entities/createPost/ui/FormSection';
import MessageEditor from '@/entities/createPost/ui/MessageEditor';
import { useCreatePostForm } from '@/features/createPost/model/useCreatePostForm';
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
    editorRef.current?.focus();
    insertEmojiToSelection(src);
    setField('message', editorRef.current?.innerHTML || '');
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setField('password', value);
  }

  return (
    <>
      <div className='modal-header flex items-center justify-between pt-4 pl-6 pr-6 pb-4'>
        <h2 className='modal-title flex items-center text-2xl leading-8'>
          프론트엔드 1팀에게 메시지 작성하기
        </h2>
        <button className='modal-close absolute cursor-pointer' onClick={onClose}>
          ✕
        </button>
      </div>

      <div className='modal-body overflow-y-auto'>
        <FormRow>
          <FormSection label='받는 사람'>
            <input
              className='w-full p-2 text-sm rounded-md h-10'
              value={values.receiver}
              onChange={(e) => setField('receiver', e.target.value)}
              placeholder='받는 사람의 이름'
              maxLength={20}
            />
          </FormSection>
          <FormSection label='보내는 사람'>
            <input
              className='w-full p-2 text-sm rounded-md h-10'
              value={values.sender}
              onChange={(e) => setField('sender', e.target.value)}
              placeholder='당신의 이름'
              maxLength={20}
            />
          </FormSection>
        </FormRow>

        <FormSection label='메시지 내용'>
          <MessageEditor ref={editorRef} onChange={(text) => setField('message', text)} />
        </FormSection>

        <FormRow className='justify-end'>
          <EmojiButton onToggle={() => setField('showEmojiList', !values.showEmojiList)} />
        </FormRow>

        <FormRow>
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
              className='w-full p-2 text-sm rounded-md h-10 text-black'
              type='password'
              value={values.password}
              onChange={handlePasswordChange}
              placeholder='4자리 숫자'
              maxLength={4}
            />
            <p className='text-xs leading-4 text-gray-600 mt-2'>메시지 수정/삭제 시 필요합니다</p>
          </FormSection>
          <FormSection label='배경 색상'>
            <select
              className='w-full p-2 text-sm rounded-md h-10'
              value={values.bgColor}
              onChange={(e) => setField('bgColor', e.target.value)}
            >
              <option value='white'>흰색</option>
              <option value='pink'>분홍</option>
              <option value='yellow'>노랑</option>
              <option value='blue'>파랑</option>
            </select>
          </FormSection>
        </FormRow>
      </div>

      <div className='modal-footer flex items-center justify-end'>
        <div className='modal-actions flex justify-end'>
          <button className='text-sm rounded-md cursor-pointer' onClick={onClose}>
            취소
          </button>
          <button className='text-sm rounded-md cursor-pointer' onClick={validateAndSave}>
            메시지 저장하기
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePostModalContent;
