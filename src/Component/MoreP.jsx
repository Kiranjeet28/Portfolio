import React from 'react'

export default function MoreP({arr}){
    
    
    return(
         <div id='morep' className=' bg-gray-900 mt-2  dark:bg-gray-500 m-auto w-72 md:w-[90vw] mb-10 p-19 dark: ' >
            <p className='text-gray-200 ml-2 font-bold mt-8 p-3 pb-0  text-left  text-xl mb-2 md:text-[4vh] md:mb-4 md:text-center dark:text-gray-100 '>More Project</p>
            <div className='flex flex-col md:flex-wrap dark:bg-gray-800'>
              {arr}
            </div>
        </div>
    )
}
// bg,img,title,desc