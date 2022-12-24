import { Button, Menu } from '@fluid-design/fluid-ui';
import { Dialog, Transition } from '@headlessui/react';
import { Bars2Icon } from '@heroicons/react/24/outline';
import {
  BookOpenIcon,
  ChevronUpIcon,
  GlobeAmericasIcon,
  GlobeAsiaAustraliaIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { i18n, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Fragment, createContext, useContext, useRef } from 'react';
import { MdMouse } from 'react-icons/md';

import { ThemeSwitch } from '@/components/ThemeSwitch';
import { useMobileNavigationStore } from '@/components/framework/MobileNavigation';
import clsxm from '@/lib/clsxm';
import { languages } from '@/lib/languages';

import packageInfo from '../../../package.json';
import AppLogo from '../ui/AppLogo';
import UnstyledLink from './UnstyledLink';

const navigation = [
  { name: 'Dashboard', href: 'dashboard', icon: Squares2X2Icon },
  { name: 'Examples', href: 'examples', icon: MdMouse },
  { name: 'Usage', href: 'usage', icon: BookOpenIcon },
];
const secondaryNavigation = [
  {
    groupName: 'Plugins',
    groupList: [
      { name: 'Button', href: 'plugin/button', isDone: true },
      { name: 'Tooltip', href: 'plugin/tooltip', isDone: false },
    ],
  },
  {
    groupName: 'Components',
    groupList: [
      // { name: "Alert", href: "alert", isDone: false },
      { name: 'Accordion', href: 'accordion', isDone: true },
      // { name: "Badge", href: "badge", isDone: false },
      // { name: "Breadcrumbs", href: "breadcrumbs", isDone: false },
      { name: 'Button', href: 'button', isDone: true },
      // { name: "Collapse", href: "collapse", isDone: false },
      // { name: "Divider", href: "divider", isDone: false },
      // { name: "Drawer", href: "drawer", isDone: false },
      // { name: "Dropdown", href: "dropdown", isDone: false },
      // { name: "Footer", href: "footer", isDone: false },
      // { name: "Hero", href: "hero", isDone: false },
      // { name: "Indicator", href: "indicator", isDone: false },
      // { name: "List", href: "list", isDone: false },
      // { name: "Mask", href: "mask", isDone: false },
      { name: 'Menu', href: 'menu', isDone: true },
      { name: 'Popover', href: 'popover', isDone: false },
      // { name: "Modal", href: "modal", isDone: false },
      // { name: "Navbar", href: "navbar", isDone: false },
      // { name: "Pagination", href: "pagination", isDone: false },
      // { name: "Progress", href: "progress", isDone: false },
      { name: 'Tab', href: 'tab', isDone: true },
      // { name: "Table", href: "table", isDone: false },
      // { name: "Tooltip", href: "tooltip", isDone: false },
    ],
  },
  {
    groupName: 'Forms',
    groupList: [
      { name: 'Validation', href: 'form/validation', isDone: true },
      { name: 'Select', href: 'form/select', isDone: true },
      { name: 'Combobox', href: 'form/combobox', isDone: true },
      { name: 'Switch', href: 'form/switch', isDone: true },
      { name: 'Input', href: 'form/input', isDone: true },
      { name: 'Textarea', href: 'form/textarea', isDone: true },
    ],
  },
  {
    groupName: 'UI',
    groupList: [
      { name: 'Card', href: 'card', isDone: true },
      // { name: 'Empty State', href: 'empty-state', isDone: false },
      { name: 'Image', href: 'image', isDone: false },
    ],
  },
];

const bgClassName =
  'dark:bg-gray-900 dark:contrast-more:border-gray-200 dark:contrast-more:bg-[rgb(18,15,13)] bg-gray-50';

export const SidebarHeader = () => {
  return (
    <div className='sticky top-0 z-10 mx-2.5 pl-3.5 pt-4 flex items-center justify-between space-x-2 bg-gray-50/80 pb-3 backdrop-blur-md backdrop-filter dark:bg-gray-900/80 lg:mx-4'>
      <div className='flex justify-start items-center gap-2'>
        <AppLogo />
        <UnstyledLink
          className='-mt-[0.125rem] font-rounded font-bold text-gray-700 dark:text-gray-200 md:!text-[1.175rem]'
          href='/'
        >
          <div>Fluid Design</div>
          <div className='-mt-1.5 text-left font-sans text-[0.6rem] font-bold tracking-wide text-gray-500 contrast-more:text-gray-900 dark:text-gray-400 dark:contrast-more:text-gray-50'>
            V{packageInfo.version}
          </div>
        </UnstyledLink>
      </div>
      <ThemeSwitch className='sm:hidden' />
    </div>
  );
};

export const SidebarNavigation = ({ className = '' }) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const activeTab = pathname.split('docs/')[1];
  const { t } = useTranslation();

  return (
    <Fragment>
      <nav aria-label='Sidebar' className='flex flex-1 flex-col gap-2 p-1 px-4'>
        {navigation.map(({ name, href, icon: ItemIcon }) => (
          <div className='rounded-md' key={`nav.${name}.${href}`}>
            <Button
              as={UnstyledLink}
              href={`/docs/${href}`}
              className={clsxm(
                activeTab === href &&
                  '!bg-gray-100 !text-gray-900 contrast-more:border contrast-more:border-gray-700 dark:!bg-gray-700 dark:!text-gray-100 dark:contrast-more:!border-gray-200',
                'btn-clear-gray-600 dark:btn-clear-gray-300 group flex text-sm font-medium transition justify-start'
              )}
            >
              <div
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border 
                  ${
                    activeTab === href
                      ? `border-secondary-400 text-secondary-400 shadow shadow-secondary-400/40`
                      : `border-gray-500 text-gray-600 dark:border-gray-200/80 dark:text-gray-300`
                  }`}
              >
                <ItemIcon aria-hidden='true' className='h-3.5 w-3.5' />
              </div>
              <div className='ml-2 text-base font-medium text-gray-900 dark:text-gray-200'>
                {activeTab === href && (
                  <span className='sr-only'>Currently selected.</span>
                )}
                {t(name, { ns: 'navbar' })}
              </div>
            </Button>
          </div>
        ))}
        {secondaryNavigation.map(({ groupList, groupName }, i) => (
          <div className='space-y-1 py-2' key={`${groupName}`}>
            {i !== 0 && (
              <div className='mb-4 border-t border-gray-300/50 dark:border-gray-200/10'></div>
            )}
            <h3
              className='select-none px-3 text-xs font-semibold uppercase tracking-wider text-gray-500 contrast-more:text-gray-700 dark:text-gray-400 dark:contrast-more:text-slate-100'
              id={`${groupName}-headline`}
            >
              {t(groupName, { ns: 'navbar' })}
            </h3>
            <div
              aria-labelledby={`${groupName}-headline`}
              className='space-y-1'
              role='group'
            >
              {groupList.map(({ name, href, isDone }) =>
                !isDone ? (
                  <p
                    key={`isNotDone.${groupName}.${name}`}
                    className={`hocus:contrast-bg hocus:contrast-text group flex items-center rounded-md px-3 py-2 text-sm font-medium
                  ${!isDone ? 'opacity-50' : ''} 
                  ${
                    activeTab === href
                      ? `bg-gray-100 text-gray-900 contrast-more:border contrast-more:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:contrast-more:border-gray-200`
                      : `text-gray-700 contrast-more:text-gray-900 dark:text-gray-300/80 dark:contrast-more:text-gray-100`
                  }`}
                  >
                    {t(name)}
                    {!isDone && (
                      <span className='pl-1 text-[0.65rem]'>
                        ({t('in-progress', { ns: 'navbar' })})
                      </span>
                    )}
                  </p>
                ) : (
                  <Button
                    as={UnstyledLink}
                    href={`/docs/${href}`}
                    key={`${groupName}.${name}`}
                    className={clsxm([
                      'btn-clear-gray-600 dark:btn-clear-gray-300 px-3 py-2 text-sm font-medium justify-start',
                      activeTab === href &&
                        `!bg-gray-100 !text-gray-900 contrast-more:border contrast-more:border-gray-700 dark:!bg-gray-700 dark:!text-gray-100 dark:contrast-more:!border-gray-200`,
                    ])}
                  >
                    <span className='flex items-center truncate'>
                      {t(name, { ns: 'navbar' })}
                      {!isDone && (
                        <span className='pl-1 text-[0.65rem]'>
                          ({t('in-progress')})
                        </span>
                      )}
                    </span>
                  </Button>
                )
              )}
            </div>
          </div>
        ))}
        <div className='flex-grow' />
      </nav>
      <div
        className={clsxm(
          'sticky bottom-0 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] w-full flex justify-center',
          bgClassName
        )}
      >
        <Menu
          buttonClassName='w-full btn-clear-gray dark:btn-clear-gray-300'
          className='w-full'
          iconEnd={ChevronUpIcon}
          iconEndPosition='between'
          label={t(`Language`, { ns: 'navbar' })}
          menuPositionY='top'
          size='sm'
          iconStart={
            i18n?.language === 'en' ? GlobeAmericasIcon : GlobeAsiaAustraliaIcon
          }
          iconClassName='w-4 h-4'
          menus={languages.map(({ code, country_code, name }) => ({
            label: name,
            iconStart: <span className={`fi fi-${country_code} rounded-sm`} />,
            disabled: code === i18n?.language,
            sr: t('switch-language', { ns: 'navbar', name }),
            onClick: () =>
              router.push({ pathname, query }, asPath, {
                locale: code,
              }),
          }))}
        />
      </div>
    </Fragment>
  );
};

export const SidebarMenu = ({ className = '', ...props }) => {
  return (
    <motion.div
      layoutScroll
      {...props}
      className={clsxm(
        'top-0 left-0 z-40 flex h-[100vh] max-h-[100dvh] w-64 overflow-y-auto overflow-x-hidden border-r border-gray-200 bg-gray-50 pl-[calc(env(safe-area-inset-right)-1rem)] contrast-more:border-gray-600 dark:border-gray-700 sm:w-56 2xl:w-64',
        bgClassName,
        className
      )}
    >
      <div className='flex w-full flex-1 flex-grow flex-col justify-between'>
        <SidebarHeader />
        <SidebarNavigation />
      </div>
    </motion.div>
  );
};

export const Sidebar = ({ hideNav = false }) => {
  if (hideNav) return null;
  return (
    <div className='sticky top-0 z-[61] hidden self-start transition duration-300 sm:block'>
      <SidebarMenu />
    </div>
  );
};
const IsInsideMobileNavigationContext = createContext(false);

export const useIsInsideMobileNavigation = () => {
  return useContext(IsInsideMobileNavigationContext);
};

export const MobileSidebar = () => {
  const isInsideMobileNavigation = useIsInsideMobileNavigation();
  const { isOpen, toggle, close } = useMobileNavigationStore();
  const { t } = useTranslation('navbar');
  return (
    <IsInsideMobileNavigationContext.Provider value={true}>
      <Button
        type='button'
        color='gray'
        weight='clear'
        onClick={toggle}
        className='-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-500 contrast-more:text-gray-900 dark:hover:bg-gray-800 dark:contrast-more:text-gray-50'
        sr={t('Open Menu')}
      >
        <Bars2Icon aria-hidden='true' className='h-6 w-6' />
      </Button>
      {!isInsideMobileNavigation && (
        <Transition show={isOpen} as={Fragment}>
          <Dialog onClose={close} className='fixed inset-0 z-[100] lg:hidden'>
            <Transition.Child
              as={Fragment}
              enter='duration-300 ease-out'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='duration-200 ease-in'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div
                className='fixed inset-0 bg-zinc-400/20 backdrop-blur-sm dark:bg-black/40'
                aria-hidden='true'
              />
            </Transition.Child>
            <Dialog.Panel>
              <Transition.Child
                as='div'
                enter='duration-500 ease-in-out'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='duration-500 ease-in-out'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
                className='w-min'
              >
                <SidebarMenu />
              </Transition.Child>
            </Dialog.Panel>
          </Dialog>
        </Transition>
      )}
    </IsInsideMobileNavigationContext.Provider>
  );
};
