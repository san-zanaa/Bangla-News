import NewsCard from '@/components/NewsData/NewsCard';
import React from 'react';

interface News {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string,
    firstPublished: string
}

const CategoryNews = async ({ params }: {params:{id: string}}) => {
    const { id } = await params
    const response = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`)
    const data = await response.json()
    const categoryNews:News[]= data.data

    return (
        <div className='p-5'>
            <h1 className='text-2xl font-bold border-b-2 border-red-700 mb-6 py-2'>{data.title}</h1>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {categoryNews.map((news) => (
                    <NewsCard key={news.id} news={news} />
                ))}
            </div>
        </div>
    );
};

export default CategoryNews;