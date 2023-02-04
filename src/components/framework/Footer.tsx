import Link from 'next/link';

export const Footer = () => {
  const navigation = [
    { name: 'Privacy', href: '/privacy' },

    { name: 'Contact', href: '/contact' },
    {
      name: 'Github',
      href: 'https://github.com/fluid-design-io/fluid.git',
    },
  ];
  return (
    <footer className='relative z-[10] mt-8'>
      <div className='mx-auto max-w-7xl px-4 py-12 text-xs md:!flex md:!items-center md:!justify-between md:px-8 lg:px-16 2xl:px-0'>
        <div className='flex justify-center space-x-6 md:!order-2'>
          {navigation.map(({ name, href }) => (
            <Link
              href={href}
              key={name}
              className='text-gray-400 hover:text-gray-500'
            >
              {name}
            </Link>
          ))}
        </div>
        <div className='mt-8 md:!order-1 md:!mt-0'>
          <p className='text-center text-xs text-gray-400'>
            &copy; 2022 fluid-design. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
