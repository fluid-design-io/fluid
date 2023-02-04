import { useState } from 'react';

import { CodeBlockFeatureProps } from '@/interfaces/CodeBlock';

import { ListNestedAnimateComponent } from '.';

function ListNested() {
  const [notification, setNotification] = useState(undefined);

  const features: { [x: string]: CodeBlockFeatureProps } = {
    nested: {
      interactions: {
        hover: true,
        click: true,
      },
      ui: {
        darkMode: true,
        RTL: {
          description:
            'Icons and arrows will correctly positioned in RTL mode.',
        },
      },
      transitions: {
        reduceMotion: {
          description:
            'When reduce-motion enabled, exapnd/collapse animation will not be played.',
        },
      },
      accessibility: {
        keyboardFocus: true,
        contrast: {
          description:
            'A divide border will be added to seperate each items. When hover, item background will change to bright yellow.',
        },
      },
    },
  };
  return (
    <>
      <div className='grid w-full place-items-center pt-20 pb-16'>
        <ListNestedAnimateComponent setNotification={setNotification} />
      </div>
    </>
  );
}

export default ListNested;
