import Image from 'next/image';

import clsxm from '@/lib/clsxm';

export const DynamicImage = ({
  src: { light, dark },
  alt,
  className = '',
  ...props
}: DynamicImageProps) => {
  const lightClass = 'dark:!hidden';
  const darkClass = '!hidden dark:!block';
  return (
    <>
      {[light, dark].map((src, index) => (
        <Image
          alt={alt}
          key={`${src}-${index}`}
          src={src}
          className={clsxm(
            className,
            index === 0 ? lightClass : darkClass,
            'contrast:contrast-125'
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
  className?: string;
  width?: number;
  height?: number;
  [key: string]: any;
};
