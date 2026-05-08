import { ArrowUpRight } from "lucide-react";

export function ButtonWithIcon({ label = "Let's Collaborate", href, small }: { label?: string; href?: string; small?: boolean }) {
  const Comp = href ? 'a' : 'button';
  return small ? (
    <Comp {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})} className="relative inline-flex items-center text-xs font-medium font-secondary rounded-full h-9 p-1 ps-5 pe-11 group transition-all duration-500 hover:ps-11 hover:pe-5 w-fit shrink-0 overflow-hidden cursor-pointer bg-primary text-primary-foreground">
      <span className="relative z-10 transition-all duration-500 whitespace-nowrap">
        {label}
      </span>
      <div className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-32px)] group-hover:rotate-45">
        <ArrowUpRight size={13} />
      </div>
    </Comp>
  ) : (
    <Comp {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})} className="relative inline-flex items-center text-sm font-medium font-secondary rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit shrink-0 overflow-hidden cursor-pointer bg-primary text-primary-foreground">
      <span className="relative z-10 transition-all duration-500 whitespace-nowrap">
        {label}
      </span>
      <div className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </div>
    </Comp>
  );
}
