import { useState } from "react";
import { CodeBlockFeatureProps } from "../../interfaces/CodeBlock";
import CodeBlock from "../framework/CodeBlock";
import { useTranslation } from "next-i18next";
import ImageGridComponent from "./components/ImageGridComponent";

function ImageGrid() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation("image");
  const raw = {
    instagram: `
/* V1.0.0 */
import Image from "next/image";
function Example() {
  const images = [
    {
      large:
        "https://images.unsplash.com/photo-1514819121162-8f4345eb8fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1622631211634-e307f33e4ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=10",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1490718687940-0ecadf414600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1630497946593-2d38c0fd65a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1580598152173-e5fab42e08a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1561982558-05602498d458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      author: "Ray Hennessy",
    },
  ];
  return (
    <div className="w-full max-w-xs overflow-hidden shadow component card-bg rounded-xl">
      <div className="grid grid-cols-3 gap-0.5">
        {images.map(({ large, author }) => (
          <div key={large} className="relative aspect-square">
            <Image
              src={large}
              alt={\`Bird image shot by \${author} from Unsplash.\`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
    `,
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    instagram: {
      interactions: { click: true },
    },
  };
  return (
    <>
      <CodeBlock
        title={t(`instagram-layout.title`, { ns: "image" })}
        raw={raw.instagram}
        notification={notification}
        onDismiss={() => setNotification(undefined)}
        features={features.instagram}
      >
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <ImageGridComponent {...{ setNotification }} />
        </div>
      </CodeBlock>
    </>
  );
}

export default ImageGrid;
