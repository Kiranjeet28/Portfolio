import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Experience from "./InnerComponents/Expericence"; // Corrected the component name
import { Exp } from "../Data";

export default function ExpComponents() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Animation will happen only once
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      {Exp.map((item, index) => (
        <div
          key={item.id}
          data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} // Alternates animation
          data-aos-duration='1000'
          className='w-full md:w-1/3 mb-5' // Adjust width and spacing as needed
        >
          <Experience
            Companyname={item.Companyname}
            Status={item.Status}
            imgLink={item.imgLink}
            link={item.link}
          />
        </div>
      ))}
    </div>
  );
}
