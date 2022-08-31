import { Accordion } from '@fluid-design/fluid-ui';
import {
  CogIcon,
  InformationCircleIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const data = [
  {
    title: 'Shop',
    details: (
      <p
        className={`my-2 text-primary-600 dark:text-primary-300 contrast-more:text-primary-900 dark:contrast-more:text-primary-50`}
      >
        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
        ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
        amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo
        ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque
        vulputate.
      </p>
    ),
    Icon: ShoppingCartIcon,
    isOpen: true,
  },
  {
    title: 'Service',
    details: (
      <p
        className={`my-2 text-primary-600 dark:text-primary-300 contrast-more:text-primary-900 dark:contrast-more:text-primary-50`}
      >
        Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
        purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis
        porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non
        quam. In suscipit faucibus urna.
      </p>
    ),
    Icon: CogIcon,
    isOpen: false,
  },
  {
    title: 'About',
    details: (
      <>
        <p
          className={`my-2 text-primary-600 dark:text-primary-300 contrast-more:text-primary-900 dark:contrast-more:text-primary-50`}
        >
          Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque
          lobortis. Phasellus pellentesque purus in massa. Aenean in pede.
          Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed
          commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis
          leo purus venenatis dui.
        </p>
        <ul
          className={`mb-2 text-primary-600 dark:text-primary-400 contrast-more:text-primary-900 dark:contrast-more:text-primary-50`}
        >
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
        </ul>
      </>
    ),
    Icon: InformationCircleIcon,
    isOpen: false,
  },
];

function AccordionSimpleWithIconComponent() {
  const { t } = useTranslation('accordion');
  const shouldReduceMotion = useReducedMotion();
  const rowStyle =
    'hover:bg-primary-200/30 focus-visible:bg-primary-200/30 dark:hover:bg-primary-600/30 dark:focus-visible:bg-primary-600/30 hover:contrast-more:bg-amber-300 dark:hover:contrast-more:bg-amber-400 text-primary-700 dark:text-primary-200 contrast-more:text-primary-900 dark:contrast-more:text-primary-50 dark:contrast-more:focus-visible:text-primary-900 dark:contrast-more:hover:text-primary-900 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-400 dark:focus-within:ring-primary-500 contrast-more:focus-within:ring-primary-900 dark:contrast-more:focus-within:ring-primary-200 focus-within:ring-inset transition-colors [-webkit-tap-highlight-color:transparent]';

  const ListPanel = ({ children }) => (
    <motion.div
      key={`${name}.content`}
      initial='collapsed'
      animate='open'
      exit='collapsed'
      variants={{
        open: { opacity: 1, height: 'auto' },
        collapsed: {
          opacity: 0,
          height: shouldReduceMotion ? 'auto' : 0,
        },
      }}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: shouldReduceMotion ? 0.2 : 0.5,
      }}
      className={`overflow-hidden !mt-0 mx-4`}
    >
      {children}
    </motion.div>
  );
  return (
    <div className='w-full max-w-xs px-2 py-1 overflow-hidden rounded-lg shadow-lg md:!w-2/3 bg-primary-50 dark:bg-primary-900 shadow-primary-900/10 dark:shadow-primary-900/30 component contrast-more:bg-white dark:contrast-more:bg-primary-900 contrast-more:contrast-ring'>
      <Accordion>
        {data.map((item, index) => (
          <Accordion.Panel
            key={index}
            header={item.title}
            isOpen={item.isOpen}
            headerIcon={item.Icon}
          >
            {item.details}
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
}

export default AccordionSimpleWithIconComponent;
