import SectionInfo from './SectionInfo';
import SectionReview from './SectionReview';

export default function MainIndex() {
  return (
    <main className="flex-1 overflow-y-auto p-[16px]">
      <SectionInfo />
      <SectionReview />
    </main>
  );
}
