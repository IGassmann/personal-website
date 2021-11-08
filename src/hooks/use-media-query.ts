import { useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleWidthChange = (mediaQueryListEventOrMediaQueryList: MediaQueryListEvent | MediaQueryList) => {
      setMatches(mediaQueryListEventOrMediaQueryList.matches);
    };

    const mediaQueryList = window.matchMedia(query);
    handleWidthChange(mediaQueryList);

    mediaQueryList.addEventListener('change', handleWidthChange);
    return () => mediaQueryList.removeEventListener('change', handleWidthChange);

  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
