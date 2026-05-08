export function TechIcon({ src, label, whiteBg, blackBg, contain }: { src: string; label: string; whiteBg?: boolean; blackBg?: boolean; contain?: boolean }) {
  return (
    <div className="relative group">
      <img
        src={src}
        alt={label}
        className={`w-10 h-10 rounded-sm ${contain ? 'object-contain' : 'object-cover'}${whiteBg ? ' bg-white p-0.5' : ''}${blackBg ? ' bg-black p-0.5' : ''}`}
      />
      <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs font-secondary px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {label}
      </div>
    </div>
  );
}
