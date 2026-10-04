import MostRead from "./mostRead/MostRead";
import MainNews from "./newsSection/MainNews";
import NewsCard from "./newsSection/NewsCard";

interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

interface Section {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  count: number;
  articles: Article[];
}

const NewsSection = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
    cache: "no-store", 
  });
  const data = await res.json();
  const sections: Section[] = data.data;

  const mainSectionArticles = sections[0]?.articles || [];
  
  const otherSections = sections.slice(1);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="col-span-1 md:col-span-2 space-y-8">
          <MainNews news={mainSectionArticles} />

          <div className="space-y-6">
            {
            otherSections.map((os) => (
              <div key={os.curationId} className="border-t pt-4">
                <h2 className="text-xl font-bold mb-3 text-red-700">{os.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {os.articles.map(news=> (
                    
                      <NewsCard key={news.id} news={news}></NewsCard>
                    
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 p-4 rounded-md h-fit">
          <MostRead></MostRead>
        </div>

      </div>
    </div>
  );
};

export default NewsSection;