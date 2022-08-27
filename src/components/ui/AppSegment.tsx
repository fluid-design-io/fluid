import { Tab } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface SegmentProps extends React.HTMLAttributes<HTMLElement> {
  defaultValue: string[] | string;
  segments: { value: string; label: string; component: JSX.Element }[];
  onUpdate: (value) => void;
}

function AppSegment({
  defaultValue,
  segments,
  onUpdate,
  ...props
}: SegmentProps) {
  return (
    <Tab.Group>
      <Tab.List className={'segment-wrap'}>
        {segments.map((segment) => (
          <Tab
            key={segment.value}
            className={`segmenet-inner pointer-touch:outline-none`}
          >
            {({ selected }) => (
              <SegmentButton {...{ selected, defaultValue, ...segment }} />
            )}
          </Tab>
        ))}
      </Tab.List>
      <AnimatePresence mode='wait'>
        <Tab.Panels>
          {segments.map(({ value, component }) => (
            <Tab.Panel
              className='pointer-touch:outline-none'
              key={`tab.${value}`}
            >
              {component}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </AnimatePresence>
    </Tab.Group>
  );
}

export function SegmentButton({ label, selected }) {
  return (
    <div className={`segment-button ${selected ? 'selected' : ''}`}>
      <span className='relative z-[2] pointer-events-none'>{label}</span>
      {selected && (
        <motion.div layoutId={`${label}.switch`} className={`active-button`} />
      )}
    </div>
  );
}

export default AppSegment;
