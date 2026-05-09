export function SkillTile({
  src,
  label,
  subtitle,
  whiteBg,
  blackBg,
  contain,
  bg,
}: {
  src: string;
  label: string;
  subtitle?: string;
  whiteBg?: boolean;
  blackBg?: boolean;
  contain?: boolean;
  bg?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 w-16 group relative">
      <img
        loading="lazy"
        src={src}
        alt={label}
        className={`w-12 h-12 rounded-lg shadow-md ${contain ? "object-contain" : "object-cover"}${whiteBg ? " bg-white p-1" : ""}${blackBg ? " bg-black p-1" : ""}${bg ? ` ${bg}` : ""}`}
      />
      <span className="font-secondary text-[11px] text-zinc-700 text-center leading-tight">{label}</span>
      {subtitle && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs font-secondary px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex flex-col items-center gap-0.5 z-10">
          <span>{label}</span>
          <span className="text-zinc-400 text-[10px]">{subtitle}</span>
        </div>
      )}
    </div>
  );
}
