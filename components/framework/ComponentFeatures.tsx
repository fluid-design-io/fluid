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
import imgScreenReader from "../../public/assets/features/comp-feat-screen-reader.png";
import imgKeyboard from "../../public/assets/features/comp-feat-keyboard.png";
import imgResponsive from "../../public/assets/features/comp-feat-responsive.png";
import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  category: "Accessibility" | "Interaction" | "Transition" | "UI";
  type:
    | "hover"
    | "click"
    | "RTL"
    | "contrast"
    | "dark mode"
    | "responsive"
    | "reduce motion"
    | "enter"
    | "exit"
    | "screen reader"
    | "keyboard focus"
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
      className={`relative flex flex-col items-start p-3 overflow-hidden rounded-lg bg-primary-200/50 dark:bg-primary-900/70 focus-ring col-span-1 ${
        description && description.length > 200 ? "row-span-2" : ""
      }`}
      style={{ minHeight: "6.5rem" }}
      tabIndex={0}
      aria-label={`Supported feature, ${category}, ${type}. ${description}`}
    >
      <div className="flex-grow" />
      <div className="relative z-[2]">
        <p className="text-xs font-medium text-primary-500 dark:text-primary-400 contrast-more:text-primary-700 dark:contrast-more:text-primary-200">
          {category}
        </p>
        <h4 className="capitalize">
          {type}
          {type === "RTL" && " (right-to-left)"}
        </h4>
        {description && (
          <p className="w-5/6 pt-2 text-sm tracking-tight text-primary-600 dark:text-primary-300 contrast-more:text-primary-800 dark:contrast-more:text-primary-100 max-w-[44rem]">
            {description}
          </p>
        )}
      </div>
      <div className="absolute img-wrap w-full right-0 z-[1] select-none pointer-events-none">
        <div className="relative w-full h-full bg-grid-slate-100">
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
    accessibility: {
      contrast = undefined,
      keyboardFocus = undefined,
      screenReader = undefined,
    } = {},
    ui: { RTL = undefined, darkMode = undefined, responsive = undefined } = {},
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
            description={hover !== true && hover?.description}
          />
        )}
        {click && (
          <FeatureCard
            category="Interaction"
            type="click"
            img={imgClick}
            description={click !== true && click?.description}
          />
        )}
        {enter && (
          <FeatureCard
            category="Transition"
            type="enter"
            img={imgEnter}
            description={enter !== true && enter?.description}
          />
        )}
        {exit && (
          <FeatureCard
            category="Transition"
            type="exit"
            img={imgExit}
            description={exit !== true && exit?.description}
          />
        )}
        {loop && (
          <FeatureCard
            category="Transition"
            type="loop"
            img={imgLoop}
            description={loop !== true && loop?.description}
          />
        )}
        {reduceMotion && (
          <FeatureCard
            category="Transition"
            type="reduce motion"
            img={imgReduceMotion}
            description={reduceMotion !== true && reduceMotion?.description}
          />
        )}
        {RTL && (
          <FeatureCard
            category="UI"
            type="RTL"
            img={imgRTL}
            description={RTL !== true && RTL?.description}
          />
        )}
        {screenReader && (
          <FeatureCard
            category="Accessibility"
            type="screen reader"
            img={imgScreenReader}
            description={screenReader !== true && screenReader?.description}
          />
        )}
        {keyboardFocus && (
          <FeatureCard
            category="Accessibility"
            type="keyboard focus"
            img={imgKeyboard}
            description={keyboardFocus !== true && keyboardFocus?.description}
          />
        )}
        {contrast && (
          <FeatureCard
            category="UI"
            type="contrast"
            img={imgContrast}
            description={contrast !== true && contrast?.description}
          />
        )}
        {darkMode && (
          <FeatureCard
            category="UI"
            type="dark mode"
            img={imgDarkMode}
            description={darkMode !== true && darkMode?.description}
          />
        )}
        {responsive && (
          <FeatureCard
            category="UI"
            type="responsive"
            img={imgResponsive}
            description={responsive !== true && responsive?.description}
          />
        )}
      </div>
    </div>
  );
}

export default ComponentFeatures;
