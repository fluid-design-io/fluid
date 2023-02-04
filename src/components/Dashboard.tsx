import { useMotionTemplate, useMotionValue } from 'framer-motion';
import { motion } from 'framer-motion';

import clsxm from '@/lib/clsxm';

import { DynamicImage } from '@/components/framework/DynamicImage';
import { GridPattern } from '@/components/framework/GridPattern';

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
        'ring-gray-900/7.5 ring-inset hover:ring-1 hover:ring-gray-900/10 dark:ring-white/10 dark:hover:ring-white/20',
        'focus-ring group overflow-hidden rounded-xl bg-gray-50 duration-150 dark:bg-gray-900/20'
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
              {count} Components
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
            'relative z-[1] my-0',
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
  const components = [
    {
      name: 'Accordion',
      src: 'accordion',
    },
    {
      name: 'Button',
      src: 'button',
    },
    {
      name: 'Menu',
      src: 'menu',
    },
    {
      name: 'Tab',
      src: 'tab',
    },
    {
      name: 'Toast',
      src: 'toast',
    },
    {
      name: 'Dialog (Modal)',
      src: 'dialog',
    },
  ];
  return <GridWrap list={components} />;
};
const Forms = () => {
  const components = [
    {
      name: 'Validation',
      src: 'form-validation',
      href: 'form/validation',
    },
    {
      name: 'Switch',
      src: 'form-switch',
      href: 'form/switch',
    },
    {
      name: 'Input',
      src: 'form-input',
      href: 'form/input',
    },
    {
      name: 'Select',
      src: 'form-select',
      href: 'form/select',
    },
    {
      name: 'ComboBox',
      src: 'form-combobox',
      href: 'form/combobox',
    },
  ];
  return <GridWrap list={components} />;
};

const UI = () => {
  const uis = [
    {
      name: 'Card',
      src: 'ui-card',
      href: 'ui/card',
      count: 3,
    },
    /* {
      name: 'List',
      src: 'ui-card',
      href: 'ui/list',
      count: 3,
    }, */
  ];
  return <GridWrap list={uis} />;
};

const Plugins = () => {
  const plugins = [
    {
      name: 'Button',
      src: 'plugin-button',
      href: 'plugin/button',
    },
    /* {
      name: "Tooltip",
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
