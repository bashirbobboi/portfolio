"use client";

import { useId, type ReactNode } from "react";

export function WatercolorCard({
  children,
  fill = "#fbf6ec",
}: {
  children: ReactNode;
  fill?: string;
}) {
  const baseId = useId();
  const bgFilter = `${baseId}-bg`;

  return (
    <div className="relative">
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 400 200"
        aria-hidden
      >
        <defs>
          <filter id={bgFilter} x="-5%" y="-10%" width="110%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" seed="4" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="14" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id={`${bgFilter}-inner`} x="-5%" y="-10%" width="110%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="11" result="n2" />
            <feDisplacementMap in="SourceGraphic" in2="n2" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <linearGradient id={`${bgFilter}-grad`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={fill} stopOpacity="0.95" />
            <stop offset="60%" stopColor={fill} stopOpacity="0.75" />
            <stop offset="100%" stopColor={fill} stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <rect
          x="6" y="6" width="388" height="188"
          rx="14"
          fill={fill}
          opacity="0.4"
          filter={`url(#${bgFilter})`}
        />
        <rect
          x="10" y="10" width="380" height="180"
          rx="12"
          fill={`url(#${bgFilter}-grad)`}
          filter={`url(#${bgFilter}-inner)`}
        />
      </svg>

      <div className="relative p-6">{children}</div>
    </div>
  );
}
