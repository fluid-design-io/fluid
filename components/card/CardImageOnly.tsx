import { Tab } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import image from "../../public/assets/examples/card-image.jpg";
import CodeBlock from "../framework/CodeBlock";

function CardImageOnly() {
  const raw = {
    oneImage: `
<div className="w-full h-48 max-w-xs overflow-hidden component card-bg rounded-xl">
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
  };
  return (
    <CodeBlock title="One Image" raw={raw.oneImage}>
      <div className="grid w-full pt-20 pb-16 place-items-center">
        <div className="w-full h-48 max-w-xs overflow-hidden component card-bg rounded-xl">
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
  );
}

export default CardImageOnly;
