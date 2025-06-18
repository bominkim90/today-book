import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButtton';

export default function HeaderList() {
  const { subject } = useParams();

  return (
    <header className="shirink-0 py-[12px] px-[16px] h-[64px] shadow-sm flex items-center">
      <BackButton />
      <h1 className="page-title">{subject}</h1>
      <button type="button">공유버튼</button>
    </header>
  );
}
