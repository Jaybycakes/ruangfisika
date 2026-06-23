import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

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

  useEffect(() => {
    propsRef.current = { velocity, angle, gravity };
  }, [velocity, angle, gravity]);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let x: number, y: number, vx: number, vy: number;
      let path: p5.Vector[] = [];
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

    p5Instance.current = new p5(sketch, containerRef.current);

    return () => {
      p5Instance.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (p5Instance.current && p5Instance.current.customReset) {
      p5Instance.current.customReset();
    }
  }, [triggerReset]);

  return <div ref={containerRef} className="w-full h-full min-h-[400px]" />;
}
