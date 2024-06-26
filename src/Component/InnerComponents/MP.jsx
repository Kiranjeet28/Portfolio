import React from 'react'

export default function MP({img,title,desc,link}){

    return(
        <a href={link} className=''>
         
             <div className={` border m-0 p-1 text-left  text-gray-300 flex flex-wrap    hover:bg-gray-200 hover:text-gray-900 dark:bg-gray-500 dark:text-gray-900 dark:hover:text-gray-300  transform-cpu  hover:skew-x-6 focus:bg-slate-600`}>
               <img src={img} className="h-[6vh] w-[12vw] mr-[10px] m-[2px] w-77 block md:w-[4vw]"alt="" />
            <div className='flex flex-col md:w-auto '>
                {/* title */}
                <p className='md:text-xl font-mono font-semibold h-auto w-auto '>{title}</p>
                <p className='text-[11px] md:text-[14px] font-mono w-auto  '>{desc}</p>
            </div>
      </div>
      
        </a>
     
    )
}