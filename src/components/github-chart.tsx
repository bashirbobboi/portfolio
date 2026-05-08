"use client";

import { useEffect, useState, useId } from "react";

type Contribution = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type ApiResponse = { contributions: Contribution[]; total: Record<string, number> };

const PALETTE = [
  "#ebedf0",
  "#9be9a8",
  "#40c463",
  "#30a14e",
  "#216e39",
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["", "Mon", "", "Wed", "", "Fri", ""];

const CELL_SIZE = 12;
const CELL_GAP = 3;
const PAD_LEFT = 32;
const PAD_TOP = 22;
const PAD_RIGHT = 8;
const PAD_BOTTOM = 8;

export function GithubChart({ username }: { username: string }) {
  const [data, setData] = useState<Contribution[] | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const filterId = useId();
  const splatterId = useId();

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => r.json())
      .then((j: ApiResponse) => {
        if (cancelled) return;
        setData(j.contributions);
        const sum = j.contributions.reduce((a, c) => a + c.count, 0);
        setTotal(sum);
      })
      .catch((e) => !cancelled && setError(String(e)));
    return () => {
      cancelled = true;
    };
  }, [username]);

  if (error) return <div className="font-secondary text-zinc-500 text-sm">Failed to load chart.</div>;
  if (!data) return <div className="font-secondary text-zinc-400 text-sm">Loading…</div>;

  const byWeek: Contribution[][] = [];
  const weekStartDates: Date[] = [];
  if (data.length) {
    const first = new Date(data[0].date);
    const offset = first.getDay();
    let week: Contribution[] = new Array(offset).fill(null);
    let weekStart = new Date(first);
    weekStart.setDate(weekStart.getDate() - offset);
    weekStartDates.push(new Date(weekStart));
    for (const c of data) {
      week.push(c);
      if (week.length === 7) {
        byWeek.push(week);
        week = [];
        const next = new Date(weekStart);
        next.setDate(next.getDate() + 7);
        weekStart = next;
        weekStartDates.push(new Date(weekStart));
      }
    }
    if (week.length) {
      while (week.length < 7) week.push(null as unknown as Contribution);
      byWeek.push(week);
    }
  }

  const weeks = byWeek.length;
  const gridWidth = weeks * (CELL_SIZE + CELL_GAP);
  const gridHeight = 7 * (CELL_SIZE + CELL_GAP);
  const width = PAD_LEFT + gridWidth + PAD_RIGHT;
  const height = PAD_TOP + gridHeight + PAD_BOTTOM;

  // Month labels: place at first week of each month
  const monthLabels: { x: number; label: string }[] = [];
  let lastMonth = -1;
  weekStartDates.forEach((d, wi) => {
    const m = d.getMonth();
    if (m !== lastMonth) {
      monthLabels.push({ x: PAD_LEFT + wi * (CELL_SIZE + CELL_GAP), label: MONTHS[m] });
      lastMonth = m;
    }
  });

  const splatters = Array.from({ length: 50 }).map((_, i) => {
    const seed = i * 9301 + 49297;
    const rx = (seed % 233280) / 233280;
    const ry = ((seed * 1.7) % 233280) / 233280;
    const cx = rx * width;
    const cy = ry * height;
    const r = 0.5 + ((seed * 3.1) % 25) / 10;
    const opacity = 0.05 + ((seed * 2.3) % 100) / 500;
    const colorIdx = (i % 4) + 1;
    return { cx, cy, r, opacity, color: PALETTE[colorIdx] };
  });

  return (
    <div className="w-full flex flex-col gap-3">
      <p className="font-secondary text-primary-text text-base lg:text-lg font-semibold">
        {total.toLocaleString()} contributions in the last year
      </p>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id={splatterId} x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" seed="3" result="n2" />
              <feDisplacementMap in="SourceGraphic" in2="n2" scale="3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>

          <rect width={width} height={height} fill="#ffffff" />

          <g filter={`url(#${splatterId})`}>
            {splatters.map((s, i) => (
              <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={s.color} opacity={s.opacity} />
            ))}
          </g>

          {/* Month labels */}
          <g fontFamily="var(--font-secondary, sans-serif)" fontSize="9" fill="#71717a">
            {monthLabels.map((m, i) => (
              <text key={i} x={m.x} y={PAD_TOP - 8}>{m.label}</text>
            ))}
          </g>

          {/* Day labels */}
          <g fontFamily="var(--font-secondary, sans-serif)" fontSize="9" fill="#71717a">
            {DAYS.map((d, i) =>
              d ? (
                <text
                  key={i}
                  x={PAD_LEFT - 6}
                  y={PAD_TOP + i * (CELL_SIZE + CELL_GAP) + CELL_SIZE - 2}
                  textAnchor="end"
                >
                  {d}
                </text>
              ) : null
            )}
          </g>

          <g filter={`url(#${filterId})`}>
            {byWeek.map((week, wi) =>
              week.map((c, di) => {
                if (!c) return null;
                const level = c.level ?? 0;
                const x = PAD_LEFT + wi * (CELL_SIZE + CELL_GAP);
                const y = PAD_TOP + di * (CELL_SIZE + CELL_GAP);
                const seed = wi * 7 + di;
                const rot = ((seed * 13) % 7) - 3;
                const opacity = level === 0 ? 0.55 : 0.78 + ((seed * 5) % 20) / 100;
                return (
                  <rect
                    key={`${wi}-${di}`}
                    x={x}
                    y={y}
                    width={CELL_SIZE}
                    height={CELL_SIZE}
                    rx={2}
                    fill={PALETTE[level]}
                    opacity={opacity}
                    transform={`rotate(${rot} ${x + CELL_SIZE / 2} ${y + CELL_SIZE / 2})`}
                  >
                    <title>{`${c.date}: ${c.count} contributions`}</title>
                  </rect>
                );
              })
            )}
          </g>
        </svg>
      </div>

      <div className="flex justify-end items-center gap-2 font-secondary text-zinc-500 text-xs">
        <span>Less</span>
        <svg
          width={PALETTE.length * 15}
          height={14}
          viewBox={`0 0 ${PALETTE.length * 15} 14`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id={`${filterId}-legend`} x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <g filter={`url(#${filterId}-legend)`}>
            {PALETTE.map((c, i) => {
              const x = i * 15 + 1;
              const y = 1;
              const rot = ((i * 13) % 7) - 3;
              const opacity = i === 0 ? 0.55 : 0.85;
              return (
                <rect
                  key={i}
                  x={x}
                  y={y}
                  width={12}
                  height={12}
                  rx={2}
                  fill={c}
                  opacity={opacity}
                  transform={`rotate(${rot} ${x + 6} ${y + 6})`}
                />
              );
            })}
          </g>
        </svg>
        <span>More</span>
      </div>
    </div>
  );
}
