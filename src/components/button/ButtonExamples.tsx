import { useToast } from '@/lib/useToast';
import { Button, Form, Switch } from '@fluid-design/fluid-ui';
import {
  FluidButtonWeights,
  FluidButtonColorOptions,
  FluidButtonColors,
  FluidButtonShapes,
  FluidButtonSizes,
  FulidButtonLoadingOptions,
} from '@fluid-design/fluid-ui/dist/lib/components/FluidUI/FluidTheme';
import { useTranslation } from 'next-i18next';
import { useId, useState } from 'react';
import { IoMdTrash } from 'react-icons/io';
import { MdAddCircle, MdInfo, MdSend } from 'react-icons/md';

const colors = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'gray',
  'slate',
  'zinc',
  'neutral',
  'stone',
];

const ButtonWrap = ({ children }) => {
  return (
    <div className='flex h-full flex-wrap items-center justify-center gap-6 px-4 lg:px-6'>
      {children}
    </div>
  );
};
const ButtonColors = ({
  weight = 'normal',
  size = 'md',
  shape = 'round',
  isLoading = false,
  gradient = undefined,
  loadingOptions = {
    animation: 'spin',
    text: '',
  },
}: {
  weight: keyof FluidButtonWeights;
  size?: keyof FluidButtonSizes;
  isLoading?: boolean;
  shape?: keyof FluidButtonShapes;
  gradient?: keyof FluidButtonColorOptions['gradient'] | undefined;
  loadingOptions?: {
    animation?: keyof FulidButtonLoadingOptions['animation'];
    text?: string;
  };
}) => {
  const id = useId();
  const { t } = useTranslation('button');
  const [present] = useToast();
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
          className='capitalize'
          onClick={() =>
            present({
              title: t(`colors.${color}`),
            })
          }
        >
          {t(`colors.${color}`)}
        </Button>
      ))}
    </ButtonWrap>
  );
};

const ButtonWeights = () => {
  const id = useId();
  const { t } = useTranslation('button');
  const weights = ['light', 'normal', 'bold', 'outline', 'clear', 'link'];
  const [present] = useToast();
  return (
    <ButtonWrap>
      {weights.map((weight) => (
        <Button
          key={`${id}.${weight}`}
          {...{
            color: 'rose',
            weight: weight as keyof FluidButtonWeights,
          }}
          className='capitalize'
          onClick={() =>
            present({
              title: t(`weights.${weight}`),
            })
          }
        >
          {t(`weights.${weight}`)}
        </Button>
      ))}
    </ButtonWrap>
  );
};

const ButtonSizes = () => {
  const id = useId();
  const { t } = useTranslation('button');
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  const [present] = useToast();
  return (
    <ButtonWrap>
      {sizes.map((size) => (
        <Button
          key={`${id}.${size}`}
          {...{
            color: 'indigo',
            size: size as keyof FluidButtonSizes,
          }}
          className='capitalize'
          onClick={() =>
            present({
              title: t(`sizes.${size}`),
            })
          }
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
  const [present] = useToast();
  return (
    <ButtonWrap>
      <Button color='green' disabled={disabled} onClick={present}>
        {disabled ? 'Disabled' : 'Clickable'}
      </Button>
      <Button
        color='green'
        disabled={disabled}
        isLoading={isLoading}
        onClick={present}
      >
        Loading
      </Button>
      <Button
        color='green'
        disabled={disabled}
        isLoading={isLoading}
        loadingOptions={{
          animation: 'spin-large',
        }}
        onClick={present}
      >
        Send
      </Button>
      <Button
        color='green'
        disabled={disabled}
        isLoading={isLoading}
        loadingOptions={{
          animation: 'pulse',
        }}
        onClick={present}
      >
        Submit
      </Button>
      <Button
        color='green'
        disabled={disabled}
        isLoading={isLoading}
        loadingOptions={{
          animation: 'ping',
          text: 'Loading',
        }}
        onClick={present}
      >
        Confirm
      </Button>
      <div className='mx-auto mt-8 w-full max-w-md rounded-lg bg-primary-50/75 p-4 shadow shadow-primary-300/20 dark:bg-primary-600/20 dark:shadow-primary-800/30 backdrop-blur'>
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
          <Switch name='disabled' onChange={setDisabled} />
          <Switch
            name='isLoading'
            label='Is Loading'
            onChange={setIsLoading}
            className='mb-0'
          />
        </Form>
      </div>
    </ButtonWrap>
  );
};

const ButtonIconOnly = () => {
  const id = useId();
  const [present] = useToast();
  return (
    <ButtonWrap>
      <Button
        onClick={() =>
          present({
            icon: MdAddCircle,
          })
        }
        color='green'
        iconOnly
      >
        <MdAddCircle />
      </Button>
      <Button
        onClick={() =>
          present({
            icon: MdSend,
          })
        }
        color='sky'
        shape='square'
        iconOnly
      >
        <MdSend />
      </Button>
      <Button
        onClick={() =>
          present({
            icon: MdInfo,
          })
        }
        color='blue'
        shape='pill'
        weight='light'
        iconOnly
      >
        <MdInfo />
      </Button>
      <Button
        onClick={() =>
          present({
            icon: IoMdTrash,
          })
        }
        color='rose'
        shape='pill'
        weight='clear'
        iconOnly
      >
        <IoMdTrash />
      </Button>
    </ButtonWrap>
  );
};

// export the const into an object  called ButtonExamples

ButtonColors.displayName = 'Colors';
ButtonWeights.displayName = 'Weights';
ButtonSizes.displayName = 'Sizes';
ButtonStates.displayName = 'States';
ButtonIconOnly.displayName = 'Icon Only';

export const ButtonExamples = Object.assign(
  {},
  { Colors: ButtonColors },
  { Weights: ButtonWeights },
  { Sizes: ButtonSizes },
  { States: ButtonStates },
  { IconOnly: ButtonIconOnly }
);
