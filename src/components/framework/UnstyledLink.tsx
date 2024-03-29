import Link, { LinkProps } from 'next/link';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <Link href={href} {...nextLinkProps} legacyBehavior>
          <a
            ref={ref}
            {...rest}
            className={clsxm(
              'outline-none [-webkit-tap-highlight-color:transparent]',
              className
            )}
          >
            {children}
          </a>
        </Link>
      );
    }

    return (
      <a
        href={href}
        ref={ref}
        rel='noopener noreferrer'
        target='_blank'
        {...rest}
        className={clsxm('cursor-newtab', className)}
      >
        {children}
      </a>
    );
  }
);
UnstyledLink.displayName = 'UnstyledLink';
export default UnstyledLink;
