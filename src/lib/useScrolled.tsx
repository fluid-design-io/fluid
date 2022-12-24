import { useScroll, useVelocity } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Calculates the scroll position of the given element.
 *
 * @returns an array contains [`isScrolled`, `scrollY`, `velocity`]
 *
 * `isScrolled` is true if the element is scrolled into view.
 *
 * `scrollY` A motion value that represents the scroll position of the element.
 *
 * `velocity` A motion value that represents the velocity of the element.
 */
export const useScrolled = (): UseScrolled => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  /* https://johnchourajr.medium.com/show-hide-on-scroll-with-framer-motion-b6f937c2d662 */
  function update() {
    // If the velocity is greater than 10801, it's considered a intentional scroll
    // Then we set the scrolled state based on direction of scroll
    const sy = scrollY.get();
    const syp = scrollY.getPrevious();
    if (Math.abs(velocity.getVelocity()) > 10801) {
      if (sy < syp) {
        setScrolled(false);
      } else if (sy > 100 && sy > syp) {
        setScrolled(true);
      }
    }
  }

  /** update the onChange callback to call for `update()` **/
  useEffect(() => {
    return scrollY.onChange(() => update());
  });
  return [scrolled, scrollY, velocity];
};

export type UseScrolled = [
  boolean,
  ReturnType<typeof useScroll>['scrollY'],
  ReturnType<typeof useVelocity>
];
