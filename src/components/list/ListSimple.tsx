import { useState } from 'react';

import { CodeBlockFeatureProps } from '@/interfaces/CodeBlock';

import { ListWithIconComponent } from '.';
import ListTextOnlyComponent from './components/ListTextOnlyComponent';

function ListSimple() {
  const [notification, setNotification] = useState(undefined);

  const features: { [x: string]: CodeBlockFeatureProps } = {
    textOnly: {
      interactions: {
        hover: true,
      },
      ui: {
        darkMode: true,
      },
      accessibility: {
        contrast: {
          description:
            'A divide border will be added to seperate each items. When hover, item background will change to bright yellow.',
        },
      },
    },
    withIcon: {
      interactions: {
        hover: true,
        click: true,
      },
      ui: {
        darkMode: true,
      },
      accessibility: {
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
        <ListTextOnlyComponent />
      </div>
      <div className='grid w-full place-items-center pt-20 pb-16'>
        <ListWithIconComponent setNotification={setNotification} />
      </div>
    </>
  );
}

export default ListSimple;
