"use client";

import React, { useEffect, useState } from "react";

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

const getRemainingTime = (targetTime: number) =>
  Math.max(0, targetTime - Date.now());

const CountDown = () => {
  const [targetTime] = useState(() => Date.now() + ONE_DAY_IN_MS);
  const [remainingTime, setRemainingTime] = useState(() =>
    getRemainingTime(targetTime)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const nextRemainingTime = getRemainingTime(targetTime);
      setRemainingTime(nextRemainingTime);

      if (nextRemainingTime === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const d = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const h = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const m = Math.floor((remainingTime / (1000 * 60)) % 60);
  const s = Math.floor((remainingTime / 1000) % 60);

  const formatUnit = (value: number) => value.toString().padStart(2, "0");

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {formatUnit(d)}:{formatUnit(h)}:{formatUnit(m)}:{formatUnit(s)}
    </span>
  );
};

export default CountDown;