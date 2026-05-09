'use client';

import * as React from "react";
import { RadialNav } from "@/components/animate-ui/components/community/radial-nav";
import {
  Home as HomeIcon,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Award,
  Code2,
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
  const isClickScrollingRef = React.useRef(false);
  const clickScrollTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const update = () => setSize(window.innerWidth < 1024 ? 110 : 150);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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

  return (
    <RadialNav
      items={navItems}
      size={size}
      activeId={activeId ?? null}
      onActiveChange={handleActiveChange}
    />
  );
}
