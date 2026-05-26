"use client";

import { useEffect, useState } from "react";

function getGdanskTime(): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Warsaw",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

function isDaytime(): boolean {
  const hour = Number.parseInt(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Warsaw",
      hour: "2-digit",
      hour12: false,
    }).format(new Date()),
  );
  return hour >= 6 && hour < 22;
}

export function LocalTime() {
  const [time, setTime] = useState<string>("");
  const [isDay, setIsDay] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(getGdanskTime());
    setIsDay(isDaytime());
    const interval = setInterval(() => {
      setTime(getGdanskTime());
      setIsDay(isDaytime());
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mt-8 flex items-center gap-1.5 text-xs font-[460] leading-[1.2] tracking-[0.00063rem] text-muted-foreground">
      <span
        className={`size-2 rounded-full ${
          isDay ? "bg-green-500 animate-pulse" : "bg-muted-foreground/50"
        }`}
      />
      <span>{time} in Gdańsk, Poland</span>
    </div>
  );
}
