export function TechIcon({ src, label, subtitle, whiteBg, blackBg, contain, bg }: { src: string; label: string; subtitle?: string; whiteBg?: boolean; blackBg?: boolean; contain?: boolean; bg?: string }) {
  return (
    <div className="relative group">
      <img
        loading="lazy"
        src={src}
        alt={label}
        className={`w-10 h-10 rounded-sm shadow-md block ${contain ? 'object-contain' : 'object-cover'}${whiteBg ? ' bg-white p-0.5' : ''}${blackBg ? ' bg-black p-0.5' : ''}${bg ? ` ${bg}` : ''}`}
      />
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs font-secondary px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex flex-col items-center gap-0.5">
        <span>{label}</span>
        {subtitle && <span className="text-zinc-400 text-[10px]">{subtitle}</span>}
      </div>
    </div>
  );
}
