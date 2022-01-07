import Image from "next/image";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import CodeBlock from "../framework/CodeBlock";

function SingleImage() {
  const raw = {
    imageOnly: `
<div className="w-full h-48 max-w-xs overflow-hidden shadow component card-bg rounded-xl">
    <div className="relative w-full h-48">
        <Image
        src={
            "https://images.unsplash.com/photo-1545647274-96644da34363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3216&q=80"
        }
        layout="fill"
        objectFit="cover"
        />
    </div>
</div>
      `.trim(),
    withOverlay: `
<div className="relative w-full h-48 max-w-xs overflow-hidden shadow component card-bg rounded-xl group">
    {/* Background Overlay */}
    <div className="absolute inset-0 z-[4] opacity-0 group-hover:opacity-100 bg-black/10 motion-reduce:duration-500 transition-opacity motion-safe:transition-all pointer-touch:opacity-100 prefers-contrast:bg-black/20" />
    {/* Text Overlay */}
    <div className="px-4 pb-2 pt-6 absolute bottom-0 left-0 right-0 text-left rtl:text-right z-[5] from-black/0 to-black/50 prefers-contrast:to-black/90 motion-reduce:duration-500 transition-opacity motion-safe:transition-all bg-gradient-to-b translate-y-[calc(100%-3.875rem)] pointer-touch:translate-y-0 group-hover:translate-y-0">
      <h2 className="text-xl font-semibold text-sky-100">
        Ocean is life.
      </h2>
      <p className="leading-tight transition-opacity opacity-0 text-sky-100 group-hover:opacity-100 pointer-touch:opacity-100 motion-reduce:duration-500 motion-safe:transition-all">
        It is pure greatness and everyone must enjoy it. Shot by
        Andrzej Kryszpiniuk.
      </p>
    </div>
    {/* Image Background */}
    <div className="relative w-full h-48">
      <Image
        src={
          "https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
        }
        alt="Ocean is life, is pure greatness and everyone must enjoy it. Shot by Andrzej Kryszpiniuk."
        layout="fill"
        objectFit="cover"
      />
    </div>
</div>
    `.trim(),
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    withOverlay: {
      interactions: {
        hover: {
          enabled: true,
          description:
            "On cursor-based devices, the description will be visibile when mouse hovers on the image, it will always be visible on touch-only devices.",
        },
      },
      transitions: {
        reduceMotion: {
          enabled: true,
          description:
            "On cursor-based devices, when users turn on reduce motion accessibility feature, the transition revealing the paragraph will be changed to opacity transition.",
        },
      },
      contrast: {
        enabled: true,
        description:
          "Image overlay and text overlay will be darkend even more to increase text readablilty.",
      },
    },
  };
  return (
    <>
      <CodeBlock title="Image Only" raw={raw.imageOnly}>
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <div className="w-full h-48 max-w-xs overflow-hidden shadow component card-bg rounded-xl">
            <div className="relative w-full h-48">
              <Image
                src={
                  "https://images.unsplash.com/photo-1545647274-96644da34363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3216&q=80"
                }
                alt="birds eye view of the beautiful ocean with a boat driving by."
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </CodeBlock>
      <CodeBlock
        title="With Overlay"
        raw={raw.withOverlay}
        features={features.withOverlay}
      >
        <div className="w-full pt-20 pb-16">
          <div className="grid w-full place-items-center">
            {/* Component */}
            <div className="relative w-full h-48 max-w-xs overflow-hidden shadow component card-bg rounded-xl group">
              {/* Background Overlay */}
              <div className="absolute inset-0 z-[4] opacity-0 group-hover:opacity-100 bg-black/10 motion-reduce:duration-500 transition-opacity motion-safe:transition-all pointer-touch:opacity-100 prefers-contrast:bg-black/20" />
              {/* Text Overlay */}
              <div className="px-4 pb-2 pt-6 absolute bottom-0 left-0 right-0 text-left rtl:text-right z-[5] from-black/0 to-black/50 prefers-contrast:to-black/90 motion-reduce:duration-500 transition-opacity motion-safe:transition-all bg-gradient-to-b translate-y-[calc(100%-3.875rem)] pointer-touch:translate-y-0 group-hover:translate-y-0">
                <h2 className="text-xl font-semibold text-sky-100">
                  Ocean is life.
                </h2>
                <p className="leading-tight transition-opacity opacity-0 text-sky-100 group-hover:opacity-100 pointer-touch:opacity-100 motion-reduce:duration-500 motion-safe:transition-all">
                  It is pure greatness and everyone must enjoy it. Shot by
                  Andrzej Kryszpiniuk.
                </p>
              </div>
              {/* Image Background */}
              <div className="relative w-full h-48">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                  }
                  alt="Ocean is life, is pure greatness and everyone must enjoy it. Shot by Andrzej Kryszpiniuk."
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            {/* <div className="pt-16 pb-4">
              <div>Overlay Type</div>
              <div>
                <button>Opacity</button>
                <button>Blur</button>
              </div>
            </div> */}
          </div>
        </div>
      </CodeBlock>
    </>
  );
}

export default SingleImage;
