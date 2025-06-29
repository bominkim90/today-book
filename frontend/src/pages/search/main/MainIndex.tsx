import RecentSearchRecords from './RecentSearchRecords';
import SearchResults from './SearchResults';

export default function MainIndex() {
  return (
    <main className="flex-1 overflow-y-auto p-[16px]">
      <RecentSearchRecords />
      <SearchResults />
    </main>
  );
}
