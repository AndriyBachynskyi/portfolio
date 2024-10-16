import React from 'react';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandTypescript } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaNode } from 'react-icons/fa6'
import { FaJsSquare  } from "react-icons/fa";


const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='my-20 text-center text-4xl font-medium tracking-normal'>My Stack</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='hover:scale-125 transition duration-300 text-center justify-center flex rounded-2xl border-2 border-neutral-700 mr-2 p-4'>
                    <FaJsSquare className='text-5xl text-yellow-300' />
                </div>
                <div className='hover:scale-125 transition duration-300 text-center justify-center flex rounded-2xl border-2 border-neutral-700 mr-2 p-4'>
                    <RiReactjsLine className='text-5xl text-cyan-400' />
                </div>
                <div className='hover:scale-125 transition duration-300 text-center justify-center flex rounded-2xl border-2 border-neutral-700 mr-2 p-4'>
                    <TbBrandTypescript className='text-5xl text-sky-600' />
                </div>
                <div className='hover:scale-125 transition duration-300 text-center justify-center flex rounded-2xl border-2 border-neutral-700 mr-2 p-4'>
                    <RiTailwindCssFill className='text-5xl text-sky-500' />
                </div>
                <div className='hover:scale-125 transition duration-300 text-center justify-center flex rounded-2xl border-2 border-neutral-700 mr-2 p-4'>
                    <FaNode className='text-5xl text-green-500' />
                </div>
                <div className='hover:scale-125 transition duration-300 text-center justify-center flex rounded-2xl border-2 border-neutral-700 mr-2 p-4'>
                    <SiMongodb className='text-5xl text-green-500' />
                </div>
            </div>
        </div>
    );
};

export default Technologies;