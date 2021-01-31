import {useEffect, useState} from 'react';
import {breakpoints} from './breakpoints';

interface sizes {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<sizes>({
    width: 0,
    height: 0,
  });
  const isMobile = windowSize.width < breakpoints.small;
  const isDesktop = !isMobile;

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    windowSize,
    isMobile,
    isDesktop,
  };
};

export default useWindowSize;
