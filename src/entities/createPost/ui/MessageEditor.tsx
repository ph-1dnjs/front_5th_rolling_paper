import { forwardRef } from 'react';
import './MessageEditor.css';

interface MessageEditorProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (html: string) => void;
}

const MessageEditor = forwardRef<HTMLDivElement, MessageEditorProps>(({ onChange }, ref) => (
  <div
    ref={ref}
    className='message-editor w-full p-2 text-sm rounded-md bg-white'
    contentEditable
    suppressContentEditableWarning
    onInput={(e) => onChange((e.currentTarget as HTMLDivElement).innerHTML)}
  ></div>
));

export default MessageEditor;
