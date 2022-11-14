import { useReducedMotion } from "framer-motion";

export const useBounceTransition = () => {
  const shouldReduceMotion = useReducedMotion();
  const bounceTransition = shouldReduceMotion
    ? { duration: 0.2 }
    : {
        type: "spring",
        bounce: 0.15,
      };
  return bounceTransition;
};

export const linearTransition = {
  duration: 0.2,
};

export const animationSimple = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
