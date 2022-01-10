import Image from "next/image";
import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import CodeBlock from "../framework/CodeBlock";
import { useTranslation } from "next-i18next";
import { HeartIcon, ShareIcon } from "@heroicons/react/outline";

function CardStandard() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation("image");
  const raw = {
    instagram: `
/* V1.0.0 */
import Image from "next/image";
function Example() {
  return (

  );
}
    `,
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    standard: {
      ui: {
        darkMode: true,
      },
      interactions: {
        click: {
          description: t(`Standard.click`, { ns: "card" }),
        },
      },

      accessibility: {
        contrast: {
          description: t(`Standard.contrast`, { ns: "card" }),
        },
      },
    },
  };
  const handleClick = (name) => {
    setNotification({ enabled: true, message: name });
  };
  const contrastRing = `prefers-contrast:border prefers-contrast:border-stone-800 dark:prefers-contrast:border-stone-200`;
  return (
    <>
      <CodeBlock
        title={t(`Standard.title`, { ns: "card" })}
        raw={raw.instagram}
        notification={notification}
        onDismiss={() => setNotification(undefined)}
        features={features.standard}
      >
        <div className="grid w-full pt-20 pb-16 place-items-center">
          {/* transform translate-x-0 is needed to patch ios touch will break rounded corners. */}
          <div
            className={`w-full max-w-xs overflow-hidden transform translate-x-0 shadow component card-bg rounded-xl bg-stone-5 dark:bg-stone-900 dark:prefers-contrast:bg-black ${contrastRing}`}
          >
            <div className="relative w-full overflow-hidden aspect-video">
              <Image
                alt="Sunrise in the national park Gantrisch in Bern, Switzerland. By Alain from Unsplash."
                src={`https://images.unsplash.com/photo-1613125700782-8394bec3e89d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80`}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="p-2.5">
              <div className="flex-grow">
                <h2 className="text-xs text-stone-500 dark:text-stone-500 prefers-contrast:text-stone-700 dark:prefers-contrast:text-stone-300 prefers-contrast:font-bold">
                  Subtitle
                </h2>
                <h1 className="font-semibold dark:text-stone-100 prefers-contrast:font-bold">
                  Card Title
                </h1>
                <p className="pt-1.5 pb-2 text-sm text-stone-600 dark:text-stone-300 leading-tight prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-100 prefers-contrast:font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div className="flex items-center justify-between pt-1">
                <button
                  className={`px-2 py-1 text-xs font-semibold uppercase transition rounded bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-200 hover:bg-stone-700 hover:text-stone-100 dark:hover:bg-stone-600 dark:active:bg-stone-500 dark:hover:text-stone-100 focus:bg-stone-700 focus:text-stone-100 dark:focus:bg-stone-600 dark:focus:text-stone-100 ${contrastRing}`}
                  onClick={() => handleClick(t(`Card Button`))}
                >
                  button
                </button>
                <div className="flex space-x-4">
                  <ShareIcon
                    className="w-5 h-5 text-stone-400 prefers-contrast:text-stone-700 dark:prefers-contrast:text-stone-200"
                    onClick={() =>
                      setNotification({
                        enabled: true,
                        message: t(`Share Icon`),
                        Icon: ShareIcon,
                      })
                    }
                  />
                  <HeartIcon
                    className="w-5 h-5 text-stone-400 prefers-contrast:text-stone-700 dark:prefers-contrast:text-stone-200"
                    onClick={() =>
                      setNotification({
                        enabled: true,
                        message: t(`Heart Icon`),
                        Icon: HeartIcon,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CodeBlock>
    </>
  );
}

export default CardStandard;
