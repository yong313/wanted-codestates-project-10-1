import { useState, useEffect, useCallback } from 'react';

const useIntersect = (targetRef, getSerchRepo, PAGE_NUMBER) => {
  const [page, setPage] = useState(PAGE_NUMBER);
  const showList = getSerchRepo.slice(0, page);
  console.log(showList);
  const callback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) setPage(page + 10);
    },
    [page],
  );
  useEffect(() => {
    if (!targetRef.current) return;
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });
    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [targetRef, callback]);
  return showList;
};

export default useIntersect;
