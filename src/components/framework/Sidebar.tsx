import { Button, Menu } from '@fluid-design/fluid-ui';
import {
  BookOpenIcon,
  ChevronUpIcon,
  GlobeAmericasIcon,
  GlobeAsiaAustraliaIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';
import { i18n, useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdMouse } from 'react-icons/md';

import { ThemeSwitch } from '@/components/ThemeSwitch';
import { useThemeMode } from '@/lib/ThemeContext';
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
      { name: 'Tab', href: 'tab', isDone: false },
      // { name: "Table", href: "table", isDone: false },
      // { name: "Tooltip", href: "tooltip", isDone: false },
    ],
  },
  {
    groupName: 'Forms',
    groupList: [
      { name: 'Validation', href: 'form/validation', isDone: false },
      { name: 'Combobox', href: 'form/combobox', isDone: false },
      { name: 'Switch', href: 'form/switch', isDone: true },
      { name: 'Input', href: 'form/input', isDone: true },
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

export const SidebarMenu = ({ className = '' }) => {
  const router = useRouter();
  const [mode, setMode] = useThemeMode(true);
  const { pathname, asPath, query } = router;
  const activeTab = pathname.split('docs/')[1];
  const { t } = useTranslation();
  return (
    <div
      className={clsxm(
        'top-0 left-0 z-40 flex min-h-screen h-fit max-h-[100dvh] w-64 overflow-y-auto overflow-x-hidden border-r border-gray-200 bg-gray-50 pl-[calc(env(safe-area-inset-right)-1rem)] contrast-more:border-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:contrast-more:border-gray-200 dark:contrast-more:bg-[rgb(18,15,13)] sm:w-56 2xl:w-64',
        className
      )}
    >
      <div className='flex w-full flex-1 flex-grow flex-col justify-between'>
        <div className='sticky top-0 z-10 mx-2.5 pl-3.5 pt-4 flex items-center justify-between space-x-2 bg-gray-50/80 pb-3 backdrop-blur-md backdrop-filter dark:bg-gray-900/80 lg:mx-4'>
          <div className='flex justify-start items-center gap-2'>
            <span className='sr-only'>Fluid Design</span>
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
          <div className='sm:hidden'>
            <ThemeSwitch
              handleModeChange={(m) => setMode(m)}
              mode={mode as 'light' | 'dark'}
            />
          </div>
        </div>
        <nav
          aria-label='Sidebar'
          className='flex flex-1 flex-col gap-2 p-1 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))]'
        >
          {navigation.map(({ name, href, icon: ItemIcon }) => (
            <div className='rounded-md' key={`nav.${name}.${href}`}>
              <Button
                as={UnstyledLink}
                href={`/docs/${href}`}
                className={clsxm(
                  activeTab === href &&
                    '!bg-gray-100 !text-gray-900 contrast-more:border contrast-more:border-gray-700 dark:!bg-gray-700 dark:!text-gray-100 dark:contrast-more:!border-gray-200',
                  'btn-clear-gray-600 group flex text-sm font-medium transition justify-start'
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
                  {t(name)}
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
                {t(groupName)}
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
                        'btn-clear-gray-600 px-3 py-2 text-sm font-medium justify-start',
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
          <Menu
            buttonClassName='w-full btn-clear-gray'
            iconEnd={ChevronUpIcon}
            iconEndPosition='between'
            label={t(`Language`, { ns: 'navbar' })}
            menuPositionY='top'
            size='sm'
            iconStart={
              i18n?.language === 'en'
                ? GlobeAmericasIcon
                : GlobeAsiaAustraliaIcon
            }
            iconClassName='w-4 h-4'
            menus={languages.map(({ code, country_code, name }) => ({
              label: name,
              iconStart: (
                <span className={`fi fi-${country_code} rounded-sm`} />
              ),
              disabled: code === i18n?.language,
              sr: t('switch-language', { ns: 'navbar', name }),
              onClick: () =>
                router.push({ pathname, query }, asPath, {
                  locale: code,
                }),
            }))}
          />
        </nav>
      </div>
    </div>
  );
};

export const Sidebar = ({ hideNav = false, docNav = undefined }) => {
  return (
    <>
      <div className='sticky top-0 z-[61] hidden self-start transition duration-300 sm:block'>
        <SidebarMenu />
      </div>
    </>
  );
};
