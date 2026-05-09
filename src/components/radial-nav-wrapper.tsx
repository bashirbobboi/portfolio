'use client';

import * as React from "react";
import { AnimatePresence, motion, useMotionValue, animate } from "motion/react";
import { RadialNav } from "@/components/animate-ui/components/community/radial-nav";
import {
  Home as HomeIcon,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Award,
  Code2,
  Menu,
} from "lucide-react";

const navItems = [
  { id: 1, icon: HomeIcon, label: "Home", angle: 0, sectionId: "home" },
  { id: 2, icon: GraduationCap, label: "Education", angle: 60, sectionId: "education" },
  { id: 3, icon: Briefcase, label: "Experience", angle: 120, sectionId: "experience" },
  { id: 4, icon: FolderGit2, label: "Projects", angle: 180, sectionId: "projects" },
  { id: 5, icon: Award, label: "Certifications", angle: 240, sectionId: "certifications" },
  { id: 6, icon: Code2, label: "Skills", angle: 300, sectionId: "skills" },
];

export function RadialNavWrapper() {
  const [activeId, setActiveId] = React.useState<number | undefined>(undefined);
  const [size, setSize] = React.useState(150);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isClickScrollingRef = React.useRef(false);
  const clickScrollTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const preExpandPos = React.useRef<{ x: number; y: number } | null>(null);
  const [dragConstraints, setDragConstraints] = React.useState({ left: 0, right: 0, top: 0, bottom: 0 });

  React.useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setSize(mobile ? 130 : 150);
      // Constraints assume collapsed button (48px) at base (16,16). Drag only happens collapsed.
      const COLLAPSED = 48;
      const BASE = 16;
      setDragConstraints({
        left: -BASE,
        top: -BASE,
        right: window.innerWidth - BASE - COLLAPSED,
        bottom: window.innerHeight - BASE - COLLAPSED,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // When expanding on mobile, ensure full radial fits viewport; shift inward if not.
  React.useEffect(() => {
    if (!isMobile) return;
    if (isExpanded) {
      preExpandPos.current = { x: x.get(), y: y.get() };
      const id = requestAnimationFrame(() => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const pad = 8;
        const BASE = 16; // top-4 / left-4
        const overflow = 75; // active item expands to ~140px pill, extending past size box
        const extent = size + overflow * 2;
        const left = BASE + x.get() - overflow;
        const top = BASE + y.get() - overflow;
        const right = left + extent;
        const bottom = top + extent;
        let dx = 0;
        let dy = 0;
        if (right > vw - pad) dx = vw - pad - right;
        if (left + dx < pad) dx = pad - left;
        if (bottom > vh - pad) dy = vh - pad - bottom;
        if (top + dy < pad) dy = pad - top;
        if (dx) animate(x, x.get() + dx, { type: "spring", stiffness: 280, damping: 28 });
        if (dy) animate(y, y.get() + dy, { type: "spring", stiffness: 280, damping: 28 });
      });
      return () => cancelAnimationFrame(id);
    } else if (preExpandPos.current) {
      animate(x, preExpandPos.current.x, { type: "spring", stiffness: 280, damping: 28 });
      animate(y, preExpandPos.current.y, { type: "spring", stiffness: 280, damping: 28 });
      preExpandPos.current = null;
    }
  }, [isExpanded, isMobile, x, y]);

  React.useEffect(() => {
    if (!isMobile || !isExpanded) return;
    const handler = (e: Event) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isMobile, isExpanded]);

  const handleActiveChange = React.useCallback((id: number) => {
    const item = navItems.find((it) => it.id === id);
    if (!item) return;
    const el = document.getElementById(item.sectionId);
    if (!el) return;
    setActiveId(id);
    isClickScrollingRef.current = true;
    if (clickScrollTimerRef.current) clearTimeout(clickScrollTimerRef.current);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    clickScrollTimerRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 800);
    setTimeout(() => setIsExpanded(false), 1200);
  }, []);

  React.useEffect(() => {
    const sections = navItems
      .map((it) => ({ id: it.id, el: document.getElementById(it.sectionId) }))
      .filter((s): s is { id: number; el: HTMLElement } => s.el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrollingRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length === 0) return;
        const topId = sections.find((s) => s.el === visible[0].target)?.id;
        if (topId !== undefined) setActiveId(topId);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s.el));
    return () => observer.disconnect();
  }, []);

  const activeItem = navItems.find((it) => it.id === activeId);
  const ActiveIcon = activeItem?.icon ?? Menu;

  // Position knobs — tweak freely
  const collapsedMobilePos = "top-4 left-4";
  const expandedMobilePos = "top-4 left-4";
  const desktopPos = "lg:top-12 lg:left-16";
  const showCollapsed = isMobile && !isExpanded;
  const posClass = showCollapsed
    ? `${collapsedMobilePos} ${desktopPos}`
    : `${expandedMobilePos} ${desktopPos}`;

  return (
    <motion.div
      ref={containerRef}
      drag={isMobile && !isExpanded}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={dragConstraints}
      style={{ x, y }}
      className={`fixed z-50 ${posClass} touch-none`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isMobile && !isExpanded ? (
          <motion.button
            key="collapsed"
            type="button"
            onClick={() => setIsExpanded(true)}
            aria-label="Open navigation"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="flex items-center justify-center size-12 rounded-full bg-primary-bg border border-neutral-900 text-neutral-900 shadow-md active:scale-95"
          >
            <ActiveIcon size={20} />
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            style={{ originX: 0, originY: 0 }}
          >
            <RadialNav
              items={navItems}
              size={size}
              activeId={activeId ?? null}
              onActiveChange={handleActiveChange}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
