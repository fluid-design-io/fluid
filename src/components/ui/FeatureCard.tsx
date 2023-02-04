import Image from 'next/image';

import { FeatureCardProps } from '@/interfaces/featureCard';

function FeatureCard({
  image: { light, dark },
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className='flex snap-center scroll-ml-4 flex-col items-center justify-center pb-4 sm:snap-none sm:scroll-ml-0 sm:pb-0'>
      <div className='block h-16 w-16 overflow-hidden rounded-full contrast-more:contrast-125 contrast-more:filter dark:hidden md:!h-24 md:!w-24'>
        <Image alt={title} src={light} />
      </div>
      <div className='hidden h-16 w-16 overflow-hidden rounded-full contrast-more:contrast-125 contrast-more:filter dark:!block md:!h-24 md:!w-24'>
        <Image alt={title} src={dark} />
      </div>
      <h3 className='pt-2.5 font-semibold text-gray-700 dark:text-gray-200'>
        {title}
      </h3>
      <p className='mx-auto w-[calc(100vw-2rem)] max-w-[220px] pt-3 text-sm text-gray-600 dark:text-gray-300 sm:w-auto sm:max-w-[280px] sm:px-8'>
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
