import { useState, useEffect } from 'react';
import Header from './Component/Header';
import Banner from './Component/Banner';
import AllKnow from './Component/AllKnow';
import MoreP from './Component/MoreP';
import MP from './Component/InnerComponents/MP';
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './Component/ThemeBtn';
import { MParr, MajorText } from './Data';
import MajorProject from './Component/MajorProject';
import { TypewriterEffectSmooth } from './Component/ui/typewriter-effect';

function App() {
  // Toggle
  const [themeMode, setThemeMode] = useState('dark');

  const lightTheme = () => {
    setThemeMode('light');
  };

  const darkTheme = () => {
    setThemeMode('dark');
  };

  // Actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className='pb-10 m-0 w-min-full  bg-black dark:bg-gray-200'>
        <Header obj={<ThemeBtn />} />
        <Banner />
       
       {/* Major Project */}
       <TypewriterEffectSmooth
       className='ml-6 md:ml-8 mt-4 mb-0' words={MajorText} />
      <MajorProject/>
      {/* What I know  */}
      <p className='text-gray-200 ml-7 font-semibold mt-8 p-3 pb-0 text-left  text-xl mb-2 dark:text-gray-800  md:mb-4 '> What I Know</p>
      <AllKnow />

      <div className= ''>
      <p className='text-gray-200 ml-7 font-semibold mt-8 p-3 pb-0 text-left  text-xl mb-2 dark:text-gray-800  md:mb-4 '> More Projects</p>
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
    </ThemeProvider>
  );
}

export default App;
