import {
  Button,
  FluidButtonColorOptions,
  FluidButtonColors,
  FluidButtonShapes,
  FluidButtonSizes,
  FluidButtonWeights,
  Form,
  FulidButtonLoadingOptions,
  Switch,
} from '@fluid-design/fluid-ui';
import { useTranslation } from 'next-i18next';
import { useId, useState } from 'react';
import { IoMdTrash } from 'react-icons/io';
import { MdAddCircle, MdChevronRight, MdInfo, MdSend } from 'react-icons/md';

import { useToast } from '@/lib/useToast';

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
  const [isLoaded, setIsLoaded] = useState(!isLoading);
  const [present] = useToast();
  return (
    <ButtonWrap>
      <Button
        color='green'
        disabled={disabled}
        isLoaded={isLoaded}
        onClick={present}
      >
        {disabled ? 'Disabled' : 'Clickable'}
      </Button>
      <Button
        color='green'
        disabled={disabled}
        isLoaded={isLoaded}
        isLoading={isLoading}
        onClick={present}
      >
        Loading
      </Button>
      <Button
        color='green'
        disabled={disabled}
        isLoaded={isLoaded}
        isLoading={isLoading}
        onClick={present}
        loadingOptions={{
          animation: 'spin-large',
        }}
      >
        Send
      </Button>
      <Button
        color='green'
        disabled={disabled}
        isLoaded={isLoaded}
        isLoading={isLoading}
        onClick={present}
        loadingOptions={{
          animation: 'pulse',
        }}
      >
        Submit
      </Button>
      <Button
        color='green'
        disabled={disabled}
        isLoaded={isLoaded}
        isLoading={isLoading}
        onClick={present}
        loadingOptions={{
          animation: 'ping',
          text: 'Loading',
        }}
      >
        Confirm
      </Button>
      <div className='mx-auto mt-8 w-full max-w-md rounded-lg bg-gray-50/75 p-4 shadow shadow-gray-300/20 dark:bg-gray-600/20 dark:shadow-gray-800/30 backdrop-blur'>
        <Form
          onSubmit={() => null}
          initialValues={{
            disabled,
            isLoading,
            isLoaded,
          }}
        >
          <Switch name='disabled' onChange={setDisabled} />
          <Switch label='Is Loading' name='isLoading' onChange={setIsLoading} />
          <Switch
            className='mb-0'
            label='Is Loaded'
            name='isLoaded'
            onChange={setIsLoaded}
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
        color='green'
        icon={MdAddCircle}
        iconOnly
        label='Create'
        onClick={() =>
          present({
            icon: MdAddCircle,
            title: 'Create',
          })
        }
      />
      <Button
        color='sky'
        iconOnly
        label='Send'
        shape='square'
        onClick={() =>
          present({
            icon: MdSend,
            title: 'Send',
          })
        }
      >
        <MdSend />
      </Button>
      <Button
        color='blue'
        iconOnly
        label='Info'
        shape='pill'
        weight='light'
        onClick={() =>
          present({
            icon: MdInfo,
            title: 'Info',
          })
        }
      >
        <MdInfo />
      </Button>
      <Button
        color='rose'
        icon={<IoMdTrash />}
        iconOnly
        label='Delete'
        shape='pill'
        weight='clear'
        onClick={() =>
          present({
            icon: IoMdTrash,
            title: 'Delete',
          })
        }
      />
    </ButtonWrap>
  );
};

const IconWithText = () => {
  const id = useId();
  const [present] = useToast();
  return (
    <ButtonWrap>
      <Button
        color='green'
        icon={MdAddCircle}
        label='Create'
        onClick={() =>
          present({
            icon: MdAddCircle,
            title: 'Create',
          })
        }
      />
      <Button
        color='sky'
        shape='square'
        onClick={() =>
          present({
            icon: MdSend,
            title: 'Send',
          })
        }
      >
        <MdSend />
        <span>Send Email</span>
      </Button>
      <Button
        className='w-40'
        color='blue'
        iconEnd={<MdChevronRight className='w-5 h-5 rtl:rotate-180' />}
        iconEndPosition='between'
        iconStart={MdInfo}
        label='Info'
        shape='pill'
        weight='light'
        onClick={() =>
          present({
            icon: MdInfo,
            title: 'Info',
          })
        }
      />
      <Button
        color='rose'
        iconStart={IoMdTrash}
        shape='pill'
        weight='clear'
        onClick={() =>
          present({
            icon: IoMdTrash,
            title: 'Delete',
          })
        }
      >
        <span>Delete</span>
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
IconWithText.displayName = 'Icon With Text';

export const ButtonExamples = Object.assign(
  {},
  { Colors: ButtonColors },
  { Weights: ButtonWeights },
  { Sizes: ButtonSizes },
  { States: ButtonStates },
  { IconOnly: ButtonIconOnly },
  { IconWithText: IconWithText }
);
