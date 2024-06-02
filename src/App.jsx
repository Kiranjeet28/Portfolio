import { useState, useEffect } from 'react';
import Header from './Component/Header';
import Banner from './Component/Banner';
import MajorComp from './Component/InnerComponents/MajorComp';
import AllKnow from './Component/AllKnow';
import MoreP from './Component/MoreP';
import MP from './Component/InnerComponents/MP';
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './Component/ThemeBtn';
import { FlipWords } from './Component/ui/flip-words';

// Object
const MParr = [
  {
    id: 5,
    title: 'Amazon UI clone',
    img: 'https://ugc.production.linktr.ee/nYuEg7UcT6y5EmMuQoF6_DD80DC7B-C40D-4444-A3F6-E0D8FA14B64A.jpeg',
    desc: 'HTML, CSS & JS',
    Link: 'https://github.com/Kiranjeet28/Amazon-Clone'
  },
  {
    id: 1,
    title: 'ATM Machine with Java',
    img: 'https://th.bing.com/th/id/OIP.Cigr715c0OWRmSRLuczm8QHaHa?rs=1&pid=ImgDetMain',
    desc: 'Java(Hashmap)',
    Link: 'https://github.com/Kiranjeet28/ATM-with-Java'
  },
  {
    id: 2,
    title: 'Employee Management System',
    img: 'https://th.bing.com/th/id/OIP.E6EMy8EyJeOKudi2Z0YK0wHaFP?rs=1&pid=ImgDetMain',
    desc: 'Java, Swing & AWT, Maven , MySQL',
    Link: 'https://github.com/Kiranjeet28/Java-Employee-Management-system-with-SQL-with-UI-Swing-and-AWT-.git'
  },
  {
    id: 3,
    title: 'Quiz Game',
    img: 'https://thumbs.dreamstime.com/b/black-thin-line-quiz-logo-concept-tv-show-support-faq-vote-query-forum-who-issue-knowledge-verification-flat-style-trend-modern-98154324.jpg',
    desc: 'Java , AWT & Swing',
    Link: 'https://github.com/Kiranjeet28/Quiz_hmap'
  },
  {
    id: 4,
    title: 'JK Polytechnic Hub',
    img: 'https://kiranjeet28.github.io/JK_Polytechnic_Hub/image/logo.jpg',
    desc: 'HTML,JS,CSS',
    Link: 'https://kiranjeet28.github.io/JK_Polytechnic_Hub/'
  }
];

let words = ["Java ", "Web Development" ]

function App() {
  // Toggle
  const [themeMode, setThemeMode] = useState('light');

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
        <p className='text-gray-200 font-semibold m-2 ml-7 p-3 pb-0 mb-0 text-left  text-2xl  dark:text-gray-800 '> Full Stack <FlipWords words = {words}  /> Projects</p>
        {/*  Major projects  */}
        <div className='flex flex-wrap '>
          <MajorComp
            img='https://2.bp.blogspot.com/-NnVlV6FjZAg/UUVFCETnqMI/AAAAAAAAAGs/m6tSKlUyUXw/s1600/hide-your-private-files-and-folders.jpg'
            title="File Hiding"
            desc="Java FrontEnd: Swing & AWT Backend: MySQL"
            link="https://github.com/Kiranjeet28/Java-File-Hiding-with-SQL-DB"
          />
          <MajorComp
            img='https://th.bing.com/th/id/OIP.r4kJoxYZN2_2tQjUdRdtkQHaGF?rs=1&pid=ImgDetMain'
            title="Youtube Clone"
            desc="React ,Appwrite, MongoDB, NodeJS, Express,Tailwind Css ,OAuth "
            link="https://github.com/Kiranjeet28/Youtube-clone"
          />
          <MajorComp
            img='https://th.bing.com/th/id/OIP.DVs962k6ELUYdurULbV_fQHaHX?rs=1&pid=ImgDetMain'
            title="Quiz Application with OTP Authentication "
            desc="Java , Maven plugin , MySQL ,Auth, MicroServices  "
            link="https://github.com/Kiranjeet28/Quiz-application-with-Authentication-"
          />
        </div>
      
      {/* What I know  */}
      <p className='text-gray-200 ml-7 font-semibold mt-8 p-3 pb-0 text-left  text-xl mb-2 dark:text-gray-800  md:mb-4 '> What I Know</p>
      <AllKnow />

      <div className= 'w-[100vw] flex justify-center items-center'>
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
