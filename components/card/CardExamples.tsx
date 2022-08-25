import { CardStandardComponent } from "./Standard";
import { CardASLargeImageComponent } from "./AppStore";
import { CardCollageComponent } from "./Collage";

const Standard = () => {
  return <CardStandardComponent />;
};

const AppleStore = () => {
  return <CardASLargeImageComponent />;
};

const Collage = () => {
  return <CardCollageComponent />;
};

Standard.displayName = "CardStandard";
AppleStore.displayName = "CardAppStore";
Collage.displayName = "CardCollage";

export const CardExamples = Object.assign({ Standard, AppleStore, Collage });