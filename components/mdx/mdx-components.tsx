/* Source: https://github.com/shuding/nextra/blob/core/packages/nextra-theme-docs/src/mdx-components.tsx */
import { HashtagIcon } from "@heroicons/react/outline";
import cn from "clsx";
import Slugger from "github-slugger";
import "intersection-observer";
import { useRouter } from "next/router";
import React, { ComponentProps, ReactElement, useEffect, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { IS_BROWSER } from "../../lib/constants";
import { useSetActiveAnchor } from "../contexts";
import { Anchor } from "./";

let observer: IntersectionObserver;
let setActiveAnchor: ReturnType<typeof useSetActiveAnchor>;
const slugs = new WeakMap();

if (IS_BROWSER) {
  observer ||= new IntersectionObserver(
    (entries) => {
      setActiveAnchor((f) => {
        const ret = { ...f };

        for (const entry of entries) {
          if (entry?.rootBounds && slugs.has(entry.target)) {
            const [slug, index, depth, text] = slugs.get(entry.target);
            const aboveHalfViewport =
              entry.boundingClientRect.y + entry.boundingClientRect.height <=
              entry.rootBounds.y + entry.rootBounds.height;
            const insideHalfViewport = entry.intersectionRatio > 0;
            ret[slug] = {
              index,
              aboveHalfViewport,
              insideHalfViewport,
              depth,
              text,
            };
          }
        }

        let activeSlug = "";
        let smallestIndexInViewport = Infinity;
        let largestIndexAboveViewport = -1;
        for (let s in ret) {
          ret[s].isActive = false;
          if (
            ret[s].insideHalfViewport &&
            ret[s].index < smallestIndexInViewport
          ) {
            smallestIndexInViewport = ret[s].index;
            activeSlug = s;
          }
          if (
            smallestIndexInViewport === Infinity &&
            ret[s].aboveHalfViewport &&
            ret[s].index > largestIndexAboveViewport
          ) {
            largestIndexAboveViewport = ret[s].index;
            activeSlug = s;
          }
        }

        if (ret[activeSlug]) ret[activeSlug].isActive = true;
        return ret;
      });
    },
    {
      rootMargin: "0px 0px -50%",
      threshold: [0, 1],
    }
  );
}

// Anchor links
const createHeaderLink = (
  Tag: `h${2 | 3 | 4 | 5 | 6}`,
  context: { index: number }
) =>
  function HeaderLink({
    children,
    ...props
  }: ComponentProps<"h2">): ReactElement {
    setActiveAnchor = useSetActiveAnchor();
    const obRef = useRef<HTMLSpanElement>(null);
    const id = Slugger.slug(children);
    const depth = Number(Tag.slice(1));
    const { pathname } = useRouter();
    useEffect(() => {
      if (!obRef.current) return;

      slugs.set(obRef.current, [
        id,
        (context.index += 1),
        depth,
        String(children),
      ]);

      if (obRef.current) observer.observe(obRef.current);

      return () => {
        observer.disconnect();
        slugs.delete(obRef.current!);
        setActiveAnchor((f) => {
          const ret = { ...f };
          delete ret[id!];
          return ret;
        });
      };
    }, []);
    return (
      <Tag className="group pointer-events-none relative" {...props}>
        <span
          className="subheading-anchor -mt-28 block pt-28 md:-mt-24 md:pt-24"
          id={id}
          ref={obRef}
        />
        <div className="pointer-events-auto flex items-center">
          <CopyToClipboard text={`${pathname}#${id}`}>
            <a
              href={`#${id}`}
              className="anchor anchor-link hash-link hash absolute top-28 bottom-0 right-0 ml-0 lg:mt-0.5 flex items-center border-0 opacity-0 focus:opacity-100 group-hover:opacity-100 md:top-24 lg:right-auto lg:-ml-9 xl:-ml-10 pointer-touch:opacity-80"
              title={`Direct link to heading ${id}`}
              aria-live="assertive"
              aria-label={`${`Click to copy section hashtag`}`}
            >
              <div data-tooltip-top="Copy">
                <HashtagIcon className="flex h-6 w-6 items-center justify-center rounded-md p-1 text-primary-400 shadow-sm ring-1 ring-primary-900/5 hover:text-primary-700 hover:shadow hover:ring-primary-900/10 dark:bg-primary-700 dark:text-primary-300 dark:shadow-none dark:ring-0 dark:hover:text-primary-50" />
              </div>
            </a>
          </CopyToClipboard>
          {children}
        </div>
      </Tag>
    );
  };

const A = ({ href = "", ...props }) => (
  <Anchor
    href={href}
    newWindow={href.startsWith("https://")}
    className="ring-primary-500/30 focus:outline-none focus-visible:ring"
    {...props}
  />
);
export const getComponents = ({
  isRawLayout,
  components,
}: {
  isRawLayout?: boolean;
  components?: { [key: string]: any };
}) => {
  if (isRawLayout) {
    return { a: A };
  }

  const context = { index: 0 };
  return {
    h1: (props: ComponentProps<"h1">) => <h1 {...props} />,
    h2: createHeaderLink("h2", context),
    h3: createHeaderLink("h3", context),
    h4: createHeaderLink("h4", context),
    h5: createHeaderLink("h5", context),
    h6: createHeaderLink("h6", context),
    ul: (props: ComponentProps<"ul">) => (
      <ul className="ml-6 mt-6 list-disc first:mt-0" {...props} />
    ),
    ol: (props: ComponentProps<"ol">) => (
      <ol className="ml-6 mt-6 list-decimal" {...props} />
    ),
    li: (props: ComponentProps<"li">) => <li className="my-2" {...props} />,
    blockquote: (props: ComponentProps<"blockquote">) => (
      <blockquote
        className="mt-6 border-l-2 border-primary-300 pl-6 italic text-primary-700 first:mt-0 dark:border-primary-700 dark:text-primary-400"
        {...props}
      />
    ),
    hr: (props: ComponentProps<"hr">) => (
      <hr className="my-8 dark:border-primary-900" {...props} />
    ),
    a: A,
    table: (props: ComponentProps<"table">) => (
      <div className="-mx-4 md:mx-0">
        <div className="inline-block w-full max-w-[100vw] overflow-x-auto md:mx-0 md:max-w-[calc(100vw-14rem-4rem)]">
          <table
            className="mt-6 w-full min-w-full divide-y p-0 px-4 first:mt-0"
            {...props}
          />
        </div>
      </div>
    ),
    p: (props: ComponentProps<"p">) => (
      <p className="mt-6 first:mt-0" {...props} />
    ),
    tr: (props: ComponentProps<"tr">) => (
      <tr
        className={cn(
          "m-0 border-t border-primary-300 p-0 dark:border-primary-600"
        )}
        {...props}
      />
    ),
    th: (props: ComponentProps<"th">) => (
      <th
        className="py-3.5 px-3 text-left text-sm font-semibold text-primary-900 first:pl-4 first:pr-3 dark:text-primary-50 sm:first:pl-6 md:first:pl-0"
        {...props}
      />
    ),
    td: (props: ComponentProps<"td">) => (
      <td
        className="prose prose-sm py-4 px-3 pl-4 align-baseline text-sm text-primary-500 first:pr-3 last:pl-3 last:pr-4 dark:text-primary-300 sm:first:pl-6 sm:last:pr-6 md:first:pl-0 md:last:pr-0"
        {...props}
      />
    ),
    code: (props: ComponentProps<"code">) => (
      <code className="whitespace-nowrap dark:text-primary-50" {...props} />
    ),
    ...components,
  };
};
