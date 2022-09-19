import { Menu } from '@fluid-design/fluid-ui';
import {
  BookOpenIcon,
  ChevronUpIcon,
  GlobeAmericasIcon,
  GlobeAsiaAustraliaIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { i18n, useTranslation } from 'next-i18next';
import { MdMouse } from 'react-icons/md';

import clsxm from '@/lib/clsxm';
import { languages } from '@/lib/languages';

import UnstyledLink from './UnstyledLink';
import AppLogo from '../ui/AppLogo';
import packageInfo from '../../../package.json';

const navigation = [
  { name: 'Dashboard', href: 'dashboard', icon: Squares2X2Icon },
  { name: 'Examples', href: 'examples', icon: MdMouse },
  { name: 'Usage', href: 'usage', icon: BookOpenIcon },
];
const secondaryNavigation = [
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
      { name: 'Switch', href: 'form/switch', isDone: false },
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

export const SidebarMenu = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const activeTab = pathname?.split('/')?.pop();
  const { t } = useTranslation();
  return (
    <div className='top-0 left-0 z-40 flex min-h-screen h-fit max-h-[100dvh] w-64 overflow-y-auto overflow-x-hidden border-r border-primary-200 bg-primary-50 pl-[calc(env(safe-area-inset-right)-1rem)] contrast-more:border-primary-600 dark:border-primary-700 dark:bg-primary-900 dark:contrast-more:border-primary-200 dark:contrast-more:bg-[rgb(18,15,13)] sm:w-56 2xl:w-64'>
      <div className='flex w-full flex-1 flex-grow flex-col justify-between'>
        <div className='sticky top-0 z-10 mx-2.5 pt-4 flex items-center justify-start space-x-2 bg-primary-50/80 pb-3 backdrop-blur-md backdrop-filter dark:bg-primary-900/80 lg:mx-4'>
          <span className='sr-only'>Fluid Design</span>
          <AppLogo />
          <UnstyledLink
            className='-mt-[0.125rem] font-rounded font-bold text-primary-700 dark:text-primary-200 md:!text-[1.175rem]'
            href='/'
          >
            <div>Fluid Design</div>
            <div className='-mt-1.5 text-left font-sans text-[0.6rem] font-bold tracking-wide text-primary-500 contrast-more:text-primary-900 dark:text-primary-400 dark:contrast-more:text-primary-50'>
              V{packageInfo.version}
            </div>
          </UnstyledLink>
        </div>
        <nav
          aria-label='Sidebar'
          className='flex flex-1 flex-col gap-2 p-1 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))]'
        >
          {navigation.map(({ name, href, icon: ItemIcon }) => (
            <div className='rounded-md' key={`nav.${name}.${href}`}>
              <Link href={`/docs/${href}`} key={name}>
                <a
                  className={clsxm(
                    activeTab === href
                      ? 'bg-primary-100 text-primary-900 contrast-more:border contrast-more:border-primary-700 dark:bg-primary-700 dark:text-primary-100 dark:contrast-more:border-primary-200'
                      : 'hocus:bg-primary-50 hocus:text-primary-900 dark:hocus:bg-primary-700/80 dark:hocus:text-primary-300 ',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium transition'
                  )}
                >
                  <div
                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border 
                  ${
                    activeTab === href
                      ? `border-secondary-400 text-secondary-400 shadow shadow-secondary-400/40`
                      : `border-primary-500 text-primary-600 dark:border-primary-200/80 dark:text-primary-300`
                  }`}
                  >
                    <ItemIcon aria-hidden='true' className='h-3.5 w-3.5' />
                  </div>
                  <div className='ml-2 text-base font-medium text-primary-900 dark:text-primary-200'>
                    {activeTab === href && (
                      <span className='sr-only'>Currently selected.</span>
                    )}
                    {t(name)}
                  </div>
                </a>
              </Link>
            </div>
          ))}
          {secondaryNavigation.map(({ groupList, groupName }, i) => (
            <div className='space-y-1 py-2' key={`${groupName}`}>
              {i !== 0 && (
                <div className='mb-4 border-t border-primary-300/50 dark:border-primary-200/10'></div>
              )}
              <h3
                className='select-none px-3 text-xs font-semibold uppercase tracking-wider text-primary-500 contrast-more:text-primary-700 dark:text-primary-400 dark:contrast-more:text-slate-100'
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
                      ? `bg-primary-100 text-primary-900 contrast-more:border contrast-more:border-primary-700 dark:bg-primary-700 dark:text-primary-100 dark:contrast-more:border-primary-200`
                      : `text-primary-700 contrast-more:text-primary-900 dark:text-primary-300/80 dark:contrast-more:text-primary-100`
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
                    <Link href={`/docs/${href}`} key={`${groupName}.${name}`}>
                      <a
                        className={clsxm([
                          'hocus:contrast-bg hocus:contrast-text group flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium',
                          !isDone && 'opacity-50',
                          activeTab === href &&
                            `bg-primary-100 text-primary-900 contrast-more:border contrast-more:border-primary-700 dark:bg-primary-700 dark:text-primary-100 dark:contrast-more:border-primary-200`,
                          activeTab !== href &&
                            `clickable text-primary-700 transition-colors hocus:text-primary-800 contrast-more:text-primary-900 dark:text-primary-300/80 dark:hocus:text-primary-100 dark:contrast-more:text-primary-100`,
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
                      </a>
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
          <div className='flex-grow' />
          <Menu
            buttonClassName='w-full btn-clear-primary'
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
            // @ts-ignore
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
      <div
        className="sticky top-0 z-[61] hidden self-start transition duration-300 sm:block"
      >
        <SidebarMenu />
      </div>
    </>
  );
};