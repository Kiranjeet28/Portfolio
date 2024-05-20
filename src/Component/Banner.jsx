import React, { useState, useEffect } from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import IBanner from './InnerComponents/IBanner';

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
            <BackgroundGradientAnimation>
                <IBanner />
            </BackgroundGradientAnimation>
        ) : (
            <IBanner />
        )}
    </div>
    );    
}
