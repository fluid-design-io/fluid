import { useEffect, useRef } from 'react';

import clsxm from '@/lib/clsxm';

import { useTheme } from '@/store/useTheme';

function IndexCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { mode } = useTheme();
  const BASE = mode === 'dark' ? 39 : 243;
  const FACTOR = mode === 'dark' ? 32 : 23;

  const draw = (ctx, x, y, r, g, b) => {
    ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
    ctx.fillRect(x, y, 1, 1);
  };

  const R = function (x, y, t) {
    return Math.floor(FACTOR * Math.cos((x * x - y * y) / 300 + t));
  };

  const G = function (x, y, t) {
    return Math.floor(
      FACTOR *
        Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
    );
  };

  const B = function (x, y, t) {
    return Math.floor(
      FACTOR *
        Math.sin(
          5 * Math.sin(t / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
    );
  };

  useEffect(() => {
    let frameCount = 0;
    let animationFrameId;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const render = () => {
      for (let x = 0; x <= 36; x++) {
        for (let y = 0; y <= 36; y++) {
          const n =
            BASE +
            (R(x, y, frameCount) + G(x, y, frameCount) + B(x, y, frameCount)) /
              3;
          draw(context, x, y, n, n + 2, n + 4);
        }
      }
      frameCount = frameCount + 0.003;
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, mode]);
  return (
    <>
      <canvas
        id='canv'
        width='36'
        height='36'
        className='absolute inset-x-0 top-0 h-full w-full'
        ref={canvasRef}
      />
      <div
        className={clsxm([
          'absolute inset-x-0 bottom-0 h-1/4 w-full',
          '[mask-image:linear-gradient(0deg,rgba(255,255,255,1)_15%,rgba(255,255,255,0))]',
          'bg-gray-100 dark:bg-gray-800 contrast:dark:bg-[rgb(22,23,30)]',
        ])}
      />
    </>
  );
}
export default IndexCanvas;
