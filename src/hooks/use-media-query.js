import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleWidthChange = (event) => {
      setMatches(event.matches);
    };

    handleWidthChange(mediaQueryList);

    mediaQueryList.addEventListener('change',handleWidthChange);

    return () => mediaQueryList.removeEventListener('change', handleWidthChange);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;