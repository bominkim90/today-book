import { useEffect, useState } from 'react';

type ToastProps = {
  message: string;
  onClose: () => void;
  duration?: number; // 기본 2초
};

export default function Toast({ message, onClose, duration = 4000 }: ToastProps) {
  const fadeDuration = duration / 2;
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFading(true); // 페이드아웃 시작
    }, duration - fadeDuration);

    const closeTimer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose, duration, fadeDuration]);

  const baseClass =
    'fixed bottom-24 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-full shadow-md z-50 transition-all';

  const style = fading
    ? {
        transition: `opacity ${fadeDuration}ms, transform ${fadeDuration}ms`,
        opacity: 0,
        transform: 'translate(-50%, 20vh)',
      }
    : {
        transition: `opacity ${fadeDuration}ms, transform ${fadeDuration}ms`,
        opacity: 1,
        transform: 'translate(-50%, 0)',
      };

  if (!visible) return null;

  return (
    <div className={baseClass} style={style}>
      {message}
    </div>
  );
}
