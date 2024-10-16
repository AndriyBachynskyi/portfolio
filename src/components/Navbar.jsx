import React from 'react';
import SocialLinks from "./SocialLinks.jsx";

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <span
                    className='text-2xl font-thin tracking-tight'
                >
                    AB | Portfolio
                </span>
            </div>
            <SocialLinks />
        </nav>
    );
};

export default Navbar;