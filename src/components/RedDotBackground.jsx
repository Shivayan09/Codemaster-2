import React, { useEffect, useState } from 'react';

function Dot({ top, left, x, y, delay, duration }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPos({ x, y });
      setTimeout(() => setPos({ x: 0, y: 0 }), duration * 500);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [x, y, duration]);

  return (
    <div
      style={{
        position: 'absolute',
        width: '5px',
        height: '5px',
        backgroundColor: 'red',
        borderRadius: '50%',
        opacity: 0.3,
        top: `${top}vh`,
        left: `${left}vw`,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: `transform ${duration}s ease-in-out ${delay}s`,
      }}
    />
  );
}

export default function RedDotBackground() {
  const dots = Array.from({ length: 100 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    x: Math.random() * 80 - 40,
    y: Math.random() * 80 - 40,
    delay: Math.random() * 1.5,
    duration: 1.2 + Math.random() * 0.6,
  }));

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        backgroundColor: 'black',
      }}
    >
      {dots.map((dot, i) => (
        <Dot key={i} {...dot} />
      ))}
    </div>
  );
}
