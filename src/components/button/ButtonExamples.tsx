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
  loadingOptions = {
    animation: 'spin',
    text: '',
  },
}: {
  weight: keyof FluidButtonWeights;
  size?: keyof FluidButtonSizes;
  isLoading?: boolean;
  shape?: keyof FluidButtonShapes;
  loadingOptions?: {
    animation?: keyof FulidButtonLoadingOptions['animation'];
    text?: string;
  };
}) => {
  const id = useId();
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
            loadingOptions,
          }}
          className='capitalize'
          onClick={() =>
            present({
              title: color,
            })
          }
        >
          {color}
        </Button>
      ))}
    </ButtonWrap>
  );
};

const ButtonWeights = () => {
  const id = useId();
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
              title: weight,
            })
          }
        >
          {weight}
        </Button>
      ))}
    </ButtonWrap>
  );
};

const ButtonSizes = () => {
  const id = useId();
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
              title: size,
            })
          }
        >
          {size}
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
        onClick={present as any}
      >
        {disabled ? 'Disabled' : 'Clickable'}
      </Button>
      <Button
        color='green'
        disabled={disabled}
        isLoaded={isLoaded}
        isLoading={isLoading}
        onClick={present as any}
      >
        Loading
      </Button>
      <Button
        color='green'
        disabled={disabled}
        isLoaded={isLoaded}
        isLoading={isLoading}
        onClick={present as any}
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
        onClick={present as any}
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
        onClick={present as any}
        loadingOptions={{
          animation: 'ping',
          text: 'Loading',
        }}
      >
        Confirm
      </Button>
      <div className='mx-auto mt-8 w-full max-w-md rounded-lg bg-gray-50/75 p-4 shadow shadow-gray-300/20 backdrop-blur dark:bg-gray-600/20 dark:shadow-gray-800/30'>
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
        iconEnd={<MdChevronRight className='h-5 w-5 rtl:rotate-180' />}
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

const CustomColors = () => {
  const [present] = useToast();
  return (
    <ButtonWrap>
      <Button className='btn-[olive]' onClick={present as any} label='Olive' />
      <Button
        className='btn-light-[#556B2F]'
        onClick={present as any}
        label='#556B2F'
      />
      <Button
        className='btn-outline-[#556B2F]/80'
        onClick={present as any}
        label='Opacity'
      />
      <Button
        className='btn-clear-[rgb(85,107,47)]'
        onClick={present as any}
        label='RGB'
      />
    </ButtonWrap>
  );
};

const Showcase = () => {
  const [present] = useToast();
  return (
    <div className='grid grid-cols-3 justify-items-center gap-6'>
      <Button color='cyan' label='Solid' onClick={present as any} />
      <Button
        color='cyan'
        weight='light'
        label='Light'
        onClick={present as any}
      />
      <Button
        color='cyan'
        weight='bold'
        label='Bold'
        onClick={present as any}
      />
      <Button
        color='cyan'
        weight='outline'
        label='Outline'
        onClick={present as any}
      />
      <Button
        color='cyan'
        weight='clear'
        label='Clear'
        onClick={present as any}
      />
      <Button
        color='cyan'
        weight='link'
        label='Link'
        onClick={present as any}
      />
    </div>
  );
};

// export the const into an object  called ButtonExamples

ButtonColors.displayName = 'Colors';
ButtonWeights.displayName = 'Weights';
ButtonSizes.displayName = 'Sizes';
ButtonStates.displayName = 'States';
ButtonIconOnly.displayName = 'Icon Only';
IconWithText.displayName = 'Icon With Text';
CustomColors.displayName = 'Custom Button';
Showcase.displayName = 'Showcase';

export const ButtonExamples = Object.assign(
  {},
  { Colors: ButtonColors },
  { Weights: ButtonWeights },
  { Sizes: ButtonSizes },
  { States: ButtonStates },
  { IconOnly: ButtonIconOnly },
  { IconWithText: IconWithText },
  { CustomColors: CustomColors },
  { Showcase: Showcase }
);
