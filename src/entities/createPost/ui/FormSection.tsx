import React, { ReactNode } from 'react';

interface FormSectionProps {
  label: string;
  children: ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ label, children }) => (
  <div className='form-section flex flex-col w-full'>
    <label className='form-label'>{label}</label>
    {children}
  </div>
);

export default FormSection;
