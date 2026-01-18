import { useEffect, useRef, useState } from 'react';

const Topbar: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const lastScroll = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return; // mobile = CSS-only sticky behavior

    lastScroll.current = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const heroHeight = hero.offsetHeight;

      // Accessibility: do not hide if keyboard focus is inside
      if (hero.contains(document.activeElement)) return;

      if (current > lastScroll.current && current > heroHeight) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll.current = current;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={heroRef}
      role="banner"
      aria-hidden={hidden}
      className={`hero ${hidden ? 'is-hidden' : ''}`}
    >
      <h1>Big Accessible Hero</h1>
    </header>
  );
};

export default Topbar;
