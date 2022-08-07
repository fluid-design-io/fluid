import Image from "next/image";
import { FeatureCardProps } from "../../interfaces/featureCard";

import { useTranslation } from "next-i18next";

function FeatureCard({
  image: { light, dark },
  title,
  description,
}: FeatureCardProps) {
  const { t } = useTranslation("index");
  return (
    <div className="flex flex-col items-center justify-center pb-4 scroll-ml-4 snap-center sm:snap-none sm:scroll-ml-0 sm:pb-0">
      <div className="block w-16 h-16 overflow-hidden rounded-full md:!w-24 md:!h-24 dark:hidden contrast-more:filter contrast-more:contrast-125">
        <Image alt={title} src={light} />
      </div>
      <div className="hidden w-16 h-16 overflow-hidden rounded-full md:!w-24 md:!h-24 dark:!block contrast-more:filter contrast-more:contrast-125">
        <Image alt={title} src={dark} />
      </div>
      <h3 className="pt-2.5 font-semibold text-stone-700 dark:text-stone-200">
        {t(`${title}.title`)}
      </h3>
      <p className="mx-auto max-w-[220px] sm:max-w-[280px] w-[calc(100vw-2rem)] sm:w-auto pt-3 text-sm sm:px-8 text-stone-600 dark:text-stone-300">
        {t(`${title}.description`)}
      </p>
    </div>
  );
}

export default FeatureCard;
