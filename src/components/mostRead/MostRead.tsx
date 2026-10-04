interface MostReadItem {
  id: string;
  rank: number;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read", {
    cache: "no-store", 
  });
  const data = await res.json();
  const mostReadData: MostReadItem[] = data.data || [];

  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="border-b-2 border-red-600 pb-2 mb-3">
        <h2 className="text-black font-bold text-lg">
          সর্বাধিক পঠিত
        </h2>
      </div>

      <div className="divide-y divide-gray-100">
        {mostReadData.map((m) => (
          <div key={m.id} className="py-3 flex items-start gap-3 group cursor-pointer">
            <span className="text-red-500 font-bold text-2xl leading-none w-6 shrink-0">
              {m.rank}.
            </span>
            
            <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 leading-snug">
              {m.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;