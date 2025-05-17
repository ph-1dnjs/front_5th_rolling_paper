import { useState, useEffect, useCallback } from 'react';

export interface CreatePostFormValues {
  receiver: string;
  sender: string;
  message: string;
  password: string;
  bgColor: string;
  showEmojiList: boolean;
}

// eslint-disable-next-line no-unused-vars
export const useCreatePostForm = (onSave: (values: CreatePostFormValues) => void) => {
  const [values, setValues] = useState<CreatePostFormValues>({
    receiver: '',
    sender: '',
    message: '',
    password: '',
    bgColor: 'white',
    showEmojiList: false,
  });
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (error) alert(error);
    setError('');
  }, [error]);

  const setField = useCallback(
    <K extends keyof CreatePostFormValues>(field: K, value: CreatePostFormValues[K]) => {
      setValues((v) => ({ ...v, [field]: value }));
      setError('');
    },
    [],
  );

  const validateAndSave = useCallback(() => {
    const { receiver, sender, message, password } = values;
    if (!receiver.trim() || !sender.trim()) {
      setError('이름을 모두 입력해주세요.');
    } else if (message.trim().length < 1) {
      setError('메시지를 1자 이상 입력해주세요.');
    } else if (!/^\d{4}$/.test(password)) {
      setError('비밀번호는 4자리 숫자여야 합니다.');
    } else {
      onSave(values);
    }
  }, [values, onSave]);

  return {
    values,
    error,
    setField,
    validateAndSave,
  };
};
