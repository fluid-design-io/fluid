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
      <Tag className="group relative pointer-events-none" {...props}>
        <span
          className="subheading-anchor -mt-28 md:-mt-24 pt-28 md:pt-24 block"
          id={id}
          ref={obRef}
        />
        <div className="pointer-events-auto">
          <CopyToClipboard text={`${pathname}#${id}`}>
            <a
              href={`#${id}`}
              className="absolute top-28 md:top-24 bottom-0 right-0 flex items-center ml-0 pr-4 mt-0.5 border-0 opacity-0 anchor anchor-link hash-link md:!right-auto md:!pr-auto md:!-ml-10 lg:-ml-7 xl:-ml-10 hash group-hover:opacity-100 focus:opacity-100"
              title={`Direct link to heading ${id}`}
              aria-live="assertive"
              aria-label={`${`Click to copy section hashtag`}`}
            >
              <div data-tooltip-top="Copy">
                <HashtagIcon className="flex items-center justify-center w-6 h-6 p-1 text-primary-400 rounded-md shadow-sm ring-1 ring-primary-900/5 hover:ring-primary-900/10 hover:shadow hover:text-primary-700 dark:bg-primary-700 dark:text-primary-300 dark:hover:text-primary-50 dark:shadow-none dark:ring-0" />
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
        className="mt-6 first:mt-0 border-l-2 border-primary-300 pl-6 italic text-primary-700 dark:border-primary-700 dark:text-primary-400"
        {...props}
      />
    ),
    hr: (props: ComponentProps<"hr">) => (
      <hr className="my-8 dark:border-primary-900" {...props} />
    ),
    a: A,
    table: (props: ComponentProps<"table">) => (
      <div className="-mx-4 md:mx-0">
        <div className="inline-block max-w-[100vw] md:max-w-[calc(100vw-14rem-4rem)] w-full overflow-x-auto md:mx-0">
          <table
            className="mt-6 first:mt-0 p-0 w-full divide-y min-w-full px-4"
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
        className="py-3.5 px-3 text-left text-sm font-semibold text-primary-900 dark:text-primary-50 first:pl-4 first:pr-3 sm:first:pl-6 md:first:pl-0"
        {...props}
      />
    ),
    td: (props: ComponentProps<"td">) => (
      <td
        className="py-4 px-3 text-sm text-primary-500 dark:text-primary-300 pl-4 first:pr-3 sm:first:pl-6 md:first:pl-0 sm:last:pr-6 md:last:pr-0 last:pl-3 last:pr-4 prose prose-sm align-baseline"
        {...props}
      />
    ),
    code: (props: ComponentProps<"code">) => (
      <code className="dark:text-primary-50 whitespace-nowrap" {...props} />
    ),
    ...components,
  };
};
