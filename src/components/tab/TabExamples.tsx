import { Tab } from '@fluid-design/fluid-ui';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';

import { CodeFrameComponentWrap } from '../framework/CodeFrameComponentWrap';

const Content = ({ title }) => {
  return (
    <>
      <h2 className='font-semibold text-gray-800 dark:text-gray-200 mb-2'>
        {title}
      </h2>
      <div className='bg-gray-200 dark:bg-gray-800 rounded-lg p-4 h-28 grid place-items-center'>
        <PhotoIcon className='text-gray-400 dark:text-gray-500 w-8 h-8' />
      </div>
    </>
  );
};

const tabs = ['Recent', 'Trending', 'For You'].map((title) => ({
  title,
  content: <Content title={title} />,
}));

const tabClassName =
  'flex h-full items-center justify-center px-4 lg:px-6 w-4/5 max-w-lg';

const DefaultTab = ({ className = '' }) => {
  return (
    <CodeFrameComponentWrap className={clsxm(tabClassName, className)}>
      <Tab tabs={tabs} className='w-full' />
    </CodeFrameComponentWrap>
  );
};

const AsComponent = ({ className = '' }) => {
  return (
    <CodeFrameComponentWrap className={clsxm(tabClassName, className)}>
      <Tab>
        <Tab.List className='w-full'>
          <Tab.ListItem>Tab 1</Tab.ListItem>
          <Tab.ListItem>Tab 2</Tab.ListItem>
          <Tab.ListItem>Tab 3</Tab.ListItem>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Content title='Tab 1' />
          </Tab.Panel>
          <Tab.Panel>
            <Content title='Tab 2' />
          </Tab.Panel>
          <Tab.Panel>
            <Content title='Tab 3' />
          </Tab.Panel>
        </Tab.Panels>
      </Tab>
    </CodeFrameComponentWrap>
  );
};

const ProgrammaticTab = ({ className = '' }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTabIndex((prev) => {
        if (prev === 2) {
          return 0;
        }
        return prev + 1;
      });
    }, 3800);
    return () => clearInterval(interval);
  }, []);
  return (
    <CodeFrameComponentWrap className={clsxm(tabClassName, className)}>
      <Tab
        onChange={setActiveTabIndex as any}
        selectedIndex={activeTabIndex as any}
        tabs={tabs}
        className='w-full'
      />
    </CodeFrameComponentWrap>
  );
};

DefaultTab.displayName = 'DefaultTab';
AsComponent.displayName = 'AsComponent';
ProgrammaticTab.displayName = 'ProgrammaticTab';

export const TabExamples = Object.assign(
  {},
  { Default: DefaultTab, AsComponent, Programmatic: ProgrammaticTab }
);
