

import { CardBody, CardContainer, CardItem } from "../../../utils/ui/3d-card";

export default function Expericence({Companyname,Status,imgLink,link}){
  return (
    <CardContainer className="inter-var w-64 m-auto equal-height md:mb-0 mb-7">
      <CardBody className="bg-gray-700 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] w-60 sm:w-[30rem] h-auto rounded-xl p-6 border  items-center flex flex-col  ">
        <CardItem
          translateZ="50"
          className="text-[23px] font-serif font-bold text-slate-200 dark:text-white"
        >
         {Companyname}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-slate-100 text-sm w-auto md:w-60  mt-2 dark:text-neutral-300 font-semibold"
        >
          {Status}
        </CardItem>
        <CardItem translateZ="100" className="w-auto md:w-60  mt-4">
          <img
          src={imgLink}
            height="500"
            width="500"
            className="h-auto w-auto md:w-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem>
          <a href={link} >
          <button className="p-[3px] relative mt-3" >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                  Vist
                </div>
            </button></a>
      
        </CardItem>
    
      </CardBody>
    </CardContainer>
  );
}
// 
// 