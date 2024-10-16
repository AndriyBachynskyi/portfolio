import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contacts from "./components/Contacts.jsx";
import Technologies from './components/Technologies.jsx';

const App = () => {
    return (
        <div className='overflow-x-hidden text-neutral-200 antialiased selection:bg-purple-500 selection:text-neutral-900'>
            <div className='fixed top-0 -z-10 h-full w-full'>
            <div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
            </div>
                <div className='container mx-auto px-8'>
                    <Navbar />
                    <Hero />
                    <Technologies />
                    <Experience />
                    <Projects />
                    <Contacts />
                </div>
        </div>
    );
};

export default App;