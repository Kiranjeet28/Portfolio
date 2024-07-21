import React from "react";
import Know from "./InnerComponents/Know";
import WhatI from "./InnerComponents/WhatI";
import { Frondend,Backend,Database } from "../Data";
import { GlareCard } from "../../utils/ui/glare-card";
export default function AllKnow() {
  
  return (

    <div className=" flex flex-wrap">
      {/* // For the fornt end  */}

      <Know
        title="Frontend"
        arr={Frondend.map((arr) => (
          <div key={arr.id}>
            {
              <GlareCard className="flex flex-col items-center justify-center">
              <WhatI
                desc={arr.name}
                bg={arr.bg} />
            </GlareCard>
            }
          </div>
        ))}
      />
      {/* ///Back end  */}
      <Know
        title="Backend"
        arr={Backend.map((arr) => (
          <div key={arr.id}>
            {
              <GlareCard >
                <WhatI
              desc={arr.name}
              bg={arr.bg} />
              </GlareCard>}
          </div>
        ))}
      />

      {/* // for the Others */}
      <Know
        title="Database"
        arr={Database.map((arr) => (
          <div key={arr.id}>
            {
              <GlareCard>
              <WhatI
              desc={arr.name}
              bg={arr.bg} />
              </GlareCard>}
          </div>
        ))}
      />

    </div>

  )
}