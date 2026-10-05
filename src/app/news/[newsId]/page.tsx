import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: Promise<{ newsId: string }>;

}
interface ImageBlock  {
  type: "image";
  url: string;
  width?: number;
  height?: number;
  caption?: string | null;
};

interface TextBlock {
  type: "text";
  text: string;
};


type DescriptionBlock = ImageBlock | TextBlock;

const DetailsPage = async ({ params }: PageProps) => {
  const { newsId } = await params;

  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  if (!data.success || !data.data) {
    notFound();
  }

  const news = data.data;

  const formattedDate = news.firstPublished
    ? new Date(news.firstPublished).toLocaleDateString("bn-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <article className="max-w-7xl mx-auto px-4 py-8 text-gray-900">
      <div className="flex items-center gap-2 text-sm text-red-600 font-semibold mb-3">
        <span>{news.source || "সংবাদ"}</span>
        {formattedDate && (
          <>
            <span>•</span>
            <span className="text-gray-500 font-normal">{formattedDate}</span>
          </>
        )}
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gray-900">
        {news.title}
      </h1>

      {news.byline && news.byline.length > 0 && (
        <div className="flex items-center gap-2 mb-6 text-sm text-gray-600 border-b pb-4">
          <span className="font-medium">প্রতিবেদন:</span>
          <span>{news.byline.map((b: { name: string }) => b.name).join(", ")}</span>
        </div>
      )}

      {news.imageUrl && (
        <div className="mb-8 overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={news.imageUrl}
            alt={news.title}
            width={500}
            height={500}
            className="w-full h-auto max-h-125 object-cover"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4 text-lg">
        {news.text ? (
          news.text.split("\n\n").map((paragraph: string, index: number) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))
        ) : (
          <p>কোনো বিবরণ পাওয়া যায়নি।</p>
        )}
      </div>

      {news.description?.blocks && news.description.blocks.length > 0 && (
        <div className="mt-8 space-y-6">
          {news.description.blocks.map((block:DescriptionBlock, index:number) => {
            if (block.type === "image" && block.url) {
              return (
                <figure key={index} className="my-6">
                  <Image
                    src={block.url}
                    alt={block.caption || "সংবাদের ছবি"}
                    className="w-full h-auto rounded-lg"
                  />
                  {block.caption && (
                    <figcaption className="text-sm text-gray-500 mt-2 text-center">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }
            if (block.type === "text" && block.text) {
              return (
                <p key={index} className="text-gray-800 text-lg leading-relaxed">
                  {block.text}
                </p>
              );
            }
            return null;
          })}
        </div>
      )}

      {news.tags && news.tags.length > 0 && (
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 mb-3">সম্পর্কিত ট্যাগ:</h3>
          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full border transition"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

     
    </article>
  );
};

export default DetailsPage;