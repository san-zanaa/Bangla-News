import React from 'react';
import Image from 'next/image';
import NavLinks from './NavLinks';


const Navbar = () => {
    const date = new Date().toLocaleDateString
        ("bn-BD", {
            dateStyle: "full"
        })
    return (
        <div className='relative  max-w-7xl p-5'>
            <div className='flex flex-col gap-2 items-center justify-center sm:flex-row sm:gap-2'>
                    <Image src={'/public/logo.webp'} alt='' height={50} width={50} className='w-12 h-12 object-contain'/>
                <div className='flex flex-col items-center sm:items-start'>
                    <h1 className='font-bold text-xl text-red-700'>Bangla News 24</h1>
                    <p className='text-[10px] text-gray-500'>{date}</p>
                </div>
            </div>
            <div className='absolute right-20 top-5 flex gap-2 text-sm'>
                <button className='cursor-pointer hover:bg-gray-200 py-2 px-3 rounded-md'>সাইন ইন</button>
                <button className='bg-red-700 text-white py-2 px-3 rounded-md hover:bg-[#cc2936] cursor-pointer'>সাইন আপ</button>
            </div>
            <NavLinks />
        </div>
    );
};

export default Navbar;