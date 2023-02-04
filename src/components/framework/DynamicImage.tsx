import Image, { StaticImageData } from 'next/image';

import clsxm from '@/lib/clsxm';

export const DynamicImage = ({
  src: { light, dark },
  alt,
  className = '',
  ...props
}: DynamicImageProps) => {
  const lightClass = 'dark:!hidden';
  const darkClass = '!hidden dark:!block';
  const placeholder = typeof light === 'string' ? null : 'blur';
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
          placeholder={placeholder}
          {...props}
        />
      ))}
    </>
  );
};

export type DynamicImageProps = {
  src: {
    light: string | StaticImageData;
    dark: string | StaticImageData;
  };
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  [key: string]: any;
};
