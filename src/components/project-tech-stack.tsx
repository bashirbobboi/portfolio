'use client';

import * as React from 'react';

export type ProjectTechItem = {
  src: string;
  label: string;
  subtitle?: string;
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
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-inview={inView}
      className="group/pstack flex flex-wrap lg:flex-nowrap items-start gap-y-2 lg:gap-y-0"
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
          className={`group/item relative flex flex-col items-center gap-1 shrink-0 transition-all duration-300 rotate-[var(--r)] group-hover/pstack:rotate-0 group-data-[inview=true]/pstack:rotate-0 ${
            i === 0
              ? ''
              : '-ml-2 group-hover/pstack:ml-2 group-data-[inview=true]/pstack:ml-2'
          }`}
        >
          {/* Desktop tooltip above icon */}
          <div className="hidden lg:flex flex-col items-center gap-0.5 absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-zinc-800 text-white rounded-xl px-3 py-1.5 shadow-md pointer-events-none opacity-0 lg:group-hover/item:opacity-100 transition-opacity duration-200 z-50">
            <span className="text-xs font-medium">{it.label}</span>
            {it.subtitle && <span className="text-[10px] text-zinc-400 font-secondary">{it.subtitle}</span>}
          </div>
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
          {/* Mobile label below icon */}
          <span className="lg:hidden text-[9px] text-zinc-700 text-center max-w-[60px] leading-tight opacity-0 group-data-[inview=true]/pstack:opacity-100 transition-opacity duration-300">
            {it.label}
          </span>
        </div>
      ))}
    </div>
  );
}
