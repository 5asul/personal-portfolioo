import React from 'react';

interface InputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}

export const Input: React.FC<InputProps> = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  required = false,
  rows,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-left text-sm text-blue-50 sm:text-base lg:text-lg font-medium mb-2"
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 bg-blue-50 border border-gray-300 rounded-lg text-sm sm:text-base lg:text-lg"
          rows={rows}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border bg-blue-50 border-gray-300 rounded-lg text-sm sm:text-base lg:text-lg"
          required={required}
        />
      )}
    </div>
  );
};