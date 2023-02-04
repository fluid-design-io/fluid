import { motion } from 'framer-motion';

import clsxm from '@/lib/clsxm';

import { AccordionExamples, ButtonExamples, MenuExamples } from '@/components';
import { InputExamples } from '@/components/form/InputExamples';
import { SwitchExamples } from '@/components/form/SwitchExamples';
import IndexCard from '@/components/instance/IndexCard';
import IndexList from '@/components/instance/IndexList';

import { FeatureCardProps } from '@/interfaces/featureCard';

import animationDark from '~/assets/index/animation-dark.png';
import animationLight from '~/assets/index/animation-light.png';
import contrastDark from '~/assets/index/contrast-dark.png';
import contrastLight from '~/assets/index/contrast-light.png';
import darkmodeDark from '~/assets/index/darkmode-dark.png';
import darkmodeLight from '~/assets/index/darkmode-light.png';
import keyboardDark from '~/assets/index/keyboard-dark.png';
import keyboardLight from '~/assets/index/keyboard-light.png';
import motionDark from '~/assets/index/motion-dark.png';
import motionLight from '~/assets/index/motion-light.png';
import multiPlatformDark from '~/assets/index/multi-platform-dark.png';
import multiPlatformLight from '~/assets/index/multi-platform-light.png';
import responsiveDark from '~/assets/index/responsive-dark.png';
import responsiveLight from '~/assets/index/responsive-light.png';
import screenReaderDark from '~/assets/index/screen-reader-dark.png';
import screenReaderLight from '~/assets/index/screen-reader-light.png';

const Wrap = ({ children, key, className = '' }) => (
  <motion.div
    key={key}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    initial={{ y: 10, opacity: 0 }}
    transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
    className={clsxm(
      'grid h-full w-full flex-1 place-items-center p-4',
      className
    )}
  >
    {children}
  </motion.div>
);

export const indexElements = [
  {
    category: 'Components',
    lists: [
      {
        name: 'Accordion',
        component: (
          <Wrap key='index.components.accordion'>
            <AccordionExamples.Simple />
          </Wrap>
        ),
      },
      {
        name: 'Button',
        component: (
          <Wrap key='index.components.button'>
            <ButtonExamples.Showcase />
          </Wrap>
        ),
      },
      {
        name: 'Menu',
        component: (
          <Wrap key='index.components.menu'>
            <MenuExamples.Default className='h-4/5 !w-full sm:!w-4/5' />
          </Wrap>
        ),
      },
    ],
  },
  {
    category: 'Forms',
    lists: [
      {
        name: 'Input',
        component: (
          <Wrap key='index.forms.input'>
            <InputExamples.Demo />
          </Wrap>
        ),
      },
      {
        name: 'Switch',
        component: (
          <Wrap key='index.forms.switch'>
            <SwitchExamples.Demo className='h-4/5 !w-full sm:!w-4/5' />
          </Wrap>
        ),
      },
    ],
  },
  {
    category: 'UI',
    lists: [
      {
        name: 'Card',
        component: (
          <Wrap key='div.card'>
            <IndexCard />
          </Wrap>
        ),
      },
      {
        name: 'List',
        component: (
          <Wrap key='div.list'>
            <IndexList />
          </Wrap>
        ),
      },
    ],
  },
];

export const featuresList: FeatureCardProps[] = [
  {
    image: {
      light: darkmodeLight,
      dark: darkmodeDark,
    },
    title: 'Dark Mode',
    description:
      'Automatically switch light and dark modes based on your operating system preference.',
  },
  {
    image: {
      light: responsiveLight,
      dark: responsiveDark,
    },
    title: 'Responsive',
    description:
      'Components that work for all screen sizes look elegant on phones, tablets, or desktops.',
  },
  {
    image: {
      light: multiPlatformLight,
      dark: multiPlatformDark,
    },
    title: 'Multi-platform',
    description:
      "Adjust styles based on users' primary pointer, for example, mouse, trackpad, or finger.",
  },
  {
    image: {
      light: animationLight,
      dark: animationDark,
    },
    title: 'Animation',
    description:
      'Every component has its own purpose, so its animations and transitions are unique as well.',
  },
  {
    image: {
      light: keyboardLight,
      dark: keyboardDark,
    },
    title: 'Keyboard Focus',
    description:
      'Clickable elements can be triggered only using keyboard, with beautiful focus highlight.',
  },
  {
    image: {
      light: screenReaderLight,
      dark: screenReaderDark,
    },
    title: 'Screen Reader',
    description:
      'Optimized for people who have visual disabilities to prompt clear and meaningful descriptions.',
  },
  {
    image: {
      light: contrastLight,
      dark: contrastDark,
    },
    title: 'Contrast',
    description:
      'Optimized for people who have visual disabilities to make content more differentiable.',
  },
  {
    image: {
      light: motionLight,
      dark: motionDark,
    },
    title: 'Reduce Motion',
    description:
      'Animations are awesome, but having a fallback is crucial for users who prefer less motion.',
  },
];
