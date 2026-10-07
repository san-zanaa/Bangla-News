import Image from 'next/image';


interface NewsBodyItem {
    type: "image" | "text" | "subheading";
    url?: string;
    width?: number;
    height?: number;
    altText?: string;
    caption?: string | null;
    copyrightHolder?: string;
    text?: string;
};

const NewsDetails = async ({ params }: { params: { newsId: string } }) => {
    const { newsId } = await params
    const response = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await response.json()
    const news = data.data
    const firstImage = news.body[0]
    console.log(news)

    return (
        <div className="max-w-3xl mx-auto px-5 py-10">
            <h1 className="text-xl md:text-3xl font-bold leading-tight">
                {news.title}
            </h1>

            <p className="text-xl md:text-lg text-gray-600 leading-relaxed mt-3">
                {news.description.blocks[0].model.blocks[0].model.text}
            </p>

            <div className="border-y border-gray-200 py-4 mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                <span>
                    {news.byline?.[0]?.name}
                </span>

                <span>
                    {new Date(news.firstPublished).toLocaleDateString(
                        "bn-BD",
                        {
                            timeZone: "Asia/Dhaka",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }
                    )}
                </span>

                <span>
                    {new Date(news.firstPublished).toLocaleTimeString(
                        "en-US",
                        {
                            timeZone: "Asia/Dhaka",
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                        })}
                </span>

                <span>
                    {news.wordCount} শব্দ
                </span>
            </div>

            {firstImage?.type === "image" && (
                <div className="mt-10 w-full overflow-hidden rounded-xl">
                    <Image
                        src={firstImage.url}
                        alt={firstImage.altText || ""}
                        width={firstImage.width}
                        height={firstImage.height}
                        className="w-full h-auto" />
                </div>
            )}
            <div className="mt-6">
                {news.body.map((item: NewsBodyItem, index: number) => {
                    if (index === 0 && item.type === "image") {
                        return null;
                    }
                    if (item.type === "text") {
                        return (
                            <p key={index}
                                className="text-lg md:text-base leading-7 mb-4 text-gray-800 whitespace-pre-line">
                                {item.text}
                            </p>
                        );
                    }

                    if (item.type === "subheading") {
                        return (
                            <h2
                                key={index}
                                className="text-xl md:text-lg font-bold mt-12 mb-6">
                                {item.text}
                            </h2>
                        );
                    }

                    if (item.type === "image") {
                        return (
                            <div
                                key={index}
                                className="my-10 w-full overflow-hidden rounded-xl">
                                <Image
                                    src={item.url}
                                    alt={item.altText || ""}
                                    width={item.width}
                                    height={item.height}
                                    className="w-full h-auto" />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
                {news.tags?.map((tag: string, index: number) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

    );
};

export default NewsDetails;