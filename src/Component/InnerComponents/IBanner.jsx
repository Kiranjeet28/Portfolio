import React, { useState, useEffect } from 'react';

export default function IBanner(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/kiranjeet28')
        .then(response => response.json())
        .then(data => {
            setData(data);
        });
    }, []);

    return (
        <div className=' p-4 h-auto flex flex-col md:flex-wrap md:bg-no-repeat md:bg-cover md:bg-bg'>
            <div className='flex md:flex-col '>
                <img
                    src={data.avatar_url}
                    className="rounded-[50%] p-0 m-0 h-28 md:max-w-48 md:relative md:self-center md:bottom-[-40px]"
                    alt="Git D.p"
                />
                <div className='p-0 m-0 text-center'>
                    <div className=' bold text-2xl font-bold font-mono p-0 m-0 md:relative md:bottom-32 md:text-3xl md:m-3 text-white md:text-black md:dark:text-black dark:text-black'>Kiranjeet Kour</div>
                        <p className=" text-[11px] p-0 m-0 pb-2 md:text-[17px] md:font-semibold font-bold dark:text-black shadow-black text-white md:text-black overflow">{data.bio}</p>
                </div>
            </div>
            <div className='flex justify-evenly'>
                <a href="https://github.com/kiranjeet28">
                    <img src='https://cdn-1.webcatalog.io/catalog/github/github-icon.png' alt="" className='h-[4vh] rounded-md' />
                </a>
                <a href="https://www.linkedin.com/in/kiranjeet-kour-3823ba268">
                    <img src={'https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png'} alt="" className='h-[4vh] rounded-md' />
                </a>
                <a href="https://twitter.com/KourSuri5352">
                    <img src={'https://th.bing.com/th/id/OIP.PjG-Z-6wXH8l-9kLJKLdqgAAAA?rs=1&pid=ImgDetMain'} alt="" className='h-[3vh] rounded-md' />
                </a>
                <a href="mailto:kiranjeetkour144@gmail.com">
                    <img src={'https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png'} alt="" className='h-[3vh] rounded-md' />
                </a>
            </div>
        </div>
    );
}