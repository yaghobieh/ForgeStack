import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '@utils/scroll';

/** Smooth-scrolls to the section matching the URL hash whenever it changes. */
export const useHashScroll = (): void => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scrollToSection(location.hash.slice(1));
    }
  }, [location.hash]);
};
