import { useState, useEffect } from 'react';
import IBanner from './InnerComponents/IBanner';
import { BackgroundGradient } from './ui/background-gradient';
export default function Banner() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 771); // Change threshold as needed
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    return (
        <div>
        {isSmallScreen ? (
             <BackgroundGradient
             backgroundColor="black"
             baseHue={190}
             rangeY={40}
           >
                <IBanner />
            </BackgroundGradient>
        ) : (
            <IBanner />
        )}
    </div>
    );    
}
