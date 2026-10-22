"use client";

import { useEffect, useState } from "react";

const TIME_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Warsaw",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

interface LocalTimeState {
  label: string;
  isDay: boolean;
}

function getLocalTime(): LocalTimeState {
  const parts = TIME_FORMATTER.formatToParts(new Date());
  const hour = parts.find((part) => part.type === "hour")?.value ?? "00";
  const minute = parts.find((part) => part.type === "minute")?.value ?? "00";
  const hourNumber = Number.parseInt(hour, 10);
  return {
    label: `${hour}:${minute}`,
    isDay: hourNumber >= 6 && hourNumber < 22,
  };
}

export function LocalTime() {
  const [time, setTime] = useState<LocalTimeState | null>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      setTime(getLocalTime());
      const msToNextMinute = 60_000 - (Date.now() % 60_000);
      timeout = setTimeout(tick, msToNextMinute);
    };
    tick();
    return () => clearTimeout(timeout);
  }, []);

  if (!time) return null;

  return (
    <div className="fade-up [--i:8] mt-8 flex items-center gap-1.5 text-xs font-[460] leading-[1.2] tracking-[0.00063rem] text-muted-foreground">
      <span
        className={`size-2 rounded-full ${
          time.isDay ? "bg-green-500 animate-pulse" : "bg-muted-foreground/50"
        }`}
      />
      <span>{time.label} in Gdańsk, Poland</span>
    </div>
  );
}
