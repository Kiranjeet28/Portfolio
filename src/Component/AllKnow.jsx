import Know from "./InnerComponents/Know";
import WhatI from "./InnerComponents/WhatI";
import { Frondend, Backend, Database } from "../Data";
export default function AllKnow() {

  return (

    <div className=" flex flex-wrap">
      {/* // For the fornt end  */}

      <Know
        title="Frontend"
        arr={Frondend.map((arr) => (
          <div key={arr.id}>
            {
              <WhatI
                desc={arr.name}
                bg={arr.bg} />
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
              <WhatI
                desc={arr.name}
                bg={arr.bg} />
            }
          </div>
        ))}
      />

      {/* // for the Others */}
      <Know
        title="Database"
        arr={Database.map((arr) => (
          <div key={arr.id}>
            {
              <WhatI
                desc={arr.name}
                bg={arr.bg} />
            }
          </div>
        ))}
      />

    </div>

  )
}