import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
// import Navbar from "./Navbar";
import { Header } from "./Header";
import Footer from "./Footer";
import { MotionPageProps, SiteMeta } from "../../interfaces/framwork";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Page({
  header = true,
  sidebar = true,
  children,
  className,
  meta,
  motionProps,
}: {
  header?: boolean;
  sidebar?: boolean;
  children?: any;
  className?: string;
  meta?: SiteMeta;
  motionProps?: MotionPageProps;
}) {
  const { asPath } = useRouter();
  const enableMotion =
    typeof motionProps?.enable === "undefined" || motionProps?.enable === true
      ? true
      : false;
  return (
    <>
      <Header {...meta} />
      <div className="overflow-x-hidden bg-stone-100 dark:bg-stone-800 flex flex-col min-h-screen">
        {header && <Navbar />}
        <div className="flex flex-1 max-w-[1400px] mx-auto relative  w-full">
          {sidebar && <Sidebar />}
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={`page-${asPath}`}
              initial={enableMotion ? { opacity: 0 } : {}}
              animate={enableMotion ? { opacity: 1 } : {}}
              exit={enableMotion ? { opacity: 0 } : {}}
              transition={enableMotion ? { duration: 0.65 } : {}}
              className={`flex-1 ${className ? className : ``} ${
                sidebar
                  ? `max-h-[calc(100vh-61px)] overflow-auto mt-[61px]`
                  : ``
              }`}
            >
              {children}
              <Footer />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default Page;
