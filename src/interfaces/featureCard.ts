
export interface FeatureCardProps {
  image: {
    light: StaticImageData;
    dark?: StaticImageData;
  };
  title: string;
  description: string;
}
