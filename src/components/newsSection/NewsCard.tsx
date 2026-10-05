import Image from "next/image";
import Link from "next/link";

interface NewsType {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt?: string;
  description: string;
}

const NewsCard = ({ news }: { news: NewsType }) => {
  return (
    <Link href={`/news/newsId`}>
    <div className="card bg-base-100 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
      
      <figure className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
        <Image
          src={news.imageUrl}
          alt={news.imageAlt || news.title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </figure>

      <div className="card-body p-4 sm:p-5">
        <h2 className="card-title text-base sm:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
          {news.title}
        </h2>
        <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {news.description}
        </p>
      </div>
    </div>
    </Link>
  );
};

export default NewsCard;