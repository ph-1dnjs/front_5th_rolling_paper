import { forwardRef } from 'react';
import './MessageEditor.css';

interface MessageEditorProps {
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (text: string) => void;
}

const MessageEditor = forwardRef<HTMLDivElement, MessageEditorProps>(({ value, onChange }, ref) => (
  <div
    ref={ref}
    className='message-editor w-full p-2 text-sm rounded-md bg-white'
    contentEditable
    suppressContentEditableWarning
    onInput={(e) => onChange((e.target as HTMLDivElement).innerText)}
  >
    {value}
  </div>
));

export default MessageEditor;
