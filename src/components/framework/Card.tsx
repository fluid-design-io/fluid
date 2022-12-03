import clsxm from '@/lib/clsxm';

type CardProps = {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  className?: string;
  clickable?: boolean;
  children: React.ReactNode;
  [key: string]: any;
};
export const Card = ({
  as,
  className,
  children,
  clickable,
  ...props
}: CardProps) => {
  const Component = as || 'div';
  return (
    <Component
      className={clsxm(
        'rounded-xl bg-white shadow-2xl shadow-gray-300/40 dark:bg-gray-700 dark:shadow-black/20',
        clickable && 'hocus-zoom',
        'contrast-border',
        'contrast:dark:bg-[rgb(22,23,30)]',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
