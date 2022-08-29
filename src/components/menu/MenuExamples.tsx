import clsxm from '@/lib/clsxm';
import { useToast } from '@/lib/useToast';
import { Menu } from '@fluid-design/fluid-ui';
import {
  BellIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  ChevronRightIcon,
  PencilIcon,
  VideoCameraIcon,
  DocumentIcon,
} from '@heroicons/react/24/outline';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Wrap = ({ className = '', children }) => {
  return (
    <div
      className={clsxm(
        [
          'flex h-full flex-wrap items-center justify-center gap-6 px-4 lg:px-6',
          'bg-white/70 shaodw-lg shadow-primary-600/30 dark:bg-black/20',
          'rounded-lg relative h-96 w-full sm:w-2/3 lg:w-1/2 min-w-[16rem]',
          'backdrop-blur',
        ],
        className
      )}
    >
      {children}
    </div>
  );
};

/* 
  .clickable {
      @apply border border-transparent hocus:border-primary-400/30 hocus:bg-primary-400/10 dark:hocus:border-primary-300/30 dark:hocus:bg-primary-500/10;
  }
*/
const avatarImage =
  'https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80';
const DefaultMenu = () => {
  const [present] = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isDuplicating, setIsDuplicating] = useState(false);
  const toggleStateWithTimeout = (setState: (state: boolean) => void) => {
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 2300);
  };
  return (
    <Wrap>
      <Menu
        label={'Settings'}
        color='gray'
        weight='clear'
        iconStart={CogIcon}
        iconEndPosition='between'
        menuPositionY='bottom'
        header='Hi, User'
        className='absolute right-4 top-4'
        menus={[
          {
            label: 'Profile',
            icon: UserIcon,
            onClick: () =>
              present({
                title: 'Profile',
                icon: UserIcon,
              }),
          },
          {
            label: 'Notifications',
            role: 'info',
            icon: BellIcon,
            onClick: () => {
              present({
                title: 'Notifications',
                icon: BellIcon,
              });
            },
          },
          {
            role: 'separator',
          },
          {
            label: 'Logout',
            role: 'destructive',
            icon: <ArrowRightOnRectangleIcon className='w-4 h-4' />,
            isLoading,
            disabled: isLoading,
            loadingOptions: {
              animation: 'spin-large',
            },
            onClick: (e) => {
              e.preventDefault();
              toggleStateWithTimeout(setIsLoading);
              present({
                title: 'Logout',
              });
            },
          },
        ]}
      />
      <Menu
        label={'Options'}
        color='indigo'
        weight='light'
        iconEnd={ChevronRightIcon}
        iconEndPosition='between'
        menuPositionY='center'
        menuPositionX='end'
        menuClassName='w-40'
        className='absolute bottom-4 left-4'
      >
        <>
          <div className='px-3.5 py-2 flex justify-center items-center flex-col gap-2'>
            <img
              src={avatarImage}
              alt='avatar'
              className='w-12 h-12 rounded-full'
            />
            <p>Custom Menu</p>
          </div>
          <Menu.Item className='justify-between' role='info'>
            <span>Edit</span>
            <PencilIcon className='w-4 h-4' />
          </Menu.Item>
        </>
      </Menu>
      <Menu
        iconStart={PlusCircleIcon}
        color='green'
        shape='pill'
        size='lg'
        horizontal
        iconOnly
        menuPositionY='center'
        menuPositionX='start'
        header='Create'
        className='absolute bottom-4 right-4'
        menus={[
          {
            icon: VideoCameraIcon,
            onClick: () =>
              present({
                icon: VideoCameraIcon,
              }),
          },
          {
            icon: DocumentIcon,
            onClick: () =>
              present({
                icon: DocumentIcon,
              }),
          },
        ]}
      />
    </Wrap>
  );
};

DefaultMenu.displayName = 'DefaultMenu';

export const MenuExamples = Object.assign({}, { Default: DefaultMenu });
