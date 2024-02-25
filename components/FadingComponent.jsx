import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const FadingComponent = ({ image }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isZIndexVisible, setIsZIndexVisible] = useState(true);

  useEffect(() => {
    // Hide the component after 1 second
    const timerOpacity = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    // Show the component after opacity transition completes (1 second delay)
    const timerZIndex = setTimeout(() => {
      setIsZIndexVisible(false);
    }, 2500);

    // Cleanup timers to avoid memory leaks
    return () => {
      clearTimeout(timerOpacity);
      clearTimeout(timerZIndex);
    };
  }, []);

  return (
    <div className={`flex justify-center items-center w-full h-full fixed top-0 left-0 ${isZIndexVisible ? 'z-50' : 'z-2'} transition-opacity duration-[1.5s] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Image
        src={image}
        alt="Fading Image"
        width={897} // Adjust the width as needed
        height={1167} // Adjust the height as needed
      />
    </div>
  );
};

export default FadingComponent;
