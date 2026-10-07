import Marquee from "@/components/Navbar/Marquee";
import MainNews from "@/components/NewsData/MainNews";

export default async function Home() {
  const response = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await response.json();
  const sections = data.data
  const mainNews = sections[0].articles

  return (
    <div>
      <Marquee />

      <div className="grid grid-cols-1 max-w-7xl mx-auto lg:grid-cols-3">
        <div className="lg:col-span-2 w-full">
          <MainNews news={mainNews} />
        </div>

        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
