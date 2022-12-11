import { Accordion } from '@fluid-design/fluid-ui';
import {
  CogIcon,
  InformationCircleIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

import clsxm from '@/lib/clsxm';

const dataSimple = [
  {
    title: 'Shop',
    details: (
      <p className='my-2 text-gray-600 contrast-more:text-gray-900 dark:text-gray-300 dark:contrast-more:text-gray-50'>
        Our shop contains all the tools you need to build a great design system.
        We have a wide range of tools and resources to help you get started.
      </p>
    ),
  },
  {
    title: 'Service',
    details: (
      <p className='my-2 text-gray-600 contrast-more:text-gray-900 dark:text-gray-300 dark:contrast-more:text-gray-50'>
        We offer a wide range of services to help you get started.
      </p>
    ),
  },
  {
    title: 'About',
    details: (
      <>
        <p className='my-2 text-gray-600 contrast-more:text-gray-900 dark:text-gray-300 dark:contrast-more:text-gray-50'>
          We are a small team of designers and developers who create
          high-quality design systems.
        </p>
        <ul className='mb-2 text-gray-600 contrast-more:text-gray-900 dark:text-gray-400 dark:contrast-more:text-gray-50'>
          <li>Beautiful designs</li>
          <li>A11y</li>
          <li>Responsive</li>
        </ul>
      </>
    ),
  },
];

const dataWithIcons = [
  Object.assign({}, dataSimple[0], {
    Icon: ShoppingCartIcon,
  }),
  Object.assign({}, dataSimple[1], {
    Icon: CogIcon,
  }),
  Object.assign({}, dataSimple[2], {
    Icon: InformationCircleIcon,
  }),
];

const AccordionWrap = ({ className = '', children }) => (
  <div
    className={clsxm(
      'component contrast-more:contrast-ring w-full max-w-xs overflow-hidden rounded-lg bg-gray-50 shadow-lg shadow-gray-900/10 contrast-more:bg-white dark:bg-gray-900 dark:shadow-gray-900/30 dark:contrast-more:bg-gray-900 md:!w-2/3',
      className
    )}
  >
    {children}
  </div>
);

const AccordionSimple = ({ className = '' }) => {
  return (
    <AccordionWrap className={className}>
      <Accordion defaultIndex={1}>
        {dataSimple.map((item, index) => (
          <Accordion.Panel header={item.title} key={index}>
            {item.details}
          </Accordion.Panel>
        ))}
      </Accordion>
    </AccordionWrap>
  );
};

const AccordionMultiple = () => {
  return (
    <AccordionWrap>
      <Accordion defaultIndex={[0, 1]} multiple>
        {dataSimple.map((item, index) => (
          <Accordion.Panel header={item.title} key={index}>
            {item.details}
          </Accordion.Panel>
        ))}
      </Accordion>
    </AccordionWrap>
  );
};

const AccordionWithIcons = () => {
  return (
    <AccordionWrap>
      <Accordion defaultIndex={1}>
        {dataWithIcons.map((item, index) => (
          <Accordion.Panel
            header={item.title}
            iconStart={item.Icon}
            key={index}
          >
            {item.details}
          </Accordion.Panel>
        ))}
      </Accordion>
    </AccordionWrap>
  );
};

AccordionSimple.displayName = 'AccordionSimple';
AccordionMultiple.displayName = 'AccordionMultiple';
AccordionWithIcons.displayName = 'AccordionWithIcons';

export const AccordionExamples = Object.assign(
  {},
  {
    Simple: AccordionSimple,
    WithIcons: AccordionWithIcons,
    Multiple: AccordionMultiple,
  }
);
