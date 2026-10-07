import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface News {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string,
    firstPublished: string
}

const NewsCard = ({ news }: { news: News }) => {
    return (
        <Link href={`/news/${news.id}`}>
            <div className='w-full border border-gray-300 rounded-xl shadow-sm overflow-hidden'>
                <div className="h-auto overflow-hidden">
                    <Image
                        src={news.imageUrl} alt={news.imageAlt}
                        width={500} height={500} className='w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110'
                    />
                </div>
                <div className='p-4'>
                    <h5 className='text-sm text-red-700 font-bold'>{news.category}</h5>
                    <h1 className='text-xl font-bold'>{news.title}</h1>
                    <p className="text-gray-500 leading-snug line-clamp-3">{news.description}</p>
                    <p className="text-sm text-gray-400 mt-3">
                        {new Date(news.firstPublished).toLocaleDateString("bn-BD", {
                            timeZone: "Asia/Dhaka",
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
                        {" • "}
                        {new Date(news.firstPublished).toLocaleTimeString("bn-BD", {
                            timeZone: "Asia/Dhaka",
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true
                        })}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;