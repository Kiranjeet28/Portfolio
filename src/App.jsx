
import AllKnow from './Component/AllKnow';
import MoreP from './Component/MoreP';
import MP from './Component/InnerComponents/MP';
import { MParr } from './Data';
import MajorProject from './Component/MajorProject';
import 'aos/dist/aos.css';
import Banner from './Component/Banner';
import TypingAnimation from '../utils/ui/TypingAnimation';
import ExpComponents from './Component/ExpComponents';

function App() {
 

  return (
  
      <div className=''>
   <Banner />
        
       
       {/* Major Project */}
       <TypingAnimation
      className="text-gray-100 ml-7 font-bold mt-3 p-3 pb-0 text-left  text-2xl mb-2 dark:text-gray-800 "
      text="Major Projects"
    />
      <MajorProject/>
      {/* What I know  */}
      <p 
      className='text-gray-200 ml-7 font-semibold mt-8 p-3 pb-0 text-left  text-xl mb-2 dark:text-gray-800  md:mb-4 '
      data-aos='zoom-out-right'
      data-aos-duration='500'>
         What I Know
      </p>
      <AllKnow />

      <p 
      className='text-gray-200 ml-7 font-semibold mt-8 p-3 pb-0 text-left  text-xl mb-2 dark:text-gray-800  md:mb-4 '
      data-aos='zoom-out-right'
      data-aos-duration='500'>
         Experience
      </p>
<ExpComponents/>
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
