import { useEffect, useRef } from "react";

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  layer: number;
}

const LAYERS = 3;
const BEAMS_PER_LAYER = 8;
const MOBILE_LAYERS = 2;
const MOBILE_BEAMS_PER_LAYER = 3;

function createBeam(width: number, height: number, layer: number): Beam {
  const angle = -35 + Math.random() * 10;
  const baseSpeed = 0.5 + layer * 0.4;
  const baseOpacity = 0.07 + layer * 0.05;
  const baseWidth = 10 + layer * 5;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    width: baseWidth,
    length: height * 2.5,
    angle,
    speed: baseSpeed + Math.random() * 0.4,
    opacity: baseOpacity + Math.random() * 0.1,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.025,
    layer,
  };
}

// Velox teal: hsl(165 70% 46%) ~ rgb(35, 199, 158)
const BEAM_R = 35;
const BEAM_G = 199;
const BEAM_B = 158;

export function HeroBeams() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    const noiseCanvas = noiseRef.current;
    if (!wrapper || !canvas || !noiseCanvas) return;
    const ctx = canvas.getContext("2d");
    const nCtx = noiseCanvas.getContext("2d");
    if (!ctx || !nCtx) return;

    const resizeCanvas = () => {
      const rect = wrapper.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const dpr = window.devicePixelRatio || 1;

      sizeRef.current = { w, h };

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      noiseCanvas.width = w * dpr;
      noiseCanvas.height = h * dpr;
      nCtx.setTransform(1, 0, 0, 1, 0, 0);
      nCtx.scale(dpr, dpr);

      beamsRef.current = [];
      const isMobile = w < 768;
      const layers = isMobile ? MOBILE_LAYERS : LAYERS;
      const beamsPerLayer = isMobile ? MOBILE_BEAMS_PER_LAYER : BEAMS_PER_LAYER;
      for (let layer = 1; layer <= layers; layer++) {
        for (let i = 0; i < beamsPerLayer; i++) {
          beamsRef.current.push(createBeam(w, h, layer));
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const generateNoise = () => {
      const imgData = nCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
      for (let i = 0; i < imgData.data.length; i += 4) {
        const v = Math.random() * 255;
        imgData.data[i] = v;
        imgData.data[i + 1] = v;
        imgData.data[i + 2] = v;
        imgData.data[i + 3] = 10;
      }
      nCtx.putImageData(imgData, 0, 0);
    };

    const drawBeam = (beam: Beam) => {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = Math.min(1, beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.4));
      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `rgba(${BEAM_R},${BEAM_G},${BEAM_B},0)`);
      gradient.addColorStop(0.2, `rgba(${BEAM_R},${BEAM_G},${BEAM_B},${pulsingOpacity * 0.5})`);
      gradient.addColorStop(0.5, `rgba(${BEAM_R},${BEAM_G},${BEAM_B},${pulsingOpacity})`);
      gradient.addColorStop(0.8, `rgba(${BEAM_R},${BEAM_G},${BEAM_B},${pulsingOpacity * 0.5})`);
      gradient.addColorStop(1, `rgba(${BEAM_R},${BEAM_G},${BEAM_B},0)`);

      ctx.fillStyle = gradient;
      ctx.filter = `blur(${2 + beam.layer * 2}px)`;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      const { w, h } = sizeRef.current;

      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, "#080a10");
      gradient.addColorStop(1, "#0a0c12");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed * (beam.layer / LAYERS + 0.5);
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -50) {
          beam.y = h + 50;
          beam.x = Math.random() * w;
        }
        drawBeam(beam);
      });

      generateNoise();
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas ref={noiseRef} className="absolute top-0 left-0 w-full h-full" />
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
}
