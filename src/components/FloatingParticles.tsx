"use client";

import { useEffect, useState } from "react";

interface Particle {
    id: number;
    top: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
    driftX: number;
    driftY: number;
}

export default function FloatingParticles() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const generated = Array.from({ length: 35 }).map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 8 + 6, // 6s–14s
            delay: Math.random() * 6,
            driftX: (Math.random() - 0.5) * 120, // px drift range
            driftY: (Math.random() - 0.5) * 120,
        }));
        setParticles(generated);
    }, []);

    return (
        <>
            <style jsx>{`
        @keyframes particle-drift {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.4;
          }
          25% {
            opacity: 0.9;
          }
          50% {
            transform: translate(var(--dx), var(--dy));
            opacity: 0.6;
          }
          75% {
            opacity: 1;
          }
        }
      `}</style>
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute rounded-sm bg-emerald-500"
                        style={{
                            top: `${p.top}%`,
                            left: `${p.left}%`,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            boxShadow: "0 0 8px 2px rgba(16, 185, 129, 0.35)",
                            animation: `particle-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
                            ["--dx" as string]: `${p.driftX}px`,
                            ["--dy" as string]: `${p.driftY}px`,
                        }}
                    />
                ))}
            </div>
        </>
    );
}
