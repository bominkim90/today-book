import { useEffect, useState } from 'react';

type ToastProps = {
  message: string;
  onClose: () => void;
  duration?: number; // 기본 2초
};

export default function Toast({ message, onClose, duration = 4000 }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const visibleTimer = setTimeout(() => {
      setVisible(false);
    }, duration - 1000);
    const closeTimer = setTimeout(onClose, duration);

    return () => {
      clearTimeout(visibleTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose, duration]);

  return (
    <div
      className={`transition-opacity duration-1000 fixed bottom-24 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-full shadow-md z-50 
        ${visible ? 'opacity-100' : 'opacity-0 translate-y-10'}
      `}
    >
      {message}
    </div>
  );
}
