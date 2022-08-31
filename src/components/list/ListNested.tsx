import { useTranslation } from 'next-i18next';
//@ts-ignore
import nested from 'raw-loader!@/lib/code/ListNestedAnimate.code.txt';
import { useState } from 'react';

import { ListNestedAnimateComponent } from '.';

function ListNested() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation('list');
  const raw = {
    nested,
  };

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
      <div className='grid w-full pt-20 pb-16 place-items-center'>
        <ListNestedAnimateComponent setNotification={setNotification} />
      </div>
    </>
  );
}

export default ListNested;
