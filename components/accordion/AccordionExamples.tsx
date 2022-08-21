import { Accordion, AccordionPanel } from "@fluid-design/fluid-ui";
import {
  CogIcon,
  InformationCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const dataSimple = [
  {
    title: "Section 1",
    details: (
      <p
        className={`my-2 text-primary-600 contrast-more:text-primary-900 dark:text-primary-300 dark:contrast-more:text-primary-50`}
      >
        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
        ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
        amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo
        ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque
        vulputate.
      </p>
    ),
    isOpen: true,
  },
  {
    title: "Section 2",
    details: (
      <p
        className={`my-2 text-primary-600 contrast-more:text-primary-900 dark:text-primary-300 dark:contrast-more:text-primary-50`}
      >
        Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
        purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis
        porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non
        quam. In suscipit faucibus urna.
      </p>
    ),
    isOpen: false,
  },
  {
    title: "Section 3",
    details: (
      <>
        <p
          className={`my-2 text-primary-600 contrast-more:text-primary-900 dark:text-primary-300 dark:contrast-more:text-primary-50`}
        >
          Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque
          lobortis. Phasellus pellentesque purus in massa. Aenean in pede.
          Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed
          commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis
          leo purus venenatis dui.
        </p>
        <ul
          className={`mb-2 text-primary-600 contrast-more:text-primary-900 dark:text-primary-400 dark:contrast-more:text-primary-50`}
        >
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
        </ul>
      </>
    ),
    isOpen: false,
  },
];

const dataWithIcons = [
  Object.assign({}, dataSimple[0], {
    Icon: CogIcon,
  }),
  Object.assign({}, dataSimple[1], {
    Icon: ShoppingCartIcon,
  }),
  Object.assign({}, dataSimple[2], {
    Icon: InformationCircleIcon,
  }),
];

const AccordionWrap = ({ children }) => (
  <div className="component contrast-more:contrast-ring w-full max-w-xs overflow-hidden rounded-lg bg-primary-50 shadow-lg shadow-primary-900/10 contrast-more:bg-white dark:bg-primary-900 dark:shadow-primary-900/30 dark:contrast-more:bg-primary-900 md:!w-2/3">
    {children}
  </div>
);

const AccordionSimple = () => {
  return (
    <AccordionWrap>
      <Accordion>
        {dataSimple.map((item, index) => (
          <AccordionPanel key={index} header={item.title} isOpen={item.isOpen}>
            {item.details}
          </AccordionPanel>
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
          <AccordionPanel
            key={index}
            header={item.title}
            isOpen={item.isOpen}
            headerIcon={item.Icon}
          >
            {item.details}
          </AccordionPanel>
        ))}
      </Accordion>
    </AccordionWrap>
  );
};

AccordionSimple.displayName = "AccordionSimple";
AccordionWithIcons.displayName = "AccordionWithIcons";

export const AccordionExamples = Object.assign(
  {},
  { Simple: AccordionSimple, WithIcons: AccordionWithIcons }
);
