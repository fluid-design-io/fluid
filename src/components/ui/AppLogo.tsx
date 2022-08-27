import logoDark from '/public/assets/icon-dark.svg';
import logoLight from '/public/assets/icon-light.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const AppLogo: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <div className={` ${props.className ? props.className : ``}`}>
      <Link href={'/'}>
        <a
          className={`flex flex-shrink-0 h-7 w-7`}
          aria-label='Navigate to home page'
        >
          <span className='sr-only'>Fluid Design</span>
          <div className={`w-auto h-7 dark:hidden`}>
            <Image alt='logo' src={logoDark} width={28} height={28} />
          </div>
          <div className='hidden w-auto h-7 dark:!block'>
            <Image alt='logo' src={logoLight} width={28} height={28} />
          </div>
        </a>
      </Link>
    </div>
  );
};
export default AppLogo;
