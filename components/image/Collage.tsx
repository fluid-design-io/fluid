import Image from "next/image";
import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import CodeBlock from "../framework/CodeBlock";
import CodeBlockNotification from "../framework/CodeBlockNotification";

function Collage() {
  const [notification, setNotification] = useState(undefined);
  const tags = [
    {
      id: 1,
      name: "Nature",
    },
    {
      id: 2,
      name: "Wallpaper",
    },
    {
      id: 3,
      name: "Fog",
    },
  ];
  const raw = {
    collage: `
const tags = [
    {
        id: 1,
        name: "Nature",
    },
    {
        id: 2,
        name: "Wallpaper",
    },
    {
        id: 3,
        name: "Fog",
    },
];
<div className="w-full max-w-xs mx-auto component">
    <div
        className="grid w-full aspect-square grid-cols-3 overflow-hidden shadow component card-bg rounded-xl gap-x-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
        tabIndex={0}
        aria-label={\`Collage related to Forest, by John Doe\`}
        onClick={
        () =>
            null /* You can use router() to push to a new href once the component is clicked, it is better than wrapping it with an <a /> tag, which is not recommended. */
        }
    >
        <div className="relative w-full h-full col-span-2">
        <Image
            src={
            "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            }
            alt="Beautiful forest from bird's eye view. By Geran de Klerk from Unsplash."
            layout="fill"
            objectFit="cover"
        />
        </div>
        <div className="grid grid-flow-col grid-rows-2 gap-0.5">
        <div className="relative w-full h-full">
            <Image
            src={
                "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            }
            alt="Foggy forest in the morning. By Marita Kavelashvili from Unsplash."
            layout="fill"
            objectFit="cover"
            />
        </div>
        <div className="relative w-full h-full">
            <Image
            src={
                "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            }
            alt="Beautiful forest from low angle view. By kazuend from Unsplash."
            layout="fill"
            objectFit="cover"
            />
        </div>
        </div>
    </div>
    <div className="opacity-80 dark:text-white">
        <div className="pt-4 false">
        <h3 className="flex items-center font-bold text-left capitalize ">
            Forest
        </h3>
        </div>
        <p className="pt-1 text-sm text-stone-600 dark:text-stone-400">
        32 photos •{" "}
        <span className="cursor-pointer hover:opacity-80 hover:underline">
            <a href="#" aria-label={\`Browse more images by John Doe\`}>By John Doe</a>
        </span>
        </p>
        <div className="-mt-1">
        <ul className="flex flex-wrap justify-start w-full pt-4 gap-x-3 no-scroll">
            {tags.map(({ id, name }) => (
            <li key={id} className="list-none">
                <button
                className="px-2 py-1 capitalize rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 bg-stone-200 dark:bg-stone-700"
                aria-label={\`Browse category related to \${name}\`}
                style={{padding:"0.0.25rem, 5re1}
                >
                <span className="sr-only">{name}</span>
                {name}
                </button>
            </li>
            ))}
        </ul>
        </div>
    </div>
</div>
    `.trim(),
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    collage: {
      accessibility: {
        keyboardFocus: true,
        screenReader: {
          description:
            "Collage images will be presented with syntax such as this 'Collage related to Forest, by John Doe.' And Links will be presented with its functionality, such as 'View more images shot by John Doe.' or 'View images related to nature.'",
        },
        contrast: {
          description:
            "A ring will appear when user hover on the image collage or tags. Which helps incrase readability.",
        },
      },
      interactions: {
        click: {
          description: "Collage, author, and tags are clickable.",
        },
        hover: {
          description:
            "When cursor hovers on the collage, it will present a scale effect.",
        },
      },
      ui: {
        darkMode: {
          description:
            "Text and tag buttons colors will change based on user's appearance.",
        },
      },
    },
  };

  const handleClick = (name) => {
    setNotification(name);
  };
  return (
    <>
      <CodeBlock
        title="3-Image Collage"
        raw={raw.collage}
        features={features.collage}
        notification={notification}
        onDismiss={() => setNotification(undefined)}
      >
        <div className="grid w-full pt-20 pb-16 place-items-center">
          {/* Component */}
          <div className="w-full max-w-xs mx-auto component">
            <div
              className="grid w-full aspect-square grid-cols-3 overflow-hidden shadow component card-bg rounded-xl gap-x-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 cursor-pointer motion-safe:hover:scale-[0.992] motion-safe:active:scale-[0.98] motion-safe:transition prefers-contrast:hover:ring-2 prefers-contrast:hover:ring-stone-800 dark:prefers-contrast:hover:ring-stone-50 prefers-contrast:hover:ring-offset-2 select-none"
              tabIndex={0}
              aria-label={`Collage related to Forest, by John Doe`}
              onClick={
                () =>
                  handleClick("Image collage") /* You can use router() to push to a new href once the component is clicked, it is better than wrapping it with an <a /> tag, which is not recommended. */
              }
            >
              <div className="relative w-full h-full col-span-2">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  }
                  alt="Beautiful forest from bird's eye view. By Geran de Klerk from Unsplash."
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="grid grid-flow-col grid-rows-2 gap-0.5">
                <div className="relative w-full h-full">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    }
                    blurDataURL={
                      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=10&q=5"
                    }
                    alt="Foggy forest in the morning. By Marita Kavelashvili from Unsplash."
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    }
                    blurDataURL={`https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=10&q=5`}
                    alt="Beautiful forest from low angle view. By kazuend from Unsplash."
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div className="opacity-80 dark:text-white">
              <div className="pt-4 false">
                <h3 className="flex items-center font-bold text-left capitalize ">
                  Forest
                </h3>
              </div>
              <p className="pt-1 text-sm text-stone-600 dark:text-stone-400 prefers-contrast:text-stone-800 dark:prefers-contrast:text-stone-100 prefers-contrast:font-medium">
                32 photos •{" "}
                <span className="cursor-pointer hover:opacity-80 hover:underline">
                  <a href="" aria-label={`Browse more images by John Doe`}>
                    By John Doe
                  </a>
                </span>
              </p>
              <div className="-mt-1">
                <ul className="flex flex-wrap justify-start w-full pt-4 gap-x-3 no-scroll">
                  {tags.map(({ id, name }) => (
                    <li key={id} className="list-none">
                      <button
                        className="px-4 py-1 text-sm font-medium capitalize rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 bg-stone-200 dark:bg-stone-700 prefers-contrast:hover:ring-2 prefers-contrast:hover:ring-stone-800 dark:prefers-contrast:hover:ring-stone-50 prefers-contrast:hover:ring-offset-2 hover:bg-stone-300 dark:hover:bg-stone-600 prefers-contrast:font-semibold prefers-contrast:border prefers-contrast:border-stone-700 dark:prefers-contrast:border-stone-200 dark:prefers-contrast:bg-stone-800 dark:prefers-contrast:text-stone-50 prefers-contrast:text-stone-800"
                        aria-label={`Browse category related to ${name}`}
                        onClick={() => handleClick(name)}
                      >
                        <span className="sr-only">{name}</span>
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CodeBlock>
    </>
  );
}

export default Collage;
