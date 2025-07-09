import { useEffect, useState } from 'react';

type ToastProps = {
  message: string;
  onClose: () => void;
  duration?: number; // 표시 시간 (ms)
  fadeDuration?: number; // 사라지는 애니메이션 시간 (ms)
};

export default function Toast({
  message,
  onClose,
  duration = 2000,
  fadeDuration = 500,
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // duration 후에 fade-out 시작
    const fadeTimer = setTimeout(() => setVisible(false), duration);

    // fadeDuration 후에 onClose (언마운트)
    const closeTimer = setTimeout(() => {
      onClose();
    }, duration + fadeDuration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose, duration, fadeDuration]);

  // Fade out: opacity 0, 아래로 이동
  const style = visible
    ? {
        opacity: 1,
        transform: 'translate(-50%, 0)',
        transition: `opacity ${fadeDuration}ms, transform ${fadeDuration}ms`,
      }
    : {
        opacity: 0,
        transform: 'translate(-50%, 30px)', // 아래로 살짝 이동
        transition: `opacity ${fadeDuration}ms, transform ${fadeDuration}ms`,
      };

  return (
    <div
      className="fixed bottom-24 left-1/2 bg-black text-white text-sm px-4 py-2 rounded-full shadow-md z-50"
      style={style}
    >
      {message}
    </div>
  );
}
