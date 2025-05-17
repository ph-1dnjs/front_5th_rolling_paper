import React from 'react';

type LabelInputProps = {
  label: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
} & React.InputHTMLAttributes<HTMLInputElement>;

const LabelInput = (props: LabelInputProps) => {
  const { label, value, onChange, placeholder, maxLength, ...rest } = props;

  return (
    <div className='label-input' style={{ display: 'flex', flexDirection: 'column' }}>
      <label>{label}</label>
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        {...rest}
      />
    </div>
  );
};

export default LabelInput;
