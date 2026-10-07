import React from 'react';
import Image from 'next/image';

interface News {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string,
    firstPublished: string
}

const MainNews = ({ news }: { news: News[] }) => {
    const [firstNews, ...otherNews] = news

    return (
        <div className='h-auto p-5 flex flex-col gap-4 lg:flex-row'>
            <div className='w-full lg:w-1/2 border border-gray-300 rounded-xl shadow-sm overflow-hidden cursor-pointer'>
                <div>
                    <Image
                        src={firstNews.imageUrl} alt={firstNews.imageAlt}
                        width={600} height={600} className='w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110'
                    />
                </div>
                <div className='p-4'>
                    <h5 className='text-sm text-red-700 font-bold'>{firstNews.category}</h5>
                    <h1 className='text-xl font-bold'>{firstNews.title}</h1>
                    <p className="text-gray-500 leading-snug line-clamp-3">{firstNews.description}</p>
                    <p className="text-sm text-gray-400 mt-3">
                        {new Date(firstNews.firstPublished).toLocaleDateString("bn-BD", {
                            timeZone: "Asia/Dhaka",
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
                        {" • "}
                        {new Date(firstNews.firstPublished).toLocaleTimeString("bn-BD", {
                            timeZone: "Asia/Dhaka",
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true
                        })}
                    </p>
                </div>
            </div>

            <div className='w-full lg:w-1/2 border border-gray-300 rounded-xl shadow-sm'>
                {otherNews.slice(0, 4).map(other => <div className="border-b border-gray-200 py-5 px-2 last:border-b-0" key={other.id}>
                    <div>
                        <h5 className='text-sm text-red-700 font-bold mb-1'>{other.category}</h5>
                        <h2 className="font-semibold leading-snug">{other.title}</h2>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MainNews;