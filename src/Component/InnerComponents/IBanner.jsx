import {  useEffect } from 'react';
import { FlipWords } from '../../../utils/ui/flip-words';
import { Highlight } from '../../../utils/ui/hero-highlight';
import AOS from "aos";
import 'aos/dist/aos.css';
// import FlippingCoin from './CoinFlip';
import image from '../../assets/myimg.jpeg' 

export default function IBanner() {
    let words = ["Java", "Web"];
    // const [isFlipped, setIsFlipped] = useState(false); // Flag to track flip state
  
    useEffect(() => {
      AOS.init({
      once: true,

      });
    }, []);
  
    // const handleFlip = () => {
    //   if (!isFlipped) {
    //     setIsFlipped(true); // Set flipped flag to true before animation
    //   }
    // };

    return (
        <div className='z-30 p-4 h-auto flex flex-col md:flex-wrap md:bg-no-repeat md:bg-cover md:bg-bg'>
            <div className='flex md:flex-col '>
                {/* <div className="rounded-[50%] p-0 m-0 md:mt-2  md:h-[21vh] h-28 md:max-w-48 md:relative md:self-center md:bottom-[-40px]   ">
                <FlippingCoin imageUrl={image} onFlip={handleFlip} /> 

                </div> */}
                <img
                    data-aos='zoom-in'
                    data-aos-duration='2000'
                    src={image}
                    className="rounded-[50%] p-0 m-0 md:mt-2  md:h-[21vh] h-28 md:max-w-48 md:relative md:self-center md:bottom-[-40px]   "
                    alt=""
                />
                <div className='p-0 md:mt-4  text-center'>
                    <Highlight className=' bold  text-2xl font-bold font-mono p-0 m-0 md:relative md:bottom-40 md:text-4xl  md:m-3  text-slate-100 '>Kiranjeet Kour </Highlight>

                    <div className='flex flex-row items-center justify-center text-[16px] p-1 m-0 pb-2 md:text-[25px] md:mt-0 mt-4 md:font-semibold font-bold dark:text-black shadow-black text-gray-100 md:text-black overflow md:ml-0 ml-3  '>
                    <h3 className=" ">Full&nbsp;   
                     </h3>
                     <h3 className=" ">Stack 
                     </h3>
                     <FlipWords className=' from-indigo-500 rounded-xl h-7 md:h-10 md:w-14 font-bold via-indigo-400 to-indigo-700 bg-gradient-to-tr w-12 text-center text-white text-[17px] md:text-[24px] md:m-1 my-0 mx-1' words={words} /> 
                     <h3 className="  ">Developer</h3> 
                    </div>
                   
                   
                </div>
            </div>
            <div className='flex justify-evenly'>
                <a href="https://github.com/kiranjeet28">
                    <img src='https://cdn-1.webcatalog.io/catalog/github/github-icon.png' alt="" className='md:h-[4.5vh] h-[3.8vh] rounded-md' />
                </a>
                <a href="https://www.linkedin.com/in/kiranjeet-kour-3823ba268">
                    <img src={'https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png'} alt="" className='md:h-[4.5vh] h-[3.5vh] rounded-md' />
                </a>
                <a href="https://twitter.com/KourSuri5352">
                    <img src={'https://th.bing.com/th/id/OIP.PjG-Z-6wXH8l-9kLJKLdqgAAAA?rs=1&pid=ImgDetMain'} alt="" className='md:h-[3.5vh] h-[3vh] rounded-md' />
                </a>
                <a href="mailto:kiranjeetkour144@gmail.com">
                    <img src={'https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png'} alt="" className='md:h-[3.5vh] h-[3vh]  w-[8vw] md:w-auto rounded-md bg-black ' />
                </a>
            </div>
        </div>
    );
}