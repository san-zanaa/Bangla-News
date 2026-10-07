import MainNews from "@/components/NewsData/MainNews";
import MostRead from "@/components/NewsData/MostRead";
import NewsCard from "@/components/NewsData/NewsCard";

interface OtherSection {
    curationId: string,
    title: string,
    articles: {
    id: string,
    title: string,
    description: string,
    category:string,
    imageUrl: string,
    imageAlt: string,
    firstPublished: string
    }[];
  }

export default async function Home() {
  const response = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await response.json();
  const sections = data.data
  const mainNews = sections[0].articles
  const otherSections:OtherSection[] = sections.slice(1)

  return (
    <div>

      <div className="grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-3">
        <div className="lg:col-span-2 w-full">
          <MainNews news={mainNews} />

          <div className="mt-5 p-5">
            {otherSections.map(os=> <div className="mb-5" key={os.curationId}>
              <h1 className="font-bold border-b-2 border-red-700">{os.title}</h1>

              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 ">
                {os.articles.map(news => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
              </div>)}
          </div>
        </div>

        <div className="col-span-1 px-3">
          <MostRead />
        </div>
      </div>
    </div>
  );
}
