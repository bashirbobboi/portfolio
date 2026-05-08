'use client';

import { useRef } from 'react';

export function TappableVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    v.paused ? v.play() : v.pause();
  }

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      onClick={toggle}
      className={`cursor-pointer ${className ?? ''}`}
    />
  );
}
