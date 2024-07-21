
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './Component/ThemeBtn';
import Header from './Component/Header';

function Layout() {
 
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

  return( 
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
    <div className="pb-10 m-0 w-min-full  bg-black dark:bg-gray-200">
   <Header obj={<ThemeBtn />} />
   <Outlet/>
    </div>
    </ThemeProvider>
)
}

export default Layout;