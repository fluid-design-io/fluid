import Image from "next/image";
import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import CodeBlock from "../framework/CodeBlock";


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
