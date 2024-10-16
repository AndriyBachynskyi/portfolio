import React from 'react';
import { HERO_CONTENT } from "../constants/index.js";
import { motion } from 'framer-motion'
import { RiDownloadLine } from "react-icons/ri";

export const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full'>
                    <div className='flex flex-col items-center justify-center lg:justify-between lg:flex-row'>
                    <motion.div
                            className=''
                            variants={container(0.1)}
                            initial='hidden'
                            animate='visible'
                        >
                            <h1 className='pb-6 mt-2 text-7xl font-thin tracking-tight lg:mt-6 lg:text-16xl'>
                                Andriy Bachynskyi
                            </h1>
                            <span className='bg-gradient-to-r from-neutral-700 via-neutral-400 to-neutral-300 bg-clip-text text-3xl tracking-tight text-transparent'>
                                Frontend Developer
                            </span>
                            <p className='my-2 max-w-xl py-6 font-light tracking-tight'>
                                {HERO_CONTENT}
                            </p>
                        </motion.div>
                        <motion.a
                            animate={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: 100}}
                            transition={{duration: 0.5, delay: 0.1}}
                            href="https://drive.google.com/file/d/1CN4OXZ1Hz5fznWizmHNehPXj1-XtCYHw/view?usp=drive_link"
                            target='_blank'
                            className='hover:border-neutral-300 hover:transition hover:duration-300 lg:px-10 lg:py-3 px-6 py-2 flex flex-col items-center border border-neutral-400 rounded-md'
                        >
                            <span 
                                className='text-xl font-thin tracking-tight pb-2'
                            >
                                Download CV
                            </span>
                            <RiDownloadLine size={20} className='text-neutral-400' />
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;