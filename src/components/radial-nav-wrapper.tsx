'use client';

import { RadialNav } from "@/components/animate-ui/components/community/radial-nav";
import { Home as HomeIcon, FolderGit2, Mail, User } from "lucide-react";

const navItems = [
  { id: 1, icon: HomeIcon, label: "Home", angle: 0 },
  { id: 2, icon: User, label: "About", angle: 90 },
  { id: 3, icon: FolderGit2, label: "Projects", angle: 180 },
  { id: 4, icon: Mail, label: "Contact", angle: 270 },
];

export function RadialNavWrapper() {
  return <RadialNav items={navItems} size={150} />;
}
