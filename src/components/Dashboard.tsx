import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { DynamicImage } from '@/components/framework/DynamicImage';

import UnstyledLink from './framework/UnstyledLink';

const ImageCard = ({ name, src, count = 0, ...props }) => {
  const { t } = useTranslation(['navbar']);
  return (
    <UnstyledLink
      className='clickable focus-ring overflow-hidden rounded-xl'
      href={`/docs/${props?.href ? props.href : src}`}
    >
      <div className='relative'>
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
            light: `/assets/dashboard/${src}-light.png`,
            dark: `/assets/dashboard/${src}-dark.png`,
          }}
          width={350}
          height={200}
          className='my-0'
        />
      </div>
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
    {list.map(({ name, src, ...item }) => (
      <ImageCard key={src} name={name} src={src} {...item} />
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
