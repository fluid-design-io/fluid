import { useMotionTemplate, useMotionValue } from 'framer-motion';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import { DynamicImage } from '@/components/framework/DynamicImage';
import { GridPattern } from '@/components/framework/GridPattern';
import clsxm from '@/lib/clsxm';

import UnstyledLink from './framework/UnstyledLink';

function ResourcePattern({
  mouseX,
  mouseY,
  ...gridProps
}: {
  mouseX: any;
  mouseY: any;
  y: number;
  squares: number[][];
}) {
  const maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className='pointer-events-none'>
      <div className='absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50'>
        <GridPattern
          width={72}
          height={56}
          x='50%'
          className='absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/[0.05] dark:stroke-white/[0.05]'
          {...gridProps}
        />
      </div>
      <motion.div
        className='absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-100 to-secondary-100 opacity-0 transition duration-300 group-hover:opacity-70 dark:from-primary-800/40 dark:to-secondary-800/70'
        style={style}
      />
      <motion.div
        className='absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100'
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x='50%'
          className='absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/[.15] dark:stroke-white/10'
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}

const patterns = [
  {
    y: 16,
    squares: [
      [0, 1],
      [1, 3],
    ],
  },
  {
    y: -6,
    squares: [
      [-1, 2],
      [1, 3],
    ],
  },
  {
    y: 32,
    squares: [
      [0, 2],
      [1, 4],
    ],
  },
  {
    y: 22,
    squares: [[0, 1]],
  },
];

const ImageCard = ({ name, src, count = 0, patternIndex, ...props }) => {
  const { t } = useTranslation(['navbar']);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function onTouchMove({ currentTarget, touches }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(touches[0].clientX - left);
    mouseY.set(touches[0].clientY - top);
  }
  return (
    <UnstyledLink
      className={clsxm(
        'hover:ring-1 ring-inset ring-gray-900/7.5 hover:ring-gray-900/10 dark:ring-white/10 dark:hover:ring-white/20',
        'focus-ring overflow-hidden rounded-xl group duration-150 bg-gray-50 dark:bg-gray-900/20'
      )}
      href={`/docs/${props?.href ? props.href : src}`}
    >
      <motion.div
        className='relative touch-pan-y'
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      >
        <ResourcePattern
          {...{
            ...patterns[patternIndex % patterns.length || 0],
          }}
          mouseX={mouseX}
          mouseY={mouseY}
        />
        <div className='absolute bottom-0 left-0 right-0 z-[2] flex w-full items-baseline justify-between px-4 pb-2 rtl:flex-row-reverse'>
          <span className='text-left text-lg font-medium text-gray-700 rtl:text-right dark:text-gray-200'>
            {name}
          </span>
          {count > 0 && (
            <span className='text-right text-xs font-medium text-gray-500 rtl:text-left dark:text-gray-400'>
              {count} {t(`Components`)}
            </span>
          )}
        </div>
        <DynamicImage
          alt={name}
          src={{
            light: `/assets/dashboard/${src}-light.webp`,
            dark: `/assets/dashboard/${src}-dark.webp`,
          }}
          width={350}
          height={200}
          className={clsxm(
            'my-0 z-[1] relative',
            '[mask-image:url("/assets/dashboard/mask.svg")] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [mask-mode:alpha]'
          )}
        />
      </motion.div>
    </UnstyledLink>
  );
};

const GridWrap = ({ children = null, list = [] }) => {
  return (
    <div className='grid w-full grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-6 lg:gap-8'>
      {list.length > 0 ? <GridItems list={list} /> : children}
    </div>
  );
};

const GridItems = ({
  list,
}: {
  list: { name: string; src: string; count?: number; href?: string }[];
}) => (
  <>
    {list.map(({ name, src, ...item }, i) => (
      <ImageCard key={src} name={name} src={src} {...item} patternIndex={i} />
    ))}
  </>
);

const Components = () => {
  const { t } = useTranslation(['navbar']);
  const components = [
    {
      name: t(`Accordion`),
      src: 'accordion',
    },
    {
      name: t(`Button`),
      src: 'button',
    },
    {
      name: t(`Menu`),
      src: 'menu',
    },
    {
      name: t(`Tab`),
      src: 'tab',
    },
  ];
  return <GridWrap list={components} />;
};
const Forms = () => {
  const { t } = useTranslation(['navbar']);
  const components = [
    {
      name: t(`Validation`),
      src: 'form-validation',
      href: 'form/validation',
    },
    {
      name: t(`Switch`),
      src: 'form-switch',
      href: 'form/switch',
    },
    {
      name: t(`Input`),
      src: 'form-input',
      href: 'form/input',
    },
    {
      name: t(`Select`),
      src: 'form-select',
      href: 'form/select',
    },
    {
      name: t(`ComboBox`),
      src: 'form-combobox',
      href: 'form/combobox',
    },
  ];
  return <GridWrap list={components} />;
};

const UI = () => {
  const { t } = useTranslation(['navbar']);
  const uis = [
    {
      name: t(`Card`),
      src: 'card',
      count: 3,
    },
  ];
  return <GridWrap list={uis} />;
};

const Plugins = () => {
  const { t } = useTranslation(['navbar']);
  const plugins = [
    {
      name: t(`Button`),
      src: 'plugin-button',
      href: 'plugin/button',
    },
    /* {
      name: t(`Tooltip`),
      src: 'plugin-tooltip',
      href: 'plugin/tooltip',
    }, */
  ];
  return <GridWrap list={plugins} />;
};

Components.displayName = 'Components';
Forms.displayName = 'Forms';
UI.displayName = 'UI';
Plugins.displayName = 'Plugins';

export const Dashboard = Object.assign(
  {},
  {
    Components,
    Forms,
    UI,
    Plugins,
  }
);
