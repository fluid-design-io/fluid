import UnstyledLink from './framework/UnstyledLink';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const ImageCard = ({ name, src, count = 0 }) => {
  const { t } = useTranslation(['navbar']);
  return (
    <UnstyledLink
      href={`/docs/${src}`}
      className='clickable focus-ring relative overflow-hidden rounded-xl'
    >
      <div className='absolute bottom-0 left-0 right-0 z-[2] flex w-full items-baseline justify-between px-4 pb-2 rtl:flex-row-reverse'>
        <span className='text-left text-lg font-medium text-primary-700 rtl:text-right dark:text-primary-200'>
          {name}
        </span>
        {count > 0 && (
          <span className='text-right text-xs font-medium text-primary-500 rtl:text-left dark:text-primary-400'>
            {count} {t(`Components`)}
          </span>
        )}
      </div>
      <div className='block dark:hidden'>
        <Image
          src={`/assets/dashboard/${src}-light.png`}
          alt={name}
          layout='responsive'
          width='350'
          height='200'
        />
      </div>
      <div className='hidden dark:block'>
        <Image
          src={`/assets/dashboard/${src}-dark.png`}
          alt={name}
          layout='responsive'
          width='350'
          height='200'
        />
      </div>
    </UnstyledLink>
  );
};

const GridWrap = ({ children }) => {
  return (
    <div className='grid w-full grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-6 lg:gap-8'>
      {children}
    </div>
  );
};

const GridItems = ({
  list,
}: {
  list: { name: string; src: string; count?: number }[];
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
  ];
  return (
    <GridWrap>
      <GridItems list={components} />
    </GridWrap>
  );
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
  return (
    <GridWrap>
      <GridItems list={uis} />
    </GridWrap>
  );
};

Components.displayName = 'Components';
UI.displayName = 'UI';

export const Dashboard = Object.assign(
  {},
  {
    Components,
    UI,
  }
);
