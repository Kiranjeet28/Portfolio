import React from "react";
import cv from "../../public/CV.pdf"
import resume from "../../public/Resume.pdf"
export  function SideBar({bg}){
    const classOfList = 'text-gray-200   h-10 text-[12px]  border-t  border-gray-200  dark:text-gray-900 dark:border-gray-900  hover:bg-gray-300 hover:text-gray-900  dark:hover:bg-gray-800 dark:hover:text-gray-100 md:text-xl font-semibold   p-2 font-mono  md:p-4'
    return(
        <div className="h-auto w-auto" id="Sidebar">
            <div  className={`z-2 h-[100vh] top-16  md:top-0 transition-transform duration-200   absolute md:w-[25vw] md:left-[-25vw] left-[-60vw] ${bg} bg-black dark:bg-gray-200 w-[60vw] flex flex-col`}>
                <div  className="text-gray-200 dark:text-gray-900  dark:border-gray-900 font-bold md:text-2xl font-mono text-center p-[10px]">Links</div>
                <div className=" flex flex-col">
                    <a href="https://github.com/kiranjeet28" className={classOfList}><div className=" ">Github</div></a>
                    <a href="https://www.linkedin.com/in/kiranjeet-kour-3823ba268/" className=""><div className={classOfList}>Linkedin</div></a>
                    <a href="https://www.instagram.com/kiranjeetkour2024/" className=""><div className={classOfList}>Instagram</div></a>
                    <a href="https://twitter.com/KourSuri5352" className=""><div className={classOfList}>Twitter</div></a>
                     <a href={cv} className=""><div className={classOfList}>CV</div></a>
                    <a href={resume} ><div className={`border-b ${classOfList}`}>Resume</div></a>
                    
                </div>
        </div>
        
        </div>
        
        
    )
}

export function Cross({bg,onclick}){
    return(
        <div className={`h-auto w-5 ${bg} relative md:left-[-21vw] invisible shadow-lg font-bold text-white md:text-xl top-[-1vh] dark:text-black`}
        onClick={onclick}>X</div>
    )
}
