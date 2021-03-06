import IndexCard from "../../components/instance/IndexCard";
import IndexElegant from "../../components/instance/IndexElegant";
import IndexEnterExit from "../../components/instance/IndexEnterExit";
import IndexGlass from "../../components/instance/IndexGlass";
import IndexList from "../../components/instance/IndexList";
import IndexSharedLayout from "../../components/instance/IndexSharedLayout";
import IndexSimple from "../../components/instance/IndexSimple";
import IndexSoft from "../../components/instance/IndexSoft";
import { FeatureCardProps } from "../../interfaces/featureCard";

import darkmodeDark from "../../public/assets/index/darkmode-dark.png";
import darkmodeLight from "../../public/assets/index/darkmode-light.png";
import responsiveDark from "../../public/assets/index/responsive-dark.png";
import responsiveLight from "../../public/assets/index/responsive-light.png";
import multiPlatformDark from "../../public/assets/index/multi-platform-dark.png";
import multiPlatformLight from "../../public/assets/index/multi-platform-light.png";
import animationDark from "../../public/assets/index/animation-dark.png";
import animationLight from "../../public/assets/index/animation-light.png";
import screenReaderDark from "../../public/assets/index/screen-reader-dark.png";
import screenReaderLight from "../../public/assets/index/screen-reader-light.png";
import keyboardDark from "../../public/assets/index/keyboard-dark.png";
import keyboardLight from "../../public/assets/index/keyboard-light.png";
import contrastDark from "../../public/assets/index/contrast-dark.png";
import contrastLight from "../../public/assets/index/contrast-light.png";
import motionDark from "../../public/assets/index/motion-dark.png";
import motionLight from "../../public/assets/index/motion-light.png";

export const indexElements = [
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
        component: <IndexSharedLayout key={`div.sharedlayout`} />,
      },
    ],
  },
];

export const featuresList: FeatureCardProps[] = [
  {
    image: {
      light: darkmodeLight,
      dark: darkmodeDark,
    },
    title: "Dark Mode",
    description:
      "Automatically switch light and dark modes based on your operating system preference.",
  },
  {
    image: {
      light: responsiveLight,
      dark: responsiveDark,
    },
    title: "Responsive",
    description:
      "Components that work for all screen sizes look elegant on phones, tablets, or desktops.",
  },
  {
    image: {
      light: multiPlatformLight,
      dark: multiPlatformDark,
    },
    title: "Multi-platform",
    description:
      "Adjust styles based on users' primary pointer, for example, mouse, trackpad, or finger.",
  },
  {
    image: {
      light: animationLight,
      dark: animationDark,
    },
    title: "Animation",
    description:
      "Every component has its own purpose, so its animations and transitions are unique as well.",
  },
  {
    image: {
      light: keyboardLight,
      dark: keyboardDark,
    },
    title: "Keyboard Focus",
    description:
      "Clickable elements can be triggered only using keyboard, with beautiful focus highlight.",
  },
  {
    image: {
      light: screenReaderLight,
      dark: screenReaderDark,
    },
    title: "Screen Reader",
    description:
      "Optimized for people who have visual disabilities to prompt clear and meaningful descriptions.",
  },
  {
    image: {
      light: contrastLight,
      dark: contrastDark,
    },
    title: "Contrast",
    description:
      "Optimized for people who have visual disabilities to make content more differentiable.",
  },
  {
    image: {
      light: motionLight,
      dark: motionDark,
    },
    title: "Reduce Motion",
    description:
      "Animations are awesome, but having a fallback is crucial for users who prefer less motion.",
  },
];
