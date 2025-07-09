import { useEffect } from 'react';

type ToastProps = {
  visible: boolean;
  message: string;
  onClose: () => void;
  duration?: number; // 기본 2초
};

export default function Toast({ visible, message, onClose, duration = 2000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      className={`fixed bottom-24 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-full shadow-md z-50 
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
      style={{
        transition: `opacity ${duration / 1000}s ease-in-out`,
      }}
    >
      {message}
    </div>
  );
}
