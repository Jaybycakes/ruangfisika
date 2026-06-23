import React, { useEffect, useRef, useState } from 'react';
import type p5 from 'p5';

interface ParabolaProps {
  velocity: number;
  angle: number;
  gravity: number;
  triggerReset: number;
}

export function ParabolaSimulation({ velocity, angle, gravity, triggerReset }: ParabolaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<any>(null);
  const propsRef = useRef({ velocity, angle, gravity });
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    propsRef.current = { velocity, angle, gravity };
  }, [velocity, angle, gravity]);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    console.log('[ParabolaSimulation] Loading p5.js...');

    let mounted = true;

    // Dynamic import of p5 on client side only
    import('p5')
      .then((p5Module) => {
        if (!mounted || !containerRef.current) return;
        
        console.log('[ParabolaSimulation] p5.js loaded successfully');
        const p5Constructor = p5Module.default;

    const sketch = (p: p5) => {
      let x: number, y: number, vx: number, vy: number;
      let path: typeof p.Vector[] = [];
      let isPlaying = false;
      const dt = 0.15;

      p.setup = () => {
        const { width, height } = containerRef.current!.getBoundingClientRect();
        p.createCanvas(width, height);
        resetSimulation();
      };

      p.windowResized = () => {
        if (containerRef.current) {
          const { width, height } = containerRef.current.getBoundingClientRect();
          p.resizeCanvas(width, height);
          resetSimulation();
        }
      };

      const resetSimulation = () => {
        console.log('[ParabolaSimulation] Reset triggered', { velocity: propsRef.current.velocity, angle: propsRef.current.angle, gravity: propsRef.current.gravity });
        const { velocity: v, angle: a } = propsRef.current;
        x = 50;
        y = p.height - 50;
        let rad = p.radians(a);
        vx = v * p.cos(rad);
        vy = -v * p.sin(rad);
        path = [];
        isPlaying = true;
      };

      (p as any).customReset = resetSimulation;

      p.draw = () => {
        const { gravity: g } = propsRef.current;
        p.background(240);

        // Ground
        p.noStroke();
        p.fill(40, 40, 60);
        p.rect(0, p.height - 50, p.width, 50);

        // Physics
        if (isPlaying && y <= p.height - 50) {
          x += vx * dt;
          vy += g * dt;
          y += vy * dt;
          path.push(p.createVector(x, y));
        }

        // Trajectory
        p.noFill();
        p.stroke(41, 128, 185);
        p.strokeWeight(3);
        p.beginShape();
        for (let pt of path) {
          p.vertex(pt.x, pt.y);
        }
        p.endShape();

        // Projectile
        p.fill(231, 76, 60);
        p.noStroke();
        p.circle(x, Math.min(y, p.height - 50), 24);

        // Telemetry
        p.fill(0);
        p.textSize(14);
        p.text(`Posisi X: ${(x - 50).toFixed(1)} m`, 20, 30);
        p.text(`Ketinggian Y: ${(p.height - 50 - y).toFixed(1)} m`, 20, 50);
      };
    };

    p5Instance.current = new p5Constructor(sketch, containerRef.current);
    console.log('[ParabolaSimulation] p5 instance created');

    return () => {
      console.log('[ParabolaSimulation] Cleaning up p5 instance');
      if (mounted) {
        p5Instance.current?.remove();
      }
    };
    })
    .catch((err) => {
      console.error('[ParabolaSimulation] Failed to load p5.js:', err);
      setError('Failed to load simulation library');
    });

    return () => {
      mounted = false;
      p5Instance.current?.remove();
    };
  }, [isClient]);

  useEffect(() => {
    if (p5Instance.current && p5Instance.current.customReset) {
      p5Instance.current.customReset();
    }
  }, [triggerReset]);

  if (error) {
    return (
      <div ref={containerRef} className="w-full h-full min-h-[400px] grid place-items-center bg-secondary/30">
        <div className="text-red-500 text-sm">{error}</div>
      </div>
    );
  }

  if (!isClient) {
    return (
      <div ref={containerRef} className="w-full h-full min-h-[400px] grid place-items-center bg-secondary/30">
        <div className="text-muted-foreground text-sm">Loading simulation...</div>
      </div>
    );
  }

  return <div ref={containerRef} className="w-full h-full min-h-[400px]" />;
}
