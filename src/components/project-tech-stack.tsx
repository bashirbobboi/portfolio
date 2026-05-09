'use client';

import * as React from 'react';

export type ProjectTechItem = {
  src: string;
  label: string;
  whiteBg?: boolean;
  blackBg?: boolean;
  contain?: boolean;
  bg?: string;
  rotate: number;
};

export function ProjectTechStack({ items }: { items: ProjectTechItem[] }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia('(max-width: 1023px)');
    if (!mq.matches) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-inview={inView}
      className="group/pstack flex flex-wrap items-start gap-y-2"
    >
      {items.map((it, i) => (
        <div
          key={i}
          style={
            {
              '--r': `${it.rotate}deg`,
              zIndex: items.length - i,
            } as React.CSSProperties
          }
          className={`flex flex-col items-center gap-1 shrink-0 transition-all duration-300 rotate-[var(--r)] group-hover/pstack:rotate-0 group-data-[inview=true]/pstack:rotate-0 ${
            i === 0
              ? ''
              : '-ml-2 group-hover/pstack:ml-2 group-data-[inview=true]/pstack:ml-2'
          }`}
        >
          <img
            loading="lazy"
            src={it.src}
            alt={it.label}
            className={`w-10 h-10 rounded-sm shadow-md block ${
              it.contain ? 'object-contain' : 'object-cover'
            }${it.whiteBg ? ' bg-white p-0.5' : ''}${
              it.blackBg ? ' bg-black p-0.5' : ''
            }${it.bg ? ` ${it.bg}` : ''}`}
          />
          <span className="text-[9px] text-zinc-700 text-center max-w-[60px] leading-tight opacity-0 group-hover/pstack:opacity-100 group-data-[inview=true]/pstack:opacity-100 transition-opacity duration-300">
            {it.label}
          </span>
        </div>
      ))}
    </div>
  );
}
