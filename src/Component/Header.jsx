import React, { useState, useCallback } from 'react'
import { SideBar, Cross } from './SideBar';

export default function Header({ obj }) {
    const [sideBar, useSidebar] = useState(false);
    const [noIsCopy, usenoIsCopy] = useState(false);
    const onChangeBtn = (e) => {
        if (!sideBar) {
            useSidebar(true);
        }
        else {
            useSidebar(false);
        }
    }
    const copyNO = useCallback(() => {
        window.navigator.clipboard.writeText("7889775606")
        usenoIsCopy(true);
    },)

    return (
        <div className='bg-black dark:bg-gray-200 h-16 m-0 sticky p-4  top-[-1px] z-10 flex items-center justify-between '>
            <button
                className="dark:text-gray-950 m-0 relative top-[-3px]  text-white text-[6.5vh]"
                onClick={onChangeBtn}
            >
                &#8801;

            </button>
            {sideBar ? <div>
                <SideBar
                    bg='translate-x-[60vw] md:translate-x-[25vw]'
                />
                <Cross
                    bg='md:visible '
                    onclick={onChangeBtn} />
            </div>
                :
                <div>
                    <SideBar
                        bg='' />
                    <Cross
                        bg='md:invisible' />
                </div>
            }

            <button className="md:p-[3px] p-[1.8px]  md: right-24 md: absolute" onClick={copyNO} >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="md:px-8 md:py-2  px-6 py-1 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    {
                        noIsCopy ? <span class='md:text-[13px] text-[11px] '>Contact No is Copied</span> : <span >Contact Me</span>
                    }
                </div>
            </button>


            <div>
                {obj}
            </div>
        </div>
    )
}