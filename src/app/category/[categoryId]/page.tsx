import NewsCard from "@/components/newsSection/NewsCard";
import React from "react";

interface NewsItem {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt?: string;
  description: string;
}

interface PageProps {
  params: Promise<{ categoryId: string }>;
}

const CategoryPage = async ({ params }: PageProps) => {
  const { categoryId } = await params;
  
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
    { cache: "no-store" } 
  );
  
  const data = await res.json();
  const categoryData: NewsItem[] = data?.data || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6 border-b-2 border-red-600 pb-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 capitalize">
          {data?.title || data?.category || categoryId}
        </h1>
      </div>

      {categoryData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          এই ক্যাটাগরিতে কোনো খবর পাওয়া যায়নি।
        </div>
      )}
    </div>
  );
};

export default CategoryPage;