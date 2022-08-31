import { Accordion } from '@fluid-design/fluid-ui';
import {
  CogIcon,
  InformationCircleIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

const dataSimple = [
  {
    title: 'Shop',
    details: (
      <p
        className={`my-2 text-primary-600 contrast-more:text-primary-900 dark:text-primary-300 dark:contrast-more:text-primary-50`}
      >
        Our shop contains all the tools you need to build a great design system.
        We have a wide range of tools and resources to help you get started.
      </p>
    ),
    isOpen: true,
  },
  {
    title: 'Service',
    details: (
      <p
        className={`my-2 text-primary-600 contrast-more:text-primary-900 dark:text-primary-300 dark:contrast-more:text-primary-50`}
      >
        We offer a wide range of services to help you get started.
      </p>
    ),
    isOpen: false,
  },
  {
    title: 'About',
    details: (
      <>
        <p
          className={`my-2 text-primary-600 contrast-more:text-primary-900 dark:text-primary-300 dark:contrast-more:text-primary-50`}
        >
          We are a small team of designers and developers who create
          high-quality design systems.
        </p>
        <ul
          className={`mb-2 text-primary-600 contrast-more:text-primary-900 dark:text-primary-400 dark:contrast-more:text-primary-50`}
        >
          <li>Beautiful designs</li>
          <li>A11y</li>
          <li>Responsive</li>
        </ul>
      </>
    ),
    isOpen: false,
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

const AccordionWrap = ({ children }) => (
  <div className='component contrast-more:contrast-ring w-full max-w-xs overflow-hidden rounded-lg bg-primary-50 shadow-lg shadow-primary-900/10 contrast-more:bg-white dark:bg-primary-900 dark:shadow-primary-900/30 dark:contrast-more:bg-primary-900 md:!w-2/3'>
    {children}
  </div>
);

const AccordionSimple = () => {
  return (
    <AccordionWrap>
      <Accordion>
        {dataSimple.map((item, index) => (
          <Accordion.Panel key={index} header={item.title} isOpen={item.isOpen}>
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
      <Accordion>
        {dataWithIcons.map((item, index) => (
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
    </AccordionWrap>
  );
};

AccordionSimple.displayName = 'AccordionSimple';
AccordionWithIcons.displayName = 'AccordionWithIcons';

export const AccordionExamples = Object.assign(
  {},
  { Simple: AccordionSimple, WithIcons: AccordionWithIcons }
);
