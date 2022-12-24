// eslint-disable-next-line no-restricted-imports -- only in this file we determine either we include <a /> as child of <NextLink /> based of `newNextLinkBehavior` value
import NextLink from 'next/link';
import React, { ComponentProps, ReactElement, forwardRef } from 'react';

type AnchorProps = Omit<ComponentProps<'a'>, 'ref'> & {
  newWindow?: boolean;
};

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  function Anchor(
    { href = '', children, newWindow, ...props },
    // ref is used in <NavbarMenu />
    forwardedRef
  ): ReactElement {
    if (newWindow) {
      return (
        <a
          aria-selected={false}
          href={href}
          ref={forwardedRef}
          rel='noreferrer'
          target='_blank'
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink href={href} passHref ref={forwardedRef} {...props}>
        <>{children}</>
      </NextLink>
    );
  }
);
