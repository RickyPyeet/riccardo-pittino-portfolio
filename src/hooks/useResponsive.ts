import { useEffect, useState } from 'react';

export type ScreenSize = 'mobile' | 'tablet' | 'desktop';

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenSize: ScreenSize;
  width: number;
}

function getScreenState(width: number): ResponsiveState {
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1200;
  const isDesktop = width >= 1200;

  let screenSize: ScreenSize = 'mobile';
  if (isDesktop) {
    screenSize = 'desktop';
  } else if (isTablet) {
    screenSize = 'tablet';
  }

  return { isMobile, isTablet, isDesktop, screenSize, width };
}

export function useResponsive(): ResponsiveState {
  const [state, setState] = useState<ResponsiveState>(() => {
    if (typeof window === 'undefined') {
      return getScreenState(1200);
    }

    return getScreenState(window.innerWidth);
  });

  useEffect(() => {
    const handleResize = () => {
      setState(getScreenState(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return state;
}
