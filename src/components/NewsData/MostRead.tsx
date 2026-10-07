import React from 'react';

const MostRead = async() => {
    const response = await fetch("https://news-api-v2.vercel.app/api/news/most-read")
    const data = await response.json()
    const news = data.data;
    return (
        <div className='py-6 px-3 mt-5 border border-gray-300 rounded-xl shadow-sm'>
            <h4 className='text-xl font-semibold mb-2'>সর্বাধিক পঠিত</h4>
            <div>
                {news.map((n, i) => <div className='flex gap-3' key={n.id}>
                    <p className='text-xl text-red-600 py-1 font-bold'>{i+1}</p> <h2 className='font-semibold py-1'>{n.title}</h2>
                    </div>)}
            </div>
            
        </div>
    );
};

export default MostRead;