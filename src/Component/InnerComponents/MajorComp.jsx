import React from 'react'
import { BackgroundGradient } from '../ui/background-gradient'
export default function MajorComp({ img, title, desc, link }) {

    return (
        <a href={link} className='p-0 m-auto mt-6'>
                <BackgroundGradient>
                <div className=' w-72   bg-white  dark:hover:bg-gray-800  dark:bg-gray-900 dark:text-gray-100 shadow-black  rounded-lg hover:bg-gray-300  hover:transform-cpu hover:scale-90'>
                    <section className=' '>

                        <img src={img}
                            className='h-32 w-72 rounded-t-lg'
                            alt="" />
                    </section >
                    <section
                        className='p-4 text-start '>
                        <div className='m-0 font-bold text-lg'>{title}</div>
                        <p className='text-sm'>{desc}</p>
                    </section>
                </div>
            </BackgroundGradient >
            </a>
            )
}