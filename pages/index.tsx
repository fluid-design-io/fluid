import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Page from "../components/framework/Page";
import IndexCard from "../components/instance/IndexCard";
import IndexElegant from "../components/instance/IndexElegant";
import IndexEnterExit from "../components/instance/IndexEnterExit";
import IndexGlass from "../components/instance/IndexGlass";
import IndexList from "../components/instance/IndexList";
import IndexSharedLayout from "../components/instance/IndexSharedLayout";
import IndexSimple from "../components/instance/IndexSimple";
import IndexSoft from "../components/instance/IndexSoft";
import { SiteMeta } from "../interfaces/framwork";
import bgDark from "../public/assets/index-bg-dark.jpg";
import bgLight from "../public/assets/index-bg-light.jpg";

const items = [
  {
    category: "Designs",
    lists: [
      {
        name: "Elegant",
        component: <IndexElegant key={`div.elegant`} />,
      },
      {
        name: "Simple",
        component: <IndexSimple key={`div.simple`} />,
      },
      {
        name: "Soft",
        component: <IndexSoft key={`div.soft`} />,
      },
      {
        name: "Glass",
        component: <IndexGlass key={`div.glass`} />,
      },
    ],
  },
  {
    category: "Components",
    lists: [
      {
        name: "Card",
        component: <IndexCard key={`div.card`} />,
      },
      {
        name: "List",
        component: <IndexList key={`div.list`} />,
      },
    ],
  },
  {
    category: "Transitions",
    lists: [
      {
        name: "Enter & Exit",
        component: <IndexEnterExit key={`div.enter`} />,
      },
      {
        name: "Shared Layout",
        component: <IndexSharedLayout key={`div.sharedlayout`} />
      },
    ],
  },
];

export default function Home() {
  const [selected, setSelected] = useState("Elegant");
  const selectedStyle = (item) => {
    return selected === item
      ? `text-stone-900 dark:text-stone-800 bg-white dark:bg-stone-300 shadow`
      : `text-stone-500/80 dark:text-stone-400 hover:text-stone-600 dark:hover:text-stone-100 hover:bg-stone-50/80 dark:hover:bg-stone-300/10 focus:text-stone-600 dark:focus:text-stone-100 focus:bg-stone-50/80 dark:focus:bg-stone-300/10`;
  };
  const selectedComponent = (selected) => {
    let match = [];
    items.forEach(
      (item) =>
        (match = match.concat(
          item.lists.filter((list) => list.name === selected)
        ))
    );
    return match[0]?.component;
  };

  const controls = useAnimation();
  const y = useMotionValue(0);

  const onDrag = (e, info) => {
    const { point } = info;
    y.set(point.y);
  };

  function onDragEnd(event, info) {
    const { velocity, point } = info;
    const shouldClose = velocity.y > 20 || (velocity.y >= 0 && point.y > 45);
    if (shouldClose) {
      controls.start("hidden");
      // onClose();
    } else {
      controls.start("visible");
      // onOpen();
    }
  }

  const selectionBody = items.map((item) => (
    <ul
      key={item.category}
      className="px-2 border-t border-stone-50/60 dark:border-stone-500/30 py-1 space-y-1"
    >
      <li className="px-2 dark:text-stone-300 text-stone-600 font-semibold pointer-events-none">
        {item.category}
      </li>
      {item.lists.map((list) => (
        <li>
          <button
            onClick={() => {
              controls.start("hidden");
              setSelected(list.name);
            }}
            onFocus={() => controls.start("visible")}
            className={`${selectedStyle(
              list.name
            )} px-2 py-1 transition w-full text-left rounded-md overflow-hidden focus:outline-none focus:ring-1 focus:ring-stone-200/50 dark:focus:ring-stone-50`}
          >
            {list.name}
          </button>
        </li>
      ))}
    </ul>
  ));

  const meta: SiteMeta = {
    title: "Fluid Design",
    description: "A collection of beautifully designed components",
  };

  return (
    <Page meta={meta} sidebar={false} className="">
      <div className="absolute z-0 top-0 w-full filter blur-xl hidden dark:block">
        <Image src={bgDark} className="w-screen" layout="responsive" />
      </div>
      <div className="absolute z-0 top-0 w-full filter blur-xl dark:hidden block">
        <Image src={bgLight} className="w-screen" layout="responsive" />
      </div>
      <div className="z-[1] relative">
        <h2 className="block font-[Nunito] md:hidden pt-20 opacity-70 font-semibold px-4 dark:text-stone-100">
          FluidDesign
        </h2>
        <h1 className="mx-auto dark:text-stone-100 font-bold px-4 text-3xl md:text-6xl md:text-center pt-2 md:pt-48 max-w-4xl">
          Modern design components with smooth transitions.
        </h1>
        <div className="justify-center pt-24 hidden md:flex">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-[80%] h-[380px] max-w-[680px] rounded-xl border border-stone-200/50 dark:border-stone-700 bg-stone-100 dark:bg-stone-700/50 flex overflow-hidden shadow-lg"
          >
            <div className="min-w-[180px] bg-stone-50 dark:bg-stone-700 flex-col relative">
              <div className="flex items-center h-8 space-x-1.5 px-3">
                <div className="w-2.5 h-2.5 bg-stone-300 dark:bg-stone-600 rounded-full" />
                <div className="w-2.5 h-2.5 bg-stone-300 dark:bg-stone-600 rounded-full" />
                <div className="w-2.5 h-2.5 bg-stone-300 dark:bg-stone-600 rounded-full" />
              </div>
              <div className="flex justify-center items-center flex-1">
                <div className="w-full text-sm">{selectionBody}</div>
              </div>
            </div>
            <div className="p-4 w-full relative flex justify-center items-center flex-1">
              <AnimatePresence exitBeforeEnter>
                {selectedComponent(selected)}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
        <div className="max-w-[480px] mx-auto block md:hidden pt-16 px-8">
          <div className="relative rounded-[4.7rem] shadow-lg shadow-stone-500/10 dark:shadow-stone-900">
            <div className="notch-container absolute w-full h-24 z-20">
              <div className="notch w-[40%] h-[2.15rem] mx-auto bg-stone-300 dark:bg-stone-700 rounded-bl-[1rem] rounded-br-[1rem]" />
            </div>
            <div className="">
              <div className="inner aspect-[1.125/2.436] w-full h-full  rounded-[3rem] border-[0.825rem] border-stone-300 dark:border-stone-700 pb-4 relative flex justify-center items-start overflow-hidden dark:bg-stone-700/50">
                <div className="w-full h-[calc(100%-120px)] flex justify-center items-center relative">
                  <AnimatePresence exitBeforeEnter>
                    {selectedComponent(selected)}
                  </AnimatePresence>
                </div>
                <motion.div
                  className="bg-stone-900/10 dark:bg-stone-900/30 absolute z-[9] w-full h-full top-0 left-0"
                  animate={controls}
                  initial="hidden"
                  variants={{
                    visible: { opacity: 1, pointerEvents: "auto" },
                    hidden: { opacity: 0, pointerEvents: "none" },
                  }}
                  transition={{
                    delay: 0,
                  }}
                  onClick={() => controls.start("hidden")}
                />
                <motion.div
                  className="bg-stone-50 dark:bg-stone-800 rounded-t-xl w-full h-full absolute z-10 pb-36 shadow-2xl bottom-[0%]"
                  drag="y"
                  onDragEnd={onDragEnd}
                  onDrag={onDrag}
                  initial="hidden"
                  animate={controls}
                  transition={{
                    type: "spring",
                    damping: 40,
                    stiffness: 300,
                  }}
                  variants={{
                    visible: { translateY: "30%" },
                    hidden: { translateY: "80%" },
                  }}
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={0.4}
                  tabIndex={-1}
                >
                  <div className="w-8 h-1.5 bg-stone-300/60 dark:bg-stone-500 hover:bg-stone-300 dark:hover:bg-stone-600 rounded-full mx-auto my-2" />
                  <div className="px-2">{selectionBody}</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
