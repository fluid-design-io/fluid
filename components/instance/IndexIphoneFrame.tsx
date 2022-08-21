import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import { indexElements } from "../../lib/index/data";
import IphoneFrame from "../IphoneFrame";

function IndexIphoneFrame({
  selected,
  setSelected,
  selectedComponent,
  selectedStyle,
}) {
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
  const selectionBody = indexElements.map((item) => (
    <ul
      key={item.category}
      className="px-2 py-1 space-y-1 text-sm border-t border-primary-50/60 dark:border-primary-500/30 md:!text-base"
    >
      <li className="px-2 font-semibold pointer-events-none dark:text-primary-300 text-primary-600 contrast-more:text-primary-700 dark:contrast-more:text-primary-200">
        {item.category}
      </li>
      {item.lists.map((list) => (
        <li key={`body.${list.name}`}>
          <button
            onClick={() => {
              controls.start("hidden");
              setSelected(list.name);
            }}
            onFocus={() => controls.start("visible")}
            className={`${selectedStyle(
              list.name
            )} px-2 py-1 transition w-full text-left rounded-md overflow-hidden focus:outline-none focus:ring-1 focus:ring-primary-200/50 dark:focus:ring-primary-50 `}
          >
            {list.name}
          </button>
        </li>
      ))}
    </ul>
  ));
  return (
    <IphoneFrame>
      <div className="absolute inset-x-0 top-0 w-full pt-6 pb-1 overflow-hidden text-xs font-semibold text-center border-b select-none border-b-primary-100 dark:border-b-primary-600/20 text-primary-500 dark:text-primary-200">
        {selected}
      </div>
      <div className="w-full mt-11 h-[58%] flex justify-center items-center relative">
        <AnimatePresence mode='wait' >
          {selectedComponent(selected)}
        </AnimatePresence>
      </div>
      <motion.div
        className="bg-primary-900/10 dark:bg-primary-900/30 absolute z-[9] w-full h-full inset-0 rounded-[2.15rem] !translate-y-0"
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
        className="bg-primary-50 contrast-more:bg-white dark:bg-primary-800 dark:contrast-more:bg-primary-900 rounded-t-xl w-full h-full absolute z-10 pb-36 bottom-[0%] focus:outline-none"
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
          visible: { translateY: "20%" },
          hidden: { translateY: "70%" },
        }}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.4}
        tabIndex={-1}
      >
        <div
          onClick={() => controls.start("visible")}
          className="w-8 h-1.5 bg-primary-300/60 dark:bg-primary-500 hover:bg-primary-300 dark:hover:bg-primary-600 rounded-full mx-auto my-2"
        />
        <div className="px-2">{selectionBody}</div>
      </motion.div>
    </IphoneFrame>
  );
}

export default IndexIphoneFrame;
