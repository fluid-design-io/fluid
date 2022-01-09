import Image from "next/image";
import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import CodeBlock from "../framework/CodeBlock";

export function SplitImageBackground() {
  return (
    <div className="relative grid justify-center w-full grid-cols-1 xs:grid-cols-2 component">
      <div className="col-span-1">
        <div className="relative w-full py-36">
          <Image
            src="https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Blue ocean and sand from birds eye view. By Ben Krygsman from Unsplash."
            layout="fill"
            objectFit="cover"
            objectPosition={"bottom"}
          />
        </div>
      </div>
      <div className="col-span-1 p-4 bg-stone-900">
        <svg
          className="w-full h-64 border-2 border-dashed rounded text-stone-200 dark:text-stone-600 dark:border-stone-600 border-stone-300"
          preserveAspectRatio="none"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeWidth="2"
            d="M0 0l200 200M0 200L200 0"
          ></path>
        </svg>
      </div>
    </div>
  );
}

function ImageBackground() {
  const raw = {
    clearBackground: `
/* V1.0.0 */
import Image from "next/image";
function Example() {
  return (
    <div className="relative flex justify-center w-full py-36 bg-sky-400/40 component">
        <h1 className="text-xl font-bold relative z-[2] text-white [text-shadow:2px_2px_20px_rgba(0,0,0,0.5)]">
        Text Overlay
        </h1>
        <div className="absolute inset-0 z-[1]">
        <div>
            <Image
            src="https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
            layout="fill"
            objectFit="cover"
            objectPosition={"top"}
            />
        </div>
        </div>
    </div>
  )
}
  
export default Example
    `.trim(),
    splitImageBackground: `Coming soon...`,
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    splitImageBackground: {
      ui: {
        responsive: {
          description:
            "Image and placeholder content will be re-arranged from horizontal to vertical placement when screen width is less than 475px.",
        },
      },
    },
  };

  return (
    <>
      <CodeBlock title="Background with overlay" raw={raw.clearBackground}>
        {/* Component */}
        <div className="relative z-[1] flex justify-center w-full py-36 component">
          <h1 className="text-xl font-bold relative z-[3] text-white [text-shadow:2px_2px_20px_rgba(0,0,0,0.5)]">
            Text Overlay
          </h1>
          {/* Optional background on top of image */}
          <div className="bg-black opacity-20 absolute inset-0 z-[2]" />{" "}
          <div className="absolute inset-0 z-[1]">
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                alt="Ocean waves. By Anastasia Taioglou from Unsplash."
                layout="fill"
                objectFit="cover"
                objectPosition={"top"}
              />
            </div>
          </div>
        </div>
      </CodeBlock>
      <CodeBlock
        title="Split View"
        raw={raw.splitImageBackground}
        features={features.splitImageBackground}
        iframe={{ url: "split-image-background", height: "h-[36rem]" }}
      />
    </>
  );
}

export default ImageBackground;
