import React from 'react';

type ButtonProps = {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
};

export const Button = ({ primary = false, size = 'medium', label, onClick }: ButtonProps) => {
  const mode = primary ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800';
  const sizes = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  return (
    <button
      type="button"
      className={`rounded font-medium ${mode} ${sizes[size]} shadow-sm hover:opacity-90 focus:outline-none`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
