import Image from "next/image";


interface News{
    title:string,
    description:string,
    imageUrl:string,
    imageAlt:string,
    category:string
}


const MainNews = ({ news }:{news:News[]}) => {
  if (!news || news.length === 0) {
    return <div className="p-4 text-center">কোনো খবর পাওয়া যায়নি।</div>;
  }

  const firstNews = news[0];
  const otherNews = news.slice(1);

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-1 ">
      <div className="card bg-base-100 shadow-sm md:w-2/3 border border-gray-100">
        <figure className="relative w-full h-30 md:h-50">
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt || firstNews.title}
            fill
            className="object-cover rounded-t-lg"
            priority
          />
        </figure>
        <div className="card-body p-5">
          <p className="text-red-800 hover:text-red-500 font-semibold text-sm">{firstNews.category}</p>
          <h2 className="card-title text-2xl font-bold mt-1">{firstNews.title}</h2>
          <p className="text-gray-600 hover:text-red-600 mt-2 text-sm leading-relaxed">{firstNews.description}</p>
        </div>
      </div>

      <div className="px-3 md:w-2/3 divide-y divide-gray-200">
        {otherNews.slice(0,4).map((oth,ind) => (
          <div key={ind} className="py-3 hover:text-blue-600 cursor-pointer">
            <p className="text-red-800 text-xs font-semibold">{oth.category}</p>
            <h4 className="text-sm font-semibold leading-snug mt-1">{oth.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;