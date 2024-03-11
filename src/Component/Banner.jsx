import React from 'react'
import { useState,useEffect } from 'react'
import img from '../assets/IMG-20240102-WA0056.jpg'
export default function Banner(){
    const [data,useData]= useState([])
    useEffect(()=>{

        fetch('https://api.github.com/users/kiranjeet28')
        .then(response=>response.json())
        .then(data=>{
            useData(data)
            
        })
    },[])
    return(
        // Add the different images for the medium and sm in it leter and add the twitter and linkedn Image
        <div className=' dark:bg-black bg-gray-200  p-4 h-auto flex flex-col md:flex-wrap md:bg-no-repeat md:bg-cover md:bg-bg'>
          <div className='flex md:flex-col '>
                <img src={data.avatar_url} className=" rounded-[50%] p-0 m-0 h-28 md: max-w-48 md:relative md:self-center md:bottom-[-40px]" alt="Git D.p" />

                <div className='p-0 m-0  text-center' >
                    <div className='text-black bold text-2xl font-bold font-mono p-0 m-0 md:relative md:bottom-32 md:text-3xl md:m-3  dark:text-white md:text-black md:dark:text-black'>Kiranjeet Kour</div>
                    <p className=" text-black text-[10px] p-0 m-0 pb-2 md:text-[15px] md:font-semibold shadow-black dark:text-white md:dark:text-black ">{data.bio}</p>

                </div>
          </div>
         
          <div className='flex justify-evenly'>
            <a href="https://github.com/kiranjeet28">
               <img src='https://cdn-1.webcatalog.io/catalog/github/github-icon.png' alt="" className='h-7 rounded-md '/>
            </a>
            <a href="www.linkedin.com/in/kiranjeet-kour-3823ba268"> 
            <img src='https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png' alt="" className='h-7 rounded-md '/>
            </a>
            <a href="https://twitter.com/KourSuri5352"> 
            <img src="https://th.bing.com/th/id/OIP.PjG-Z-6wXH8l-9kLJKLdqgAAAA?rs=1&pid=ImgDetMain" alt="" className='h-7 rounded-md '/>
            </a>
          </div>
        
          </div>
    )
}