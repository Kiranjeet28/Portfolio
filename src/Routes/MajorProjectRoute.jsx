import { useParams } from 'react-router-dom';
import { projects } from '../Data';
import { Highlight } from '../../utils/ui/hero-highlight';
import ButtonX from '../../utils/ui/button'; // Correct import to PascalCase
import WhatI from '../Component/InnerComponents/WhatI';
import { useEffect } from 'react';

export default function MajorProjectRoute() {
    const { currentId } = useParams();
    const project = projects.find(p => p.id === Number(currentId));

    if (!project) {
        return <div>Project not found</div>;
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='project-details'>
            <Highlight className='bold text-4xl font-bold font-mono md:text-4xl text-slate-100 mb-2 ml-8'>
                {project.title}
            </Highlight>
            <div className='flex md:flex-row flex-col '>

                {
                    project.video &&
                    <video src={project.video} controls className='md:w-[75vw] md:h-[75vh] m-5 md:m-8 bg-gray-400 rounded-lg' />
                }
                {
                    !project.video &&
                    <img
                        src={project.img}
                        alt={project.title}
                        className='bg-gray-400 rounded-lg m-auto mt-5 mb-5 md:w-[75vw] md:h-[75vh]'
                    />
                }

                <div className='flex flex-row justify-evenly mb-2 items-center md:flex-col'>
                    <ButtonX text="Linked In" link={project.LinkedLink} />
                    <ButtonX text="Github" link={project.link} />
                </div>
            </div>
            <div className='w-[100vw] flex flex-wrap md:flex-nowrap md:justify-evenly items-center'>
    {project.tech.map((tech, index) => (
        <WhatI
            key={index}
            desc={tech}
            bg={`${project.bg} border-2 dark:bg-gray-900 text-white bg-gray-600 mx-2 my-1`}
        />
    ))}
</div>

            <p className='text-slate-100 dark:text-gray-800 font-mono text-lg m-5'>{project.desc}</p>
            
        </div>
    );
}
