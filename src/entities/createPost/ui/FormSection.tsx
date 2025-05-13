import React, { ReactNode } from 'react';
import './FormSection.css';

interface FormSectionProps {
  label: string;
  children: ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ label, children }) => (
  <div className='form-section'>
    <label className='form-label'>{label}</label>
    {children}
  </div>
);

export default FormSection;
