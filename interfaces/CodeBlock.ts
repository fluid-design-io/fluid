interface FeatureOption {
  enabled?: boolean;
  description?: string;
}
export interface CodeBlockFeatureProps {
  darkMode?: FeatureOption;
  RTL?: FeatureOption;
  contrast?: FeatureOption;
  interactions?: {
    hover?: FeatureOption;
    click?: FeatureOption;
  };
  transitions?: {
    reduceMotion?: FeatureOption;
    enter?: FeatureOption;
    exit?: FeatureOption;
    loop?: FeatureOption;
  };
}

export interface CodeBlockProps {
  title: string;
  raw: string;
  features?: CodeBlockFeatureProps;
  children: React.ReactNode;
  [x: string]: any;
}
