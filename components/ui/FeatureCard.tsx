import Image from "next/image";
import { FeatureCardProps } from "../../interfaces/featureCard";

function FeatureCard({
  image: { light, dark },
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="block w-16 h-16 overflow-hidden rounded-full md:w-24 md:h-24 dark:hidden prefers-contrast:filter prefers-contrast:contrast-125">
        <Image alt={title} src={light} />
      </div>
      <div className="hidden w-16 h-16 overflow-hidden rounded-full md:w-24 md:h-24 dark:block prefers-contrast:filter prefers-contrast:contrast-125">
        <Image alt={title} src={dark} />
      </div>
      <h3 className="pt-2.5 font-semibold text-stone-700 dark:text-stone-200">
        {title}
      </h3>
      <p className="mx-auto max-w-[280px] pt-3 text-sm sm:px-8 text-stone-600 dark:text-stone-300">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
