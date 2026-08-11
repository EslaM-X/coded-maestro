import { useEffect, useRef } from "react";

type Spark = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  a: number;
  life: number;
};

export default function EmberField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const sparks: Spark[] = [];

    const spawn = (initial = false): Spark => ({
      x: Math.random() * width,
      y: initial ? Math.random() * height : height + Math.random() * 60,
      r: Math.random() * 1.8 + 0.4,
      vy: -(Math.random() * 0.35 + 0.12),
      vx: (Math.random() - 0.5) * 0.22,
      a: Math.random() * 0.5 + 0.15,
      life: Math.random(),
    });

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.min(90, Math.round(width / 14));
      sparks.length = 0;
      for (let i = 0; i < target; i++) sparks.push(spawn(true));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i]!;
        s.x += s.vx;
        s.y += s.vy;
        s.life += 0.006;
        const flicker = 0.6 + Math.sin(s.life * 6) * 0.4;
        const alpha = s.a * flicker;
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 6);
        grad.addColorStop(0, `rgba(255, 200, 90, ${alpha})`);
        grad.addColorStop(0.4, `rgba(255, 140, 30, ${alpha * 0.35})`);
        grad.addColorStop(1, "rgba(255, 120, 0, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 6, 0, Math.PI * 2);
        ctx.fill();
        if (s.y < -20) sparks[i] = spawn();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduce) raf = requestAnimationFrame(draw);
    else draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
