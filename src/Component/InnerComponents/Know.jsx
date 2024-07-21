import React from "react";
export default function Know({title ,arr}){
    return(
        <div className={`w-72 p-5 m-auto mb-5  md:mt-0 rounded-lg bg-gray-700 dark:bg-gray-900  `}>
            <section className="text-gray-200 text-left text-lg font-semibold dark:text-slate-100 mb-4 ">{title}</section>
            <div className="flex flex-wrap">
                {arr}
            </div>
        </div>
        
    )
}