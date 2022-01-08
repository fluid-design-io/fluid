interface FeatureOption {
  enabled?: boolean;
  description?: string;
}
export interface CodeBlockFeatureProps {
  ui?: {
    darkMode?: FeatureOption | true;
  };
  accessibility?: {
    RTL?: FeatureOption | true;
    contrast?: FeatureOption | true;
    screenReader?: FeatureOption | true;
    keyboardFocus?: FeatureOption | true;
  };
  interactions?: {
    hover?: FeatureOption | true;
    click?: FeatureOption | true;
  };
  transitions?: {
    reduceMotion?: FeatureOption | true;
    enter?: FeatureOption | true;
    exit?: FeatureOption | true;
    loop?: FeatureOption | true;
  };
}

export interface CodeBlockProps {
  title: string;
  raw: string;
  features?: CodeBlockFeatureProps;
  children: React.ReactNode;
  [x: string]: any;
}
