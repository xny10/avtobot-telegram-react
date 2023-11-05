import { useEffect, useRef } from 'react';

export function useTelegramScrollLock(offset = 10) {
  const scrollableRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.position = 'relative';
      contentRef.current.style.top = `${offset}px`;
    }
    window.scroll({
      top: offset,
    });

    const handler = (e: Event) => {
      if (window.scrollY < offset) {
        e.preventDefault();
        e.stopPropagation();
        window.scroll({
          top: offset,
        });
      }
    };

    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return {
    scrollableRef,
    contentRef,
  };
}
