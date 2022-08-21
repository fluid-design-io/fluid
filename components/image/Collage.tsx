import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import CodeBlock from "../framework/CodeBlock";
import ImageCollageComponent from "./components/ImageCollageComponent";

function Collage() {
  const raw = {
    collage: `
/* V1.0.1 */
import Image from "next/image";
function Example() {
  return (
    <div className="w-full max-w-xs mx-auto component">
        <div
            className="grid w-full aspect-square grid-cols-3 overflow-hidden shadow component card-bg rounded-xl gap-x-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
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
    </div>
  )
}
  
export default Example
    `.trim(),
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    collage: {
      accessibility: {
        keyboardFocus: true,
        screenReader: {
          description:
            "Collage images will be presented with syntax such as this 'Collage related to Forest, by John Doe.''",
        },
        contrast: {
          description:
            "A ring will appear when user hover on the image collage. Which helps incrase readability.",
        },
      },
      interactions: {
        click: true,
        hover: {
          description:
            "When cursor hovers on the collage, it will present a scale effect.",
        },
      },
    },
  };

  const [notification, setNotification] = useState(undefined);
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
          <ImageCollageComponent setNotification={setNotification} />
        </div>
      </CodeBlock>
    </>
  );
}

export default Collage;
