import { useState, useEffect, useCallback } from 'react';

const useIntersect = (targetRef, getSearchRepo, PAGE_NUMBER) => {
  const [page, setPage] = useState(PAGE_NUMBER);
  const [showList, setShowList] = useState([]);
  // console.log(getSearchRepo.slice(0, page));
  console.log(showList);
  const callback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting)
        setPage(getSearchRepo.length > page ? page + 10 : getSearchRepo.length);
    },
    [page],
  );
  useEffect(() => {
    if (Array.isArray(getSearchRepo)) {
      setShowList(getSearchRepo.slice(0, page));
    }
    if (!targetRef.current) return;
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });
    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [targetRef, callback]);
  // return showList;
  return showList;
};

export default useIntersect;
