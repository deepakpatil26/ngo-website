// src/components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  color?: string; // Tailwind color like 'text-blue-600'
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  content,
  color = 'text-blue-600',
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
      <div className='bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative'>
        <button
          onClick={onClose}
          className='absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl'>
          &times;
        </button>
        <h2 className={`text-2xl font-bold mb-4 ${color}`}>{title}</h2>
        <p className='text-gray-700'>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
