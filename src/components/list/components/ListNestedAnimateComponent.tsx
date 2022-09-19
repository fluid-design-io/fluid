import { Disclosure } from '@headlessui/react';
import {
  ChartBarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

function ListNestedAnimateComponent({ setNotification, ...props }) {
  const { t } = useTranslation('list');
  const shouldReduceMotion = useReducedMotion();
  const rowStyle =
    'hover:bg-primary-200/30 focus-visible:bg-primary-200/30 dark:hover:bg-primary-600/30 dark:focus-visible:bg-primary-600/30 hover:contrast-more:bg-amber-300 dark:hover:contrast-more:bg-amber-400 text-primary-700 dark:text-primary-200 contrast-more:text-primary-900 dark:contrast-more:text-primary-50 dark:contrast-more:focus-visible:text-primary-900 dark:contrast-more:hover:text-primary-900 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-400 dark:focus-within:ring-primary-500 contrast-more:focus-within:ring-primary-900 dark:contrast-more:focus-within:ring-primary-200 focus-within:ring-inset transition-colors [-webkit-tap-highlight-color:transparent]';
  const navigation = [
    { name: 'Dashboard', Icon: HomeIcon, current: true, href: '#' },
    {
      name: 'Reports',
      Icon: FolderIcon,
      children: [
        { name: 'Overview', href: '#' },
        { name: 'Filter', href: '#' },
        { name: 'Calendar', href: '#' },
        { name: 'Settings', href: '#' },
      ],
    },
    {
      name: 'History',
      Icon: UsersIcon,
      children: [
        { name: 'Overview', href: '#' },
        { name: 'Filter', href: '#' },
        { name: 'Calendar', href: '#' },
        { name: 'Settings', href: '#' },
      ],
    },
    {
      name: 'Analytics',
      Icon: ChartBarIcon,
      children: [
        { name: 'Overview', href: '#' },
        { name: 'Filter', href: '#' },
        { name: 'Calendar', href: '#' },
        { name: 'Settings', href: '#' },
      ],
    },
  ];

  const ListPanel = ({ children }) => (
    <motion.div
      animate='open'
      className="overflow-hidden !mt-0"
      exit='collapsed'
      initial='collapsed'
      key={`${name}.content`}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: shouldReduceMotion ? 0.2 : 0.5,
      }}
      variants={{
        open: { opacity: 1, height: 'auto' },
        collapsed: {
          opacity: 0,
          height: shouldReduceMotion ? 'auto' : 0,
        },
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <div
      className={`w-full max-w-xs overflow-hidden rounded-lg shadow-lg md:!w-2/3 bg-primary-50 dark:bg-primary-900 shadow-primary-900/10 dark:shadow-primary-900/30 component contrast-more:bg-white dark:contrast-more:bg-primary-900 contrast-more:contrast-ring  ${
        props.className ? props.className : ``
      }`}
    >
      <nav
        aria-label='Sidebar'
        className='flex-1 px-2 py-1 contrast-more:divide-y contrast-more:divide-primary-600 dark:contrast-more:divide-primary-200'
      >
        {navigation.map(({ children, name, Icon }) =>
          !children ? (
            <button
              className={`flex items-center justify-start w-full px-4 py-2 my-1 capitalize transition outline-none select-none rounded-md ${rowStyle}`}
              key={`nav.${name}`}
              onClick={() =>
                setNotification({
                  enabled: true,
                  message: name /* t(`Card Button`, { ns: "card" }) */,
                  Icon,
                })
              }
            >
              <Icon
                aria-hidden='true'
                className="w-4 h-4 ltr:mr-2 rtl:ml-2"
              />
              {name}
            </button>
          ) : (
            <Disclosure as='div' className='space-y-1' key={name}>
              {({ open }) => (
                <>
                  <div className="py-1">
                    <Disclosure.Button
                      aria-live='assertive'
                      as='button'
                      className={`flex px-4 py-2 w-full justify-between items-center rounded-md ${rowStyle} ${
                        open
                          ? `bg-primary-200/50 hover:bg-primary-200/50 dark:bg-primary-600/50 dark:hover:bg-primary-600/50 contrast-more:bg-amber-300 dark:contrast-more:bg-amber-400 text-primary-700 dark:text-primary-200 contrast-more:text-primary-900 dark:contrast-more:text-primary-900`
                          : ``
                      }`}
                    >
                      <span className="flex items-center">
                        <Icon
                          aria-hidden='true'
                          className='flex-shrink-0 w-4 h-4 ltr:mr-2 rtl:ml-2'
                        />
                        <p className='flex-1'>{name}</p>
                      </span>
                      <span className="rtl:!block hidden">
                        <ChevronLeftIcon
                          className={`w-4 h-4 transform transition ${
                            open ? `ltr:rotate-90 rtl:-rotate-90` : 'rotate-0'
                          }`}
                        />
                      </span>
                      <span className="rtl:hidden block">
                        <ChevronRightIcon
                          className={`w-4 h-4 transform transition ${
                            open ? `rotate-90` : 'rotate-0'
                          }`}
                        />
                      </span>
                    </Disclosure.Button>
                  </div>
                  <AnimatePresence>
                    {open && (
                      <Disclosure.Panel as={ListPanel} static>
                        {children.map((item, i) => (
                          <Disclosure.Button
                            className={`flex items-center w-full py-2 pr-2 ltr:pl-10 rtl:pr-10 select-none cursor-pointer rounded-md ${rowStyle}`}
                            key={item.name}
                            onClick={() =>
                              setNotification({
                                enabled: true,
                                message:
                                  item.name /* t(`Card Button`, { ns: "card" }) */,
                                Icon,
                              })
                            }
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          )
        )}
      </nav>
    </div>
  );
}

export default ListNestedAnimateComponent;