import { useEffect } from 'react';

/**
 * Attaches IntersectionObserver to all .reveal elements on the page.
 * Call once per page component in a useEffect.
 */
export function useReveal() {
  useEffect(() => {
    document.body.classList.add('js-loaded');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
