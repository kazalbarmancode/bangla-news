import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ newsId: string }>;
}

const DetailsPage =  async({params}:PageProps) => {
    const {newsId} = await params

    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)

    const data = await res.json() 

    const news = data.data 
    if(!news) {
        notFound()
    }

   
    return (
        <div>
            <h1>{news.title}</h1>


            <p>{news.text}</p>
        </div>
    );
};

export default DetailsPage;
