import React, { useState,useCallback } from 'react'
import  {SideBar, Cross } from './SideBar';

export default function Header({obj}){
    const [sideBar, useSidebar] = useState(false);
    const [noIsCopy,usenoIsCopy] = useState(false);
    const onChangeBtn = (e) => {
        if(!sideBar){
            useSidebar(true);
        }
        else{
            useSidebar(false);
        }
    }
    const copyNO = useCallback(()=>{
        window.navigator.clipboard.writeText("7889775606")
        usenoIsCopy(true);
      },)
  
    return(
    <div className='bg-black dark:bg-gray-200 h-16 m-0 sticky p-4  top-[-1px] z-10 flex items-center justify-between '>
            <button 
            className="dark:text-gray-950 m-0 relative top-[-3px]  text-white text-[6.5vh]"
            onClick={onChangeBtn}
           >
                &#8801;
            
            </button>
            {sideBar?<div>
                        <SideBar
                            bg= 'translate-x-[60vw] md:translate-x-[25vw]'
                        />
                        <Cross
                           bg='md:visible '
                           onclick ={onChangeBtn}/>
                        </div>
                        :
                        <div>
                             <SideBar 
                                bg= ''/>
                            <Cross
                                 bg='md:invisible' />
                        </div>
                   }
            
        <button className='bg-green-500 text-center  hover:bg-green-400 rounded-sm h-10 hover:text-gray-700 text-white w-32 md: right-24 md: absolute' onClick={copyNO}> 
        {
            noIsCopy?<span class='md:text-[13px] text-[10px] '>Contact No is Copied</span>: <span >Contact Us </span>
        }
        </button>
        
        
        <div>
           {obj}
        </div>
    </div>
    )
}