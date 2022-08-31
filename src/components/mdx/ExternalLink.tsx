export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={href} rel='noopener noreferrer' target='_blank'>
      {children}
    </a>
  );
};
