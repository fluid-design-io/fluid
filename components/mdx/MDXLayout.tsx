import { MDXRemote } from "next-mdx-remote";

import clsxm from "../../lib/clsxm";
import { ActiveAnchorProvider } from "../contexts";
import { Footer, Header, Navbar, Sidebar, SkipNavContent } from "../framework";
import { TOC } from "./";

const MDXLayout = ({
  header = true,
  sidebar = true,
  components = {},
  ...props
}) => {
  const meta = props.meta || {};
  return (
    <>
      <Header {...meta} />
      <SkipNavContent />
      <div className="flex flex-1 flex-col items-stretch">
        <ActiveAnchorProvider>
          <div className={clsxm(`flex w-full max-w-full flex-1`)}>
            {sidebar && (
              <Sidebar hideNav={false} docNav={props?.docNav || undefined} />
            )}
            <div className="flex-1">
              {header && (
                <Navbar
                  sidebar={sidebar}
                  className={clsxm(
                    false
                      ? "motion-safe:-translate-y-full motion-reduce:pointer-events-none motion-reduce:opacity-0"
                      : "motion-reduce:opacity-100"
                  )}
                />
              )}
              <div className="flex w-full flex-1 flex-col xl:flex-row">
                <main
                  id="main"
                  className="prose prose-stone mx-auto mt-8 max-w-6xl flex-grow p-4 mr-[env(safe-area-inset-right)] prose-headings:font-primary prose-h1:text-4xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:text-primary-900 prose-p:font-primary prose-p:text-primary-800 dark:prose-invert dark:prose-h1:text-primary-50 dark:prose-p:text-primary-300 sm:prose-h1:text-6xl md:p-8 lg:p-14 2xl:p-16"
                >
                  <MDXRemote {...props.source} components={components} />
                </main>
                <TOC />
              </div>
              <Footer />
            </div>
          </div>
        </ActiveAnchorProvider>
      </div>
    </>
  );
};

export default MDXLayout;
