'use client';

import { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export function TappableVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 800);
  }

  return (
    <div className={`relative cursor-pointer ${className ?? ''}`} onClick={toggle}>
      <video
        ref={ref}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-2xl"
      />
      <div
        className={`absolute inset-0 flex items-center justify-center rounded-2xl bg-black/20 transition-opacity duration-300 ${showOverlay ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="bg-white/80 rounded-full p-4">
          {paused ? <Play className="size-8 text-black fill-black" /> : <Pause className="size-8 text-black fill-black" />}
        </div>
      </div>
    </div>
  );
}
