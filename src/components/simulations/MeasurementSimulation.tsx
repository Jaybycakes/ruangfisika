import React, { useEffect, useRef, useState } from 'react';

export interface MeasurementReading {
  value: number;
  uncertainty: number;
  toolName: string;
  decimals: number;
}

interface Props {
  tool: 'ruler' | 'vernier' | 'micrometer';
  trueLength: number; // mm
  triggerMeasure: number;
  onMeasure?: (r: MeasurementReading) => void;
}

const UNCERTAINTY = { ruler: 0.5, vernier: 0.05, micrometer: 0.005 };
const PRECISION   = { ruler: 1,   vernier: 0.1,  micrometer: 0.01  };
const DECIMALS    = { ruler: 0,   vernier: 1,    micrometer: 2     };
const TOOL_LABEL  = {
  ruler: 'Penggaris (mm)',
  vernier: 'Jangka Sorong',
  micrometer: 'Mikrometer Sekrup',
};

function countSigFigs(valStr: string): number {
  const s = valStr.replace('-', '');
  if (!s.includes('.')) return s.replace(/^0+/, '').length || 1;
  const [int, dec] = s.split('.');
  if (int === '0' || int === '') return dec.replace(/^0+/, '').length || 1;
  return (int.replace(/^0+/, '') + dec).length;
}

export function MeasurementSimulation({ tool, trueLength, triggerMeasure, onMeasure }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<any>(null);
  const propsRef = useRef({ tool, trueLength });
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { setIsClient(true); }, []);
  useEffect(() => { propsRef.current = { tool, trueLength }; }, [tool, trueLength]);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;
    let mounted = true;

    import('p5').then(mod => {
      if (!mounted || !containerRef.current) return;
      const P5 = mod.default;

      const sketch = (p: any) => {
        let showResult = false;
        let animPct = 0;
        let lastReading: MeasurementReading | null = null;

        (p as any).doMeasure = () => {
          const { tool: t, trueLength: len } = propsRef.current;
          const prec = PRECISION[t as keyof typeof PRECISION];
          const value = Math.round(len / prec) * prec;
          const reading: MeasurementReading = {
            value,
            uncertainty: UNCERTAINTY[t as keyof typeof UNCERTAINTY],
            toolName: TOOL_LABEL[t as keyof typeof TOOL_LABEL],
            decimals: DECIMALS[t as keyof typeof DECIMALS],
          };
          lastReading = reading;
          showResult = true;
          animPct = 0;
          onMeasure?.(reading);
        };

        (p as any).doReset = () => {
          showResult = false;
          lastReading = null;
          animPct = 0;
        };

        p.setup = () => {
          const r = containerRef.current!.getBoundingClientRect();
          p.createCanvas(r.width, r.height);
        };

        p.windowResized = () => {
          if (containerRef.current) {
            const r = containerRef.current.getBoundingClientRect();
            p.resizeCanvas(r.width, r.height);
          }
        };

        p.draw = () => {
          const { tool: t, trueLength: len } = propsRef.current;
          const W = p.width, H = p.height;
          if (showResult && animPct < 1) animPct = Math.min(1, animPct + 0.05);

          // Background
          p.background(232, 236, 244);

          // Workbench surface
          p.noStroke(); p.fill(190, 160, 120);
          p.rect(0, H * 0.52, W, H * 0.48);
          p.stroke(165, 135, 95, 90); p.strokeWeight(0.7);
          for (let i = 0; i < 14; i++) p.line(0, H * 0.52 + i * 16, W, H * 0.52 + i * 16 + 5);
          p.noStroke(); p.fill(150, 120, 85);
          p.rect(0, H * 0.52, W, 5);

          // Scale factor: 150mm fills ~55% of canvas width, max 4px/mm
          const scale = Math.min((W * 0.55) / 150, 4.0);
          const objW = len * scale;
          const objX = (W - objW) / 2;
          const objY = H * 0.28;
          const objH = 44;

          // Object shadow
          p.noStroke(); p.fill(0, 0, 0, 18);
          p.rect(objX + 4, objY + objH + 2, objW, 7, 4);

          // Object body (metallic)
          p.fill(195, 205, 218); p.stroke(128, 140, 155); p.strokeWeight(1.5);
          p.rect(objX, objY, objW, objH, 3);
          p.noStroke(); p.fill(255, 255, 255, 50);
          p.rect(objX + 2, objY + 2, objW - 4, 12, 2);

          // Object label
          p.fill(60, 70, 85); p.noStroke();
          p.textFont('sans-serif');
          p.textSize(Math.min(13, objW / 9));
          p.textAlign(p.CENTER, p.CENTER);
          p.text('Benda Ukur', objX + objW / 2, objY + objH / 2);

          // Measurement tool
          const toolY = objY + objH + 30;
          if (t === 'ruler') drawRuler(p, objX, toolY, objW, len, scale, showResult, animPct);
          else if (t === 'vernier') drawVernier(p, objX, toolY, objW, len, scale, showResult, animPct);
          else drawMicrometer(p, W, toolY, len, showResult, animPct);

          // Dashed guide lines from object edges to tool
          p.stroke(120, 160, 210, 70); p.strokeWeight(1);
          p.drawingContext.setLineDash([4, 5]);
          p.line(objX, objY + objH, objX, toolY);
          p.line(objX + objW, objY + objH, objX + objW, toolY);
          p.drawingContext.setLineDash([]);

          // Result overlay
          if (showResult && lastReading) {
            const a = Math.floor(animPct * 255);
            const rx = W / 2, ry = H * 0.86;
            p.noStroke(); p.fill(18, 26, 46, Math.floor(a * 0.9));
            p.rect(rx - 152, ry - 33, 304, 68, 10);

            const dec = lastReading.decimals;
            const uncDec = dec + 1;
            const valStr = lastReading.value.toFixed(dec);

            p.textAlign(p.CENTER, p.CENTER);
            p.fill(80, 225, 155, a); p.textSize(14);
            p.text(
              `${lastReading.toolName}: (${valStr} ± ${lastReading.uncertainty.toFixed(uncDec)}) mm`,
              rx, ry - 12
            );
            p.fill(160, 200, 255, a); p.textSize(11);
            p.text(
              `${countSigFigs(valStr)} angka penting  •  δ = ${lastReading.uncertainty.toFixed(uncDec)} mm`,
              rx, ry + 14
            );
          }

          // Top-left label
          p.noStroke(); p.fill(45, 55, 75);
          p.textSize(11); p.textAlign(p.LEFT, p.TOP);
          p.text(
            `${TOOL_LABEL[t as keyof typeof TOOL_LABEL]}   |   Ketelitian: ±${UNCERTAINTY[t as keyof typeof UNCERTAINTY]} mm`,
            12, 12
          );
        };

        function drawRuler(
          p: any,
          objX: number, y: number, objW: number,
          len: number, scale: number,
          showResult: boolean, anim: number
        ) {
          const rx = objX - 22, rw = objW + 44, rh = 40;

          // Body
          p.fill(255, 248, 175); p.stroke(198, 172, 45); p.strokeWeight(1.5);
          p.rect(rx, y, rw, rh, 3);

          // Ticks — mm=0 aligns with objX
          const mmCount = Math.ceil(len + 22);
          for (let mm = 0; mm <= mmCount; mm++) {
            const tx = objX + mm * scale;
            if (tx < rx + 2 || tx > rx + rw - 2) continue;
            const major = mm % 10 === 0, mid = mm % 5 === 0;
            const th = major ? 24 : mid ? 16 : 9;
            p.stroke(68, 52, 12); p.strokeWeight(major ? 1.3 : 0.7);
            p.line(tx, y + rh - 2, tx, y + rh - 2 - th);
            if (major) {
              p.noStroke(); p.fill(68, 52, 12);
              p.textSize(8); p.textAlign(p.CENTER, p.BOTTOM);
              p.text(mm.toString(), tx, y + rh - 2 - th - 1);
            }
          }
          p.noStroke(); p.fill(100, 78, 18); p.textSize(8);
          p.textAlign(p.LEFT, p.TOP); p.text('mm', rx + 4, y + 3);

          // Reading indicator
          if (showResult) {
            const ix = objX + len * scale;
            const a = Math.floor(anim * 255);
            p.stroke(210, 48, 48, a); p.strokeWeight(2);
            p.line(ix, y - 7, ix, y + rh + 7);
            p.noStroke(); p.fill(210, 48, 48, a);
            p.triangle(ix - 5, y - 7, ix + 5, y - 7, ix, y + 2);
          }
        }

        function drawVernier(
          p: any,
          objX: number, y: number, objW: number,
          len: number, scale: number,
          showResult: boolean, anim: number
        ) {
          const rx = objX - 22, rw = objW + 44;
          const mainH = 32, vernH = 26;

          // Main scale
          p.fill(222, 228, 244); p.stroke(128, 134, 162); p.strokeWeight(1.5);
          p.rect(rx, y, rw, mainH, 2);

          const mmCount = Math.ceil(len + 22);
          for (let mm = 0; mm <= mmCount; mm++) {
            const tx = objX + mm * scale;
            if (tx < rx + 2 || tx > rx + rw - 2) continue;
            const major = mm % 10 === 0, mid = mm % 5 === 0;
            const th = major ? 20 : mid ? 13 : 7;
            p.stroke(65, 70, 102); p.strokeWeight(major ? 1.2 : 0.7);
            p.line(tx, y + mainH - 2, tx, y + mainH - 2 - th);
            if (major) {
              p.noStroke(); p.fill(52, 58, 92); p.textSize(8);
              p.textAlign(p.CENTER, p.BOTTOM); p.text(mm.toString(), tx, y + 12);
            }
          }
          p.noStroke(); p.fill(70, 75, 110); p.textSize(8);
          p.textAlign(p.LEFT, p.TOP); p.text('Skala Utama', rx + 4, y + 3);

          // Vernier (sliding) scale — 10 divisions spanning 9mm
          const slideX = objX + len * scale; // right edge of object on canvas
          const vernW = 9 * scale;
          const vStart = slideX - vernW;

          p.fill(195, 212, 242, 210); p.stroke(88, 110, 182); p.strokeWeight(1.5);
          p.rect(vStart - 2, y + mainH - 2, vernW + 4, vernH, 2);

          const fracMm = len % 1;
          const coincident = Math.round(fracMm * 10) % 10;
          const vernDiv = 0.9 * scale;

          for (let i = 0; i <= 10; i++) {
            const tx = vStart + i * vernDiv;
            const major = i === 0 || i === 5 || i === 10;
            const th = major ? 17 : 9;
            const isMatch = showResult && i === coincident;

            p.stroke(isMatch ? 210 : 68, isMatch ? 48 : 78, isMatch ? 48 : 122);
            p.strokeWeight(isMatch ? 2.2 : 0.8);
            p.line(tx, y + mainH, tx, y + mainH + th);

            if (major) {
              p.noStroke(); p.fill(52, 62, 102); p.textSize(7);
              p.textAlign(p.CENTER, p.TOP); p.text(i.toString(), tx, y + mainH + 18);
            }
            if (isMatch) {
              const a = Math.floor(anim * 255);
              p.noStroke(); p.fill(255, 80, 80, Math.floor(a * 0.22));
              p.ellipse(tx, y + mainH + 8, 16, 24);
            }
          }
          p.noStroke(); p.fill(70, 80, 120); p.textSize(7.5);
          p.textAlign(p.LEFT, p.TOP); p.text('Nonius', vStart, y + mainH + 2);
        }

        function drawMicrometer(
          p: any,
          W: number, y: number,
          len: number,
          showResult: boolean, anim: number
        ) {
          const cx = W / 2;
          const bW = 200, bH = 32;
          const bx = cx - bW / 2;

          // Barrel (fixed sleeve)
          p.fill(198, 204, 218); p.stroke(128, 134, 158); p.strokeWeight(1.5);
          p.rect(bx, y, bW * 0.58, bH, 3);

          // Central reference line
          p.stroke(48, 54, 78); p.strokeWeight(1.2);
          p.line(bx + 2, y + bH / 2, bx + bW * 0.58 - 2, y + bH / 2);

          // Main scale: each full mm = 16px, half-mm below line
          const mmMax = Math.floor(len) + 2;
          for (let i = 0; i <= mmMax * 2; i++) {
            const tx = bx + 16 + i * 8;
            if (tx > bx + bW * 0.56) break;
            const isFull = i % 2 === 0;
            const isMajor = i % 10 === 0;
            const th = isMajor ? 14 : isFull ? 9 : 6;
            const above = isFull;
            p.stroke(48, 54, 78); p.strokeWeight(isMajor ? 1.3 : 0.8);
            const lineY = above ? y + bH / 2 - 1 : y + bH / 2 + 1;
            p.line(tx, lineY, tx, lineY + (above ? -th : th));
            if (isFull && isMajor) {
              p.noStroke(); p.fill(38, 48, 72); p.textSize(7);
              p.textAlign(p.CENTER, above ? p.BOTTOM : p.TOP);
              p.text((i / 2).toString(), tx, lineY + (above ? -2 : 2));
            }
          }

          // Thimble (rotating)
          const thX = bx + bW * 0.58;
          p.fill(172, 178, 200); p.stroke(112, 118, 145); p.strokeWeight(1.5);
          p.rect(thX, y - 7, bW * 0.42, bH + 14, 3);

          // Thimble scale — 50 divisions, each 0.01mm
          // halfMmFrac in [0, 0.5) tells how far through a half-mm step we are
          const halfMmFrac = len % 0.5;
          const thimblePos = Math.round((halfMmFrac / 0.5) * 50) % 50;

          for (let i = 0; i < 50; i++) {
            let dist = i - thimblePos;
            if (dist > 25) dist -= 50;
            if (dist < -25) dist += 50;
            if (Math.abs(dist) > 13) continue;

            const ty = y + bH / 2 + (dist / 13) * bH * 0.6;
            if (ty < y - 5 || ty > y + bH + 6) continue;

            const major = i % 5 === 0;
            const th = major ? 15 : 7;
            const isRead = showResult && i === thimblePos;

            p.stroke(isRead ? 210 : 52, isRead ? 48 : 58, isRead ? 48 : 82);
            p.strokeWeight(isRead ? 2.2 : 0.8);
            p.line(thX + 2, ty, thX + 2 + th, ty);

            if (major) {
              p.noStroke(); p.fill(38, 48, 72); p.textSize(7);
              p.textAlign(p.LEFT, p.CENTER); p.text(i.toString(), thX + 20, ty);
            }
          }

          // Reference notch on thimble edge
          p.stroke(48, 54, 78); p.strokeWeight(1.5);
          p.line(thX, y + bH / 2, thX + 4, y + bH / 2);

          // Labels
          p.noStroke(); p.fill(62, 68, 92); p.textSize(8.5);
          p.textAlign(p.CENTER, p.TOP);
          p.text('Barrel', bx + bW * 0.29, y + bH + 9);
          p.text('Thimble', thX + bW * 0.21, y + bH + 9);
        }
      };

      p5Ref.current = new P5(sketch, containerRef.current!);
    }).catch(() => {
      setError('Gagal memuat library simulasi');
    });

    return () => {
      mounted = false;
      p5Ref.current?.remove();
    };
  }, [isClient]);

  useEffect(() => {
    if (p5Ref.current?.doMeasure) p5Ref.current.doMeasure();
  }, [triggerMeasure]);

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
        <div className="text-muted-foreground text-sm">Memuat simulasi...</div>
      </div>
    );
  }

  return <div ref={containerRef} className="w-full h-full min-h-[400px]" />;
}
