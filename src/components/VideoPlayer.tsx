import clsxm from "@/lib/clsxm";
import ReactPortal from "@/lib/ReactPortal";
import { Button } from "@fluid-design/fluid-ui";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { MdFullscreen } from "react-icons/md";
import {
  useBounceTransition,
  linearTransition,
  animationSimple,
} from "@/lib/useTransitionValues";

type VideoPlayerProps = {
  src: {
    light: string;
    dark: string;
  };
  title?: string;
  description?: string;
  href?: string;
  acitveClassName?: string;
  className?: string;
  containerClassName?: string;
  showTitle?: boolean;
  showDescription?: boolean;
};

function VideoPlayer({
  src: { light, dark },
  title,
  description,
  href,
  className,
  acitveClassName,
  containerClassName,
  showTitle = false,
  showDescription = false,
}: VideoPlayerProps) {
  const id = useId();
  const videoRefLight = useRef<HTMLVideoElement>(null);
  const videoRefDark = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const bounceTransition = useBounceTransition();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const videoClassName = [
    "w-full max-w-2xl rounded-xl",
    isOpen
      ? ["aspect-[4/2.8] object-contain", acitveClassName]
      : "h-full object-cover",
    className,
  ];

  const videoProps = shouldReduceMotion
    ? {
        playsInline: true,
        loop: false,
        controls: true,
        autoPlay: false,
        muted: true,
        transition: linearTransition,
      }
    : {
        playsInline: true,
        loop: true,
        controls: false,
        autoPlay: true,
        muted: true,
        transition: bounceTransition,
      };
  const videos = (
    <>
      {!isOpen && (
        <span className='absolute top-4 right-4 z-[8] text-gray-400 hocus:text-gray-700 ltr:left-4 ltr:right-auto dark:text-gray-600 dark:hocus:text-gray-300'>
          <MdFullscreen className='h-5 w-5' />
        </span>
      )}
      <motion.video
        className={clsxm(videoClassName, "z-[5] dark:hidden")}
        layoutId={`video-light-${id}`}
        ref={videoRefLight}
        {...videoProps}
      >
        <source src={light} type='video/mp4' />
      </motion.video>
      <motion.video
        className={clsxm(videoClassName, "z-[5] hidden dark:block")}
        layoutId={`video-dark-${id}`}
        ref={videoRefDark}
        {...videoProps}
      >
        <source src={dark} type='video/mp4' />
      </motion.video>
    </>
  );
  function handleEscape(e) {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      // listen for esc key
      document.addEventListener("keydown", handleEscape);
      return () => {
        // remove event listener
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen]);

  // manually pause videos if reduce motion is enabled
  useEffect(() => {
    if (shouldReduceMotion) {
      videoRefLight.current?.pause();
      videoRefDark.current?.pause();
      // show controls
      videoRefLight.current?.setAttribute("controls", "true");
      videoRefDark.current?.setAttribute("controls", "true");
    }
  }, [shouldReduceMotion]);

  // manually play videos if reduce motion is enabled and isOpen is true

  useEffect(() => {
    if (shouldReduceMotion && isOpen) {
      videoRefLight.current?.play();
      videoRefDark.current?.play();
    }
  }, [shouldReduceMotion, isOpen]);

  return (
    <>
      <ReactPortal wrapperId={`react-portal-video-container`}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='fixed inset-0 z-30 flex h-full max-h-screen w-full flex-col items-center justify-center gap-4 overflow-auto py-8 px-4 lg:gap-8'
              layout
              onClick={() => setIsOpen(false)}
            >
              {videos}
              {/* Info Bar */}
              {title && (
                <motion.div
                  className='z-[5] w-full max-w-2xl rounded-xl bg-white px-4 py-2 dark:bg-gray-600'
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.5,
                    },
                  }}
                >
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='font-semibold text-gray-800 dark:text-gray-100'>
                        {title}
                      </p>
                      {description && (
                        <p className='text-sm text-gray-600 dark:text-gray-200'>
                          {description}
                        </p>
                      )}
                    </div>
                    {href && (
                      <Button
                        as='a'
                        color='sky'
                        href={href}
                        icon={HiExternalLink}
                        iconOnly
                        rel='noopener noreferrer'
                        target='_blank'
                        weight='clear'
                      />
                    )}
                  </div>
                </motion.div>
              )}
              <motion.div
                animate={{ opacity: 1 }}
                className='fixed inset-0 h-full w-full bg-slate-200/80 dark:bg-slate-800/80'
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </ReactPortal>
      <div className='flex flex-col gap-2'>
        <motion.div
          aria-label='Open video in fullscreen'
          onClick={handleOpen}
          role='button'
          tabIndex={0}
          className={clsxm(
            "h-full w-full rounded-2xl p-2 dark:bg-stone-700/50",
            containerClassName
          )}
        >
          {videos}
        </motion.div>
        {showTitle && title && (
          <p
            className={clsxm(
              "text-sm",
              showDescription
                ? "font-semibold text-gray-800 dark:text-gray-100"
                : "text-center text-gray-600 dark:text-gray-200"
            )}
          >
            {title}
          </p>
        )}
        {showDescription && description && (
          <p className='text-sm text-gray-600 dark:text-gray-200'>
            {description}
          </p>
        )}
      </div>
    </>
  );
}
export default VideoPlayer;
