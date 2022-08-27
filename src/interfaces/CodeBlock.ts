interface FeatureOption {
  enabled?: boolean;
  description?: string;
}
export interface CodeBlockFeatureProps {
  ui?: {
    RTL?: FeatureOption | true;
    darkMode?: FeatureOption | true;
    responsive?: FeatureOption | true;
  };
  accessibility?: {
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
  children?: React.ReactNode;
  iframe?: {
    url: string;
    height?: string;
  };
  [x: string]: any;
}

export interface CodeFrameProps {
  title: string;
  children: React.ReactNode;
  [x: string]: any;
}
