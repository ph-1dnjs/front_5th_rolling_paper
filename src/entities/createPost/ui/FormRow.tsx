import React, { ReactNode } from 'react';
import './FormRow.css';

interface FormRowProps {
  children: ReactNode;
  [key: string]: any;
}

const FormRow: React.FC<FormRowProps> = ({ children, rest }) => (
  <div className='form-row flex mb-4' {...rest}>
    {children}
  </div>
);

export default FormRow;
