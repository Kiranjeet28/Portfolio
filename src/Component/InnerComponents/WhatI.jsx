import React from "react";
export default function WhatI({desc ,bg }){
    return(
         <div className={`rounded-lg bg-gray-900 p-1 m-1 w-max text-white ${bg} border text-sm   hover:bg-gray-200 hover:text-black font-mono dark:bg-bg-gray-200  dark:hover: text-white   dark:hover:bg-gray-200`}>
            {desc}
            
        </div>
        
    )
}