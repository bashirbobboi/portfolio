export function SkillTile({
  src,
  label,
  whiteBg,
  blackBg,
  contain,
  bg,
}: {
  src: string;
  label: string;
  whiteBg?: boolean;
  blackBg?: boolean;
  contain?: boolean;
  bg?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 w-16">
      <img
        src={src}
        alt={label}
        className={`w-12 h-12 rounded-lg shadow-md ${contain ? "object-contain" : "object-cover"}${whiteBg ? " bg-white p-1" : ""}${blackBg ? " bg-black p-1" : ""}${bg ? ` ${bg}` : ""}`}
      />
      <span className="font-secondary text-[11px] text-zinc-700 text-center leading-tight">{label}</span>
    </div>
  );
}
