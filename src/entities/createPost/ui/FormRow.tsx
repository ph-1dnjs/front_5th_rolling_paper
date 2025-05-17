import React, { ReactNode } from 'react';
import './FormRow.css';

interface FormRowProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

const FormRow: React.FC<FormRowProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={`form-row flex mb-4 ${className || ''}`} {...rest}>
      {children}
    </div>
  );
};

export default FormRow;
