import Image from 'next/image';


interface NewsType{
    id:string,
    title:string,
    imageUrl:string,
    imageAlt:string,
    description:string
    
}
const NewsCard = ({news}:{news:NewsType}) => {
    return (
       <div className="card bg-base-100 border border-gray-100">
              <figure className="relative w-full md:w-full h-50 md:h-50">
                <Image
                  src={news.imageUrl}
                  alt={news.imageAlt || news.title}
                  fill
                  className="object-cover rounded-t-lg"
                  priority
                />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title text-sm md:text-1xl font-bold mt-1">{news.title}</h2>
                <p className="text-gray-600 hover:text-red-600 mt-2 text-sm leading-relaxed">{news.description}</p>
              </div>
            </div>
    );
};

export default NewsCard;