import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export const Footer = () => {
  const { t } = useTranslation('navbar');
  const navigation = [
    { name: t('Privacy', { ns: 'navbar' }), href: '/privacy' },
    { name: t('Contact', { ns: 'navbar' }), href: '/contact' },
    {
      name: t('Github', { ns: 'navbar' }),
      href: 'https://github.com/fluid-design-io/fluid.git',
    },
  ];
  return (
    <footer className='relative z-[10] mt-8'>
      <div className='mx-auto max-w-7xl py-12 text-xs md:!flex md:!items-center md:!justify-between'>
        <div className='flex justify-center space-x-6 md:!order-2'>
          {navigation.map(({ name, href }) => (
            <Link href={href} key={name}>
              <a className='text-primary-400 hover:text-primary-500'>
                <span className='sr-only'>{name}</span>
                {name}
              </a>
            </Link>
          ))}
        </div>
        <div className='mt-8 md:!order-1 md:!mt-0'>
          <p className='text-center text-xs text-primary-400'>
            &copy; 2022 fluid-design.{' '}
            {t('All rights reserved', { ns: 'navbar' })}
          </p>
        </div>
      </div>
    </footer>
  );
};
