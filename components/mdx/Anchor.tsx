import React, { forwardRef, ComponentProps, ReactElement } from "react";
// eslint-disable-next-line no-restricted-imports -- only in this file we determine either we include <a /> as child of <NextLink /> based of `newNextLinkBehavior` value
import NextLink from "next/link";

type AnchorProps = Omit<ComponentProps<"a">, "ref"> & {
  newWindow?: boolean;
};

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  function Anchor(
    { href = "", children, newWindow, ...props },
    // ref is used in <NavbarMenu />
    forwardedRef
  ): ReactElement {
    if (newWindow) {
      return (
        <a
          ref={forwardedRef}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-selected={false}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink href={href} passHref>
        <a ref={forwardedRef} {...props}>
          {children}
        </a>
      </NextLink>
    );
  }
);
