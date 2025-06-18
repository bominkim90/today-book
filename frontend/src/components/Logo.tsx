import { useNavigate } from 'react-router-dom';

export default function Logo() {
  const navigate = useNavigate();

  return (
    <a
      className="inline-block font-pacifico text-[20px]"
      onClick={() => {
        navigate('/');
      }}
    >
      logo
    </a>
  );
}
