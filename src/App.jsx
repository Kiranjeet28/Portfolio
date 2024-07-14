
import AllKnow from './Component/AllKnow';
import MoreP from './Component/MoreP';
import MP from './Component/InnerComponents/MP';
import { MParr, MajorText } from './Data';
import MajorProject from './Component/MajorProject';
import { TypewriterEffectSmooth } from './Component/ui/typewriter-effect';
import 'aos/dist/aos.css';
import Banner from './Component/Banner';
function App() {
 

  return (
  
      <div className=''>
   <Banner />
        
       
       {/* Major Project */}
       <TypewriterEffectSmooth
       className='ml-6 md:ml-8 mt-4 mb-0' words={MajorText} />
      <MajorProject/>
      {/* What I know  */}
      <p 
      className='text-gray-200 ml-7 font-semibold mt-8 p-3 pb-0 text-left  text-xl mb-2 dark:text-gray-800  md:mb-4 '
      data-aos='zoom-out-right'
      data-aos-duration='500'>
         What I Know
      </p>
      <AllKnow />

      <div className= ''>
      <p 
      className='text-gray-200 ml-7 font-semibold mt-8 p-3 pb-0 text-left  text-xl mb-2 dark:text-gray-800  md:mb-4 '
      data-aos='zoom-out-right'
      data-aos-duration='500'>
         More Projects
      </p>
      <MoreP
        arr={MParr.map((arr) => (
          <div key={arr.id}>
            {<MP
              img={arr.img}
              desc={arr.desc}
              title={arr.title}
              link={arr.Link}
            />}
          </div>
        ))}
      />
      </div>
      </div>
  );
}

export default App;
