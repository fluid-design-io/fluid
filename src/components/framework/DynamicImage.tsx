import clsxm from "@/lib/clsxm";
import Image from "next/image";

export const DynamicImage = ({
  src: { light, dark },
  alt,
  layout = "fill",
  objectFit = "cover",
  objectPosition = "center",
  className = "",
  ...props
}: DynamicImageProps) => {
  const lightClass = "dark:!hidden";
  const darkClass = "!hidden dark:!block";
  return (
    <>
      {[light, dark].map((src, index) => (
        <Image
          alt={alt}
          key={`${src}-${index}`}
          layout={layout}
          objectFit={objectFit}
          objectPosition={objectPosition}
          src={src}
          className={clsxm(
            className,
            index === 0 ? lightClass : darkClass,
            "contrast:contrast-125"
          )}
          {...props}
        />
      ))}
    </>
  );
};

export type DynamicImageProps = {
  src: {
    light: string;
    dark: string;
  };
  alt: string;
  layout?: "fill" | "fixed" | "intrinsic" | "responsive";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  objectPosition?:
    | "bottom"
    | "center"
    | "left"
    | "left bottom"
    | "left top"
    | "right"
    | "right bottom"
    | "right top"
    | "top"
    | any;
  className?: string;
  width?: number;
  height?: number;
};
