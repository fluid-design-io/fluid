import { Button, Form, Switch } from "@fluid-design/fluid-ui";
import {
  FluidButtonColorOptions,
  FluidButtonColors,
  FluidButtonShapes,
  FluidButtonSizes,
  FluidButtonWeights,
  FulidButtonLoadingOptions,
} from "@fluid-design/fluid-ui/dist/lib/components/FluidUI/FluidTheme";
import { useTranslation } from "next-i18next";
import { useId, useState } from "react";

const colors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "gray",
  "slate",
  "zinc",
  "neutral",
  "stone",
];

const ButtonWrap = ({ children }) => {
  return (
    <div className="flex h-full flex-wrap items-center justify-center gap-6 px-4 lg:px-6">
      {children}
    </div>
  );
};
const ButtonColors = ({
  weight = "normal",
  size = "md",
  shape = "round",
  isLoading = false,
  gradient = undefined,
  loadingOptions = {
    animation: "spin",
    text: "",
  },
}: {
  weight: keyof FluidButtonWeights;
  size?: keyof FluidButtonSizes;
  isLoading?: boolean;
  shape?: keyof FluidButtonShapes;
  gradient?: keyof FluidButtonColorOptions["gradient"] | undefined;
  loadingOptions?: {
    animation?: keyof FulidButtonLoadingOptions["animation"];
    text?: string;
  };
}) => {
  const id = useId();
  const { t } = useTranslation("button");
  return (
    <ButtonWrap>
      {colors.map((color) => (
        <Button
          key={`${id}.${color}`}
          {...{
            color: color as keyof FluidButtonColors,
            size,
            shape,
            weight,
            isLoading,
            gradient,
            loadingOptions,
          }}
          className="capitalize"
        >
          {t(`colors.${color}`)}
        </Button>
      ))}
    </ButtonWrap>
  );
};

const ButtonWeights = () => {
  const id = useId();
  const { t } = useTranslation("button");
  const weights = ["light", "normal", "bold", "outline", "none"];
  return (
    <ButtonWrap>
      {weights.map((weight) => (
        <Button
          key={`${id}.${weight}`}
          {...{
            color: "rose",
            weight: weight as keyof FluidButtonWeights,
          }}
          className="capitalize"
        >
          {t(`weights.${weight}`)}
        </Button>
      ))}
    </ButtonWrap>
  );
};

const ButtonSizes = () => {
  const id = useId();
  const { t } = useTranslation("button");
  const sizes = ["xs", "sm", "md", "lg", "xl"];
  return (
    <ButtonWrap>
      {sizes.map((size) => (
        <Button
          key={`${id}.${size}`}
          {...{
            color: "indigo",
            size: size as keyof FluidButtonSizes,
          }}
          className="capitalize"
        >
          {t(`sizes.${size}`)}
        </Button>
      ))}
    </ButtonWrap>
  );
};

const ButtonStates = () => {
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <ButtonWrap>
      <Button color="lime" disabled={disabled}>
        {disabled ? "Disabled" : "Clickable"}
      </Button>
      <Button color="fuchsia" disabled={disabled} isLoading={isLoading}>
        Loading
      </Button>
      <Button
        color="stone"
        disabled={disabled}
        isLoading={isLoading}
        loadingOptions={{
          animation: "pulse",
        }}
      >
        Text
      </Button>
      <Button
        color="blue"
        disabled={disabled}
        isLoading={isLoading}
        loadingOptions={{
          animation: "ping",
          text: "Loading",
        }}
      >
        Text
      </Button>
      <div className="mx-auto mt-8 w-full max-w-md rounded-lg bg-primary-50/75 p-4 shadow shadow-primary-300/20 dark:bg-primary-600/20 dark:shadow-primary-800/30">
        <Form
          initialValues={{
            disabled,
            isLoading,
          }}
          onSubmit={(values) => {
            setDisabled(values.disabled);
            setIsLoading(values.isLoading);
          }}
        >
          <Switch name="disabled" onChange={setDisabled} />
          <Switch
            name="isLoading"
            label="Is Loading"
            onChange={setIsLoading}
            className="mb-0"
          />
        </Form>
      </div>
    </ButtonWrap>
  );
};

// export the const into an object  called ButtonExamples

ButtonColors.displayName = "Colors";
ButtonWeights.displayName = "Weights";
ButtonSizes.displayName = "Sizes";
ButtonStates.displayName = "States";

export const ButtonExamples = Object.assign(
  {},
  { Colors: ButtonColors },
  { Weights: ButtonWeights },
  { Sizes: ButtonSizes },
  { States: ButtonStates }
);
