import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleWidthChange = (event) => {
      setMatches(event.matches);
    };

    handleWidthChange(mediaQueryList);

    // Check for older browser
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change',handleWidthChange);
      return () => mediaQueryList.removeEventListener('change', handleWidthChange);
    } else {
      mediaQueryList.addListener(handleWidthChange);
      return () => mediaQueryList.removeListener(handleWidthChange);
    }
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;