import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logoDark from '/public/assets/icon-dark.svg';
import logoLight from '/public/assets/icon-light.svg';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const AppLogo: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <div className={` ${props.className ? props.className : ``}`}>
      <Link
        href='/'
        aria-label='Navigate to home page'
        className='flex h-7 w-7 flex-shrink-0'
      >
        <>
          <span className='sr-only'>Fluid Design</span>
          <div className='h-7 w-auto dark:hidden'>
            <Image alt='logo' className='h-7 w-7' src={logoDark} />
          </div>
          <div className='hidden h-7 w-auto dark:!block'>
            <Image alt='logo' className='h-7 w-7' src={logoLight} />
          </div>
        </>
      </Link>
    </div>
  );
};
export default AppLogo;
