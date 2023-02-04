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

function ListNestedAnimateComponent({ setNotification, ...props }) {
  const shouldReduceMotion = useReducedMotion();
  const rowStyle =
    'hover:bg-gray-200/30 focus-visible:bg-gray-200/30 dark:hover:bg-gray-600/30 dark:focus-visible:bg-gray-600/30 hover:contrast-more:bg-amber-300 dark:hover:contrast-more:bg-amber-400 text-gray-700 dark:text-gray-200 contrast-more:text-gray-900 dark:contrast-more:text-gray-50 dark:contrast-more:focus-visible:text-gray-900 dark:contrast-more:hover:text-gray-900 focus-within:outline-none focus-within:ring-1 focus-within:ring-gray-400 dark:focus-within:ring-gray-500 contrast-more:focus-within:ring-gray-900 dark:contrast-more:focus-within:ring-gray-200 focus-within:ring-inset transition-colors [-webkit-tap-highlight-color:transparent]';
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
      className='!mt-0 overflow-hidden'
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
      className={`component contrast-more:contrast-ring w-full max-w-xs overflow-hidden rounded-lg bg-gray-50 shadow-lg shadow-gray-900/10 contrast-more:bg-white dark:bg-gray-900 dark:shadow-gray-900/30 dark:contrast-more:bg-gray-900 md:!w-2/3  ${
        props.className ? props.className : ``
      }`}
    >
      <nav
        aria-label='Sidebar'
        className='flex-1 px-2 py-1 contrast-more:divide-y contrast-more:divide-gray-600 dark:contrast-more:divide-gray-200'
      >
        {navigation.map(({ children, name, Icon }) =>
          !children ? (
            <button
              className={`my-1 flex w-full select-none items-center justify-start rounded-md px-4 py-2 capitalize outline-none transition ${rowStyle}`}
              key={`nav.${name}`}
              onClick={() =>
                setNotification({
                  enabled: true,
                  message: name /* t(`Card Button`, { ns: "card" }) */,
                  Icon,
                })
              }
            >
              <Icon aria-hidden='true' className='h-4 w-4 ltr:mr-2 rtl:ml-2' />
              {name}
            </button>
          ) : (
            <Disclosure as='div' className='space-y-1' key={name}>
              {({ open }) => (
                <>
                  <div className='py-1'>
                    <Disclosure.Button
                      aria-live='assertive'
                      as='button'
                      className={`flex w-full items-center justify-between rounded-md px-4 py-2 ${rowStyle} ${
                        open
                          ? `bg-gray-200/50 text-gray-700 hover:bg-gray-200/50 contrast-more:bg-amber-300 contrast-more:text-gray-900 dark:bg-gray-600/50 dark:text-gray-200 dark:hover:bg-gray-600/50 dark:contrast-more:bg-amber-400 dark:contrast-more:text-gray-900`
                          : ``
                      }`}
                    >
                      <span className='flex items-center'>
                        <Icon
                          aria-hidden='true'
                          className='h-4 w-4 flex-shrink-0 ltr:mr-2 rtl:ml-2'
                        />
                        <p className='flex-1'>{name}</p>
                      </span>
                      <span className='hidden rtl:!block'>
                        <ChevronLeftIcon
                          className={`h-4 w-4 transform transition ${
                            open ? `ltr:rotate-90 rtl:-rotate-90` : 'rotate-0'
                          }`}
                        />
                      </span>
                      <span className='block rtl:hidden'>
                        <ChevronRightIcon
                          className={`h-4 w-4 transform transition ${
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
                            className={`flex w-full cursor-pointer select-none items-center rounded-md py-2 pr-2 ltr:pl-10 rtl:pr-10 ${rowStyle}`}
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
