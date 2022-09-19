import { Accordion } from '@fluid-design/fluid-ui';

const data = [
  {
    title: 'Section 1',
    details: (
      <p className='my-2 text-gray-600 dark:text-gray-300 contrast-more:text-gray-900 dark:contrast-more:text-gray-50'>
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
    title: 'Section 2',
    details: (
      <p className='my-2 text-gray-600 dark:text-gray-300 contrast-more:text-gray-900 dark:contrast-more:text-gray-50'>
        Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
        purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis
        porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non
        quam. In suscipit faucibus urna.
      </p>
    ),
    isOpen: false,
  },
  {
    title: 'Section 3',
    details: (
      <>
        <p className='my-2 text-gray-600 dark:text-gray-300 contrast-more:text-gray-900 dark:contrast-more:text-gray-50'>
          Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque
          lobortis. Phasellus pellentesque purus in massa. Aenean in pede.
          Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed
          commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis
          leo purus venenatis dui.
        </p>
        <ul className='mb-2 text-gray-600 dark:text-gray-400 contrast-more:text-gray-900 dark:contrast-more:text-gray-50'>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
        </ul>
      </>
    ),
    isOpen: false,
  },
];

function AccordionSimpleComponent() {
  return (
    <div className='w-full max-w-xs overflow-hidden rounded-lg shadow-lg md:!w-2/3 bg-gray-50 dark:bg-gray-900 shadow-gray-900/10 dark:shadow-gray-900/30 component contrast-more:bg-white dark:contrast-more:bg-gray-900 contrast-more:contrast-ring'>
      <Accordion>
        {data.map((item, index) => (
          <Accordion.Panel header={item.title} isOpen={item.isOpen} key={index}>
            {item.details}
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
}

export default AccordionSimpleComponent;
