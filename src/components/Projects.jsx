import React from 'react';
import { PROJECTS } from "../constants/index.js";
import { FaGithub, FaExternalLinkAlt  } from 'react-icons/fa'

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl font-medium tracking-normal'>Projects</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <img
                                key={index}
                                className='hover:scale-110 transition duration-500 mb-4 rounded-xl lg:w-[220px] lg:h-[130px] w-[220px] h-[100px]'
                                src={project.image}
                                alt="image"
                            />
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-1 font-semibold'>{project.title}</h6>
                            <p className='mb-6 text-neutral-400 text-sm lg:h-8'>{project.description}</p>
                            <div className='flex flex-row items-center w-max'>
                                <a
                                    className='mb-4 mr-2 text-center justify-center flex text-[11px] flex-row w-max items-center border border-neutral-500 px-3 py-2 rounded-md'
                                    href={project.githubLink}
                                    target='_blank'
                                >
                                    View the code
                                    <FaGithub className='ml-1.5' />
                                </a>
                                <a
                                    className={`mb-4 text-center justify-center flex text-[11px] flex-row w-max items-center border border-neutral-500 px-3 py-2.5 rounded-md ${!project.deployLink && 'text-neutral-800'}`}
                                    href={project?.deployLink}
                                    target='_blank'
                                >
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;