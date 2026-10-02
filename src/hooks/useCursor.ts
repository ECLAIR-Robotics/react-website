import { useEffect, useRef } from 'react';

/**
 * Wires up the custom magenta cursor + lagging ring.
 * Attach cursor div IDs: #cursor and #cursor-ring to your layout.
 */
export function useCursor() {
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursor-ring');
    if (!cursor || !ring) return;

    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top  = `${e.clientY}px`;
    };

    const animRing = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      ring.style.left = `${rx.current}px`;
      ring.style.top  = `${ry.current}px`;
      rafId.current = requestAnimationFrame(animRing);
    };

    const onEnter = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2.2)';
      ring.style.opacity = '0';
    };

    const onLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.opacity = '1';
    };

    document.addEventListener('mousemove', onMove);
    rafId.current = requestAnimationFrame(animRing);

    // Expand on interactive elements
    const interactives = document.querySelectorAll('a, button');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);
}
