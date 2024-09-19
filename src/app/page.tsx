import Search from '@/app/ui/search';

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1" />
      <div className="flex flex-1 h-max">
        <div className="flex-1" />
        <div className="flex-4 h-max">
          <Search />
        </div>
        <div className="flex-1" />
      </div>
      <div className="flex-2" />
    </div>
  );
}
