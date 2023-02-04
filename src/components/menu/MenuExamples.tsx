import { Menu } from '@fluid-design/fluid-ui';
import {
  ArrowRightOnRectangleIcon,
  BellIcon,
  ChevronRightIcon,
  CogIcon,
  DocumentIcon,
  PencilIcon,
  TrashIcon,
  UserIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { Fragment, useState } from 'react';

import clsxm from '@/lib/clsxm';
import { useToast } from '@/lib/useToast';

import { CodeFrameComponentWrap } from '../framework/CodeFrameComponentWrap';

/* 
  .clickable {
      @apply border border-transparent hocus:border-gray-400/30 hocus:bg-gray-400/10 dark:hocus:border-gray-300/30 dark:hocus:bg-gray-500/10;
  }
*/
const avatarImage =
  'https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80';
const DefaultMenu = ({ className = '' }) => {
  const [present] = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const toggleStateWithTimeout = (setState: (state: boolean) => void) => {
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 2300);
  };
  const CustomIcon = () => (
    <div className='relative'>
      <div className='absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-red-500' />
      <BellIcon className='h-4 w-4' />
    </div>
  );
  return (
    <CodeFrameComponentWrap
      className={clsxm(
        'flex h-96 w-full min-w-[16rem] flex-col items-end justify-between sm:w-2/3 lg:w-1/2',
        className
      )}
    >
      <Menu
        color='gray'
        header='Hi, User'
        iconEndPosition='between'
        iconStart={CogIcon}
        label='Settings'
        menuPositionY='bottom'
        weight='clear'
        menus={[
          {
            label: 'Profile',
            iconStart: UserIcon,
            onClick: () =>
              present({
                title: 'Profile',
                icon: UserIcon,
              }),
          },
          {
            label: 'Notifications',
            role: 'info',
            iconStart: <CustomIcon />,
            badge: 4,
            iconEndPosition: 'between',
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
            iconStart: ArrowRightOnRectangleIcon,
            isLoading,
            isLoaded: isLoggedOut,
            loadedOptions: {
              text: 'Signed out',
            },
            disabled: isLoading,
            loadingOptions: {
              animation: 'spin-large',
            },
            onClick: (e) => {
              e.preventDefault();
              toggleStateWithTimeout(setIsLoading);
              setTimeout(() => {
                toggleStateWithTimeout(setIsLoggedOut);
              }, 2300);
              present({
                title: 'Logout',
              });
            },
          },
        ]}
      />
      <div className='flex w-full items-center justify-between'>
        <Menu
          className='inline-block'
          color='indigo'
          iconEnd={ChevronRightIcon}
          iconEndPosition='between'
          label='Options'
          menuClassName='w-40'
          menuPositionX='end'
          menuPositionY='center'
          weight='light'
        >
          <Fragment>
            <div className='flex flex-col items-center justify-center gap-2 px-3.5 py-2'>
              <Image
                alt='avatar'
                className='h-12 w-12 rounded-full'
                src={avatarImage}
                width={48}
                height={48}
              />
              <p>Custom Menu</p>
            </div>
            <Menu.Item
              className='justify-between'
              isLoading={isEditing}
              role='info'
              loadingOptions={{
                animation: 'pulse',
              }}
              disabled={isEditing}
              // @ts-ignore
              onClick={(e) => {
                e.preventDefault();
                toggleStateWithTimeout(setIsEditing);
              }}
            >
              <span>Edit</span>
              <PencilIcon className='h-4 w-4' />
            </Menu.Item>
            <Menu.Item
              className='justify-between'
              disabled={true}
              role='destructive'
            >
              <span>Delete</span>
              <TrashIcon className='h-4 w-4' />
            </Menu.Item>
          </Fragment>
        </Menu>
        <Menu
          color='green'
          header='Horizontal Menu'
          horizontal
          iconOnly
          iconStart={PlusCircleIcon}
          menuPositionX='start'
          menuPositionY='center'
          shape='pill'
          size='lg'
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
      </div>
    </CodeFrameComponentWrap>
  );
};

const BasicExample = () => {
  const [present] = useToast();
  return (
    <div className='pb-64'>
      <CodeFrameComponentWrap className='h-auto'>
        <Menu
          label='Settings'
          color='gray'
          weight='outline'
          iconStart={CogIcon}
          iconEndPosition='between'
          menuPositionY='bottom'
          header='Hi, User'
          menus={[
            {
              label: 'Profile',
              iconStart: UserIcon,
              onClick: () =>
                present({
                  title: 'Profile',
                  icon: UserIcon,
                }),
            },
            {
              role: 'separator',
            },
            {
              label: 'Notifications',
              role: 'info',
              iconStart: BellIcon,
              onClick: () =>
                present({
                  title: 'Notifications',
                  icon: BellIcon,
                }),
            },
          ]}
        />
      </CodeFrameComponentWrap>
    </div>
  );
};

DefaultMenu.displayName = 'DefaultMenu';
BasicExample.displayName = 'BasicExample';

export const MenuExamples = Object.assign(
  {},
  { Default: DefaultMenu, Basic: BasicExample }
);
