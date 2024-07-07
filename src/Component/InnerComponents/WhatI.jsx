import React from "react";
export default function WhatI({desc ,bg }){
    return(
         <div className={`rounded-lg p-2 md:text-[16px] w-max text-white ${bg} border text-sm`} >  
            {desc}
            
        </div>
        
    )
}