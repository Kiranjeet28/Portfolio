import React from "react";
import Know from "./InnerComponents/Know";
import WhatI from "./InnerComponents/WhatI";
export default function AllKnow(){
    const Frondend= [{
        id:1,
        name: "HTML",
        bg:""
      },
      {
        id:3,
        name: "CSS",
        bg:"border-white"
    
      },
      {
        id:2,
        name: "JavaScript",
        bg:"border-yellow-200"
    
      },
      {
        id:4,
        name: "React JS",
        bg:"border-blue-500"
    
      },
      {
        id:5,
        name: "Tailwind",
        bg:"border-red-700"
    
      },
      {
        id:6,
        name: "TypeScript",
        bg:"border-blue-700"
      },
      {
        id:7,
        name: "Next Js ",
        bg:"border-blue-900"
      }]

      // Backend array 
      const Backend =[
        {
          id: 1,
          name:"Java",
          bg:"border-green-500"
        },
        {
          id: 2,
          name:"Node JS",
          bg:"border-orange-600"
        },
        {
          id: 3,
          name:"Express",
          bg:"border-blue-600"
        }
      ]
      // Database
      const Database =[
        {
          id:1,
          name: "MySQL",
          bg :"border-green-700"
        },
        {
          id:2,
          name: "MongoDB",
          bg :"border-blue-500"
        }
      ]
    return(

        <div className=" flex flex-wrap">
        {/* // For the fornt end  */}

       <Know 
        title="Frontend"
        arr={Frondend.map((arr) => (
        <div key={arr.id}>
            {<WhatI
            desc ={arr.name }
            bg= {arr.bg}/>}
        </div>
        ))}
      />
      {/* ///Back end  */}
      <Know 
        title="Backend"
        arr={Backend.map((arr) => (
        <div key={arr.id}>
            {<WhatI
            desc ={arr.name }
            bg= {arr.bg}/>}
        </div>
        ))}
      />

{/* // for the Others */}
    <Know 
        title="Database"
        arr={Database.map((arr) => (
        <div key={arr.id}>
            {<WhatI
            desc ={arr.name }
            bg= {arr.bg}/>}
        </div>
        ))}
      />

</div>
      
    )
}