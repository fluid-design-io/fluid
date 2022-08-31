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
import { Fragment, useState } from 'react';

import { useToast } from '@/lib/useToast';

import { CodeFrameComponentWrap } from '../framework/CodeFrameComponentWrap';

/* 
  .clickable {
      @apply border border-transparent hocus:border-primary-400/30 hocus:bg-primary-400/10 dark:hocus:border-primary-300/30 dark:hocus:bg-primary-500/10;
  }
*/
const avatarImage =
  'https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80';
const DefaultMenu = () => {
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
      <div className='absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full' />
      <BellIcon className='w-4 h-4' />
    </div>
  );
  return (
    <CodeFrameComponentWrap className='flex flex-col justify-between items-end h-96 w-full sm:w-2/3 lg:w-1/2 min-w-[16rem]'>
      <Menu
        color='gray'
        header='Hi, User'
        iconEndPosition='between'
        iconStart={CogIcon}
        label="Settings"
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
            iconEndPosition:'between',
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
            // @ts-ignore
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
      <div className='flex justify-between items-center w-full'>
        <Menu
          className='inline-block'
          color='indigo'
          iconEnd={ChevronRightIcon}
          iconEndPosition='between'
          label="Options"
          menuClassName='w-40'
          menuPositionX='end'
          menuPositionY='center'
          weight='light'
        >
          <Fragment>
            <div className='px-3.5 py-2 flex justify-center items-center flex-col gap-2'>
              <img
                alt='avatar'
                className='w-12 h-12 rounded-full'
                src={avatarImage}
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
              <PencilIcon className='w-4 h-4' />
            </Menu.Item>
            <Menu.Item
              className='justify-between'
              disabled={true}
              role='destructive'
            >
              <span>Delete</span>
              <TrashIcon className='w-4 h-4' />
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

DefaultMenu.displayName = 'DefaultMenu';

export const MenuExamples = Object.assign({}, { Default: DefaultMenu });
