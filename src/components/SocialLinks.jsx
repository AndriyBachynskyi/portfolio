import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div className='m-8 flex items-center justify-center gap-5 text-2xl'>
            <a href='https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D0%B9-%D0%B1%D0%B0%D1%87%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-bb5785243/' target='_blank'>
                <FaLinkedin className='cursor-pointer' />
            </a>
            <a href="https://github.com/AndriyBachynskyi" target='_blank'>
                <FaGithub className='cursor-pointer' />
            </a>
            <a href="https://www.instagram.com/andriy_bachynskyi/" target='_blank'>
                <FaInstagram className='cursor-pointer' />
            </a>
            <a href="https://t.me/andriy8807" target='_blank'>
                <FaTelegram className='cursor-pointer' />
            </a>
        </div>
    );
};

export default SocialLinks;