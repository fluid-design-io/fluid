import { CodeBlockProps } from "../../interfaces/CodeBlock";

import imgHover from "../../public/assets/features/comp-feat-hover.png";
import imgClick from "../../public/assets/features/comp-feat-click.png";
import imgContrast from "../../public/assets/features/comp-feat-contrast.png";
import imgDarkMode from "../../public/assets/features/comp-feat-dark-mode.png";
import imgEnter from "../../public/assets/features/comp-feat-enter.png";
import imgExit from "../../public/assets/features/comp-feat-exit.png";
import imgLoop from "../../public/assets/features/comp-feat-loop.png";
import imgReduceMotion from "../../public/assets/features/comp-feat-reduce-motion.png";
import imgRTL from "../../public/assets/features/comp-feat-RTL.png";
import Image from "next/image";

interface FeatureCardProps {
  category: "Accessibility" | "Interaction" | "Transition" | "UI";
  type:
    | "hover"
    | "click"
    | "RTL"
    | "contrast"
    | "dark mode"
    | "reduce motion"
    | "enter"
    | "exit"
    | "loop";
  description?: string;
  img: StaticImageData;
}

const FeatureCard = ({
  category,
  type,
  description,
  img,
}: FeatureCardProps) => {
  return (
    <div
      className="relative flex flex-col items-start col-span-1 p-3 overflow-hidden rounded-lg bg-stone-200/50 dark:bg-stone-900/70"
      style={{ minHeight: "6.5rem" }}
    >
      <div className="flex-grow" />
      <div className="relative z-[2]">
        <p className="text-xs font-medium text-stone-500 dark:text-stone-400 prefers-contrast:text-stone-700 dark:prefers-contrast:text-stone-200">
          {category}
        </p>
        <h4 className="capitalize">{type}</h4>
        {description && (
          <p className="pt-2 text-sm tracking-tight text-stone-600 dark:text-stone-300 prefers-contrast:text-stone-800 dark:prefers-contrast:text-stone-100 w-5/6 max-w-[280px]">
            {description}
          </p>
        )}
      </div>
      <div className="absolute img-wrap w-full right-0 z-[1] select-none pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            className="flex img"
            src={img}
            alt={`${category} ${type}, ${description ? description : ``}`}
            layout={"fill"}
            objectFit="contain"
            objectPosition={"center"}
          />
        </div>
      </div>
    </div>
  );
};

function ComponentFeatures({
  features: {
    RTL = undefined,
    contrast = undefined,
    darkMode = undefined,
    interactions: { click = undefined, hover = undefined } = {},
    transitions: {
      enter = undefined,
      exit = undefined,
      loop = undefined,
      reduceMotion = undefined,
    } = {},
  },
}: {
  features: CodeBlockProps["features"];
}) {
  return (
    <div className="flex-grow patch-wrap">
      <h3 className="px-4 pb-3 sm:hidden">Features</h3>
      <div className="w-full gap-4 px-4 patch">
        {hover && (
          <FeatureCard
            category="Interaction"
            type="hover"
            img={imgHover}
            description={hover?.description}
          />
        )}
        {click && (
          <FeatureCard
            category="Interaction"
            type="click"
            img={imgClick}
            description={click?.description}
          />
        )}
        {contrast && (
          <FeatureCard
            category="UI"
            type="contrast"
            img={imgContrast}
            description={contrast?.description}
          />
        )}
        {darkMode && (
          <FeatureCard
            category="UI"
            type="dark mode"
            img={imgDarkMode}
            description={darkMode?.description}
          />
        )}
        {enter && (
          <FeatureCard
            category="Transition"
            type="enter"
            img={imgEnter}
            description={enter?.description}
          />
        )}
        {exit && (
          <FeatureCard
            category="Transition"
            type="exit"
            img={imgExit}
            description={exit?.description}
          />
        )}
        {loop && (
          <FeatureCard
            category="Transition"
            type="loop"
            img={imgLoop}
            description={loop?.description}
          />
        )}
        {reduceMotion && (
          <FeatureCard
            category="Transition"
            type="reduce motion"
            img={imgReduceMotion}
            description={reduceMotion?.description}
          />
        )}
        {RTL && (
          <FeatureCard
            category="UI"
            type="RTL"
            img={imgRTL}
            description={RTL?.description}
          />
        )}
      </div>
    </div>
  );
}

export default ComponentFeatures;
