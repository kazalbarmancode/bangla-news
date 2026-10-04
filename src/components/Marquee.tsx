import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface MarqueeDataType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headLines = data.data;

  return (
    <div className="bg-red-700 mt-3 w-full">
      <div className="flex items-center max-w-7xl mx-auto px-4  overflow-hidden">
        <div className="bg-red-900 py-2 px-5 font-bold text-white shrink-0 z-10">
          সর্বশেষ
        </div>

        <div className="flex-1 overflow-hidden min-w-0">
          <MarqueeText direction="right" duration={8} className="text-white">
            {headLines.map((headLine: MarqueeDataType) => (
              <span key={headLine.id} className="inline-flex items-center">
                <span>{headLine.title}</span>
                <span className="mx-6">•</span>
              </span>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;