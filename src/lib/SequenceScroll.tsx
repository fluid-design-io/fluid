import {
  MotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';
import React, {
  MutableRefObject,
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import { useTheme } from '@/lib/ThemeContext';

import clsxm from './clsxm';

type VideoScrollProps = {
  as?: React.ElementType;
  baseUrl?: string;
  /**
   * Width of the video
   * @defaultValue 1440
   */
  width?: number;
  /**
   * Height of the video
   * @defaultValue 810
   * @type {number}
   */
  height?: number;
  /**
   * The number of frames video has
   * @defaultValue 120
   * @type {number}
   */
  frameCount?: number;
  /**
   * progress is a function that returns the current progress of the video
   * @type {number{0-1}}
   * @param {number} progress
   * @returns {void}
   */
  progress?: (progress: MotionValue<number>) => void;
  className?: string;
  /**
   * Framer offset prop
   * @type `ScrollOffset`
   */
  offset?: any;
  canvasClassName?: string;
  children?: React.ReactNode;
};

export const SequenceScroll = forwardRef(
  (
    {
      as,
      baseUrl = '/assets/sequence/fluid-design',
      width = 1440,
      height = 810,
      frameCount = 120,
      progress,
      className,
      canvasClassName,
      offset = ['start start', 'end end'],
      children,
    }: VideoScrollProps,
    /**
     * If ref is passed, it will be used to get the container element as the parent of the canvas
     * to calculate the scroll offset
     * otherwise, it will use the ref of the canvas element
     */
    ref: MutableRefObject<HTMLDivElement>
  ) => {
    const Component = as || 'div';
    const id = useId();
    const shouldReduceMotion = useReducedMotion();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const { mode } = useTheme(); // Get the light/dark mode of the site
    const { scrollYProgress } = useScroll({
      target: ref ? ref : canvasRef,
      offset,
    });
    const modeString = mode === 'dark' ? 'dark' : 'light';
    const videoProgress = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
    let frameIndex = 0;

    const update = () => {
      // image width and height is 1440 * 810
      const canvas = canvasRef.current;
      if (!canvas && images.length !== frameCount) return;
      const context = canvas.getContext('2d');
      // Set the canvas to the same dimensions as the image, but if window is smaller, use window size instead
      const ratio = width / height;
      const windowWidth = window.innerWidth;
      const canvasWidth = windowWidth > width ? width : windowWidth;
      const canvasHeight = canvasWidth / ratio;
      const pixelRatio = window.devicePixelRatio;
      canvas.width = canvasWidth * pixelRatio;
      canvas.height = canvasHeight * pixelRatio;

      if (shouldReduceMotion) {
        frameIndex = 0;
      } else {
        frameIndex = Math.min(
          Math.max(0, Math.floor(videoProgress.get() * frameCount - 1)),
          frameCount
        );
      }
      const image = images[frameIndex];
      // console.log("progess", scrollYProgress.get(), frameIndex, image?.src);
      if (!image) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      // draw image to canvas, the image is 1440 * 810
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      progress && progress(videoProgress);
    };
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const imageArray = [];
        if (shouldReduceMotion) {
          // If user prefers reduced motion, load the last frame
          const image = new Image();
          image.src = `${baseUrl}/${modeString}/${frameCount
            .toString()
            .padStart(4, '0')}.webp`;
          imageArray.push(image);
        } else {
          for (let i = 0; i < frameCount; i++) {
            const image = new Image();
            image.src = `${baseUrl}/${modeString}/${(i + 1)
              .toString()
              .padStart(4, '0')}.webp`;
            imageArray.push(image);
          }
        }
        setImages(imageArray);
      }
    }, [mode]);
    useEffect(() => {
      return videoProgress.onChange(() => update());
    });
    // preload the first image
    useEffect(() => {
      if (images[0]) {
        images[0].onload = () => {
          update();
        };
      }
    }, [images]);
    return (
      <Component className={clsxm(className)} ref={ref}>
        {children}
        <canvas
          id={id}
          ref={canvasRef}
          className={clsxm(
            'pointer-events-none h-auto w-auto max-w-full',
            canvasClassName
          )}
        />
      </Component>
    );
  }
);

SequenceScroll.displayName = 'SequenceScroll';
