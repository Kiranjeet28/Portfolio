import { useState, useEffect } from 'react';
import IBanner from './InnerComponents/IBanner';
import { SparklesCore } from '../../utils/ui/sparkles';
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
            <div>

            <div className=" absolute inset-0 h-60">
                
                                <SparklesCore
                                id="tsparticlesfullpage"
                                background="transparent"
                                minSize={0.10}
                                maxSize={2.4}
                                particleDensity={200}
                                className="w-full h-full"
                                particleColor="#696ef2"
                                />
                            </div>
                                    <IBanner />
                                </div>
        ) : (
            <IBanner />
        )}
    </div>
    );    
}
