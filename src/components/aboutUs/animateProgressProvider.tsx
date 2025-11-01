"use client";

import React, { useState, useEffect } from "react";
import { Animate } from "react-move";

type AnimatedProgressProviderProps = {
  valueStart?: number | boolean;
  valueEnd: number | boolean;
  duration: number;
  easingFunction: (t: number) => number; // ✅ specific function type
  repeat: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any; // ✅ properly typed children
};
const AnimatedProgressProvider = ({
  valueStart = 0,
  valueEnd,
  duration,
  easingFunction,
  repeat,
  children
}: AnimatedProgressProviderProps) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (repeat) {
      interval = setInterval(() => {
        setIsAnimated(prev => !prev);
      }, duration * 1000);
    } else {
      setIsAnimated(true);
    }

    return () => clearInterval(interval);
  }, [repeat, duration]);

  return (
    <Animate
      start={{ value: valueStart }}
      update={{
        value: [isAnimated ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction
        }
      }}
    >
      {({ value }) => children(value)}
    </Animate>
  );
};

export default AnimatedProgressProvider;
