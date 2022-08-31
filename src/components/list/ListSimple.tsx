import { useTranslation } from 'next-i18next';
//@ts-ignore
import textOnly from 'raw-loader!@/lib/code/ListSimpleTextOnly.code.txt';
//@ts-ignore
import withIcon from 'raw-loader!@/lib/code/ListWithIcon.code.txt';
import { useState } from 'react';

import { ListWithIconComponent } from '.';
import ListTextOnlyComponent from './components/ListTextOnlyComponent';

function ListSimple() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation('common');
  const raw = {
    textOnly,
    withIcon,
  };

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
      <div className='grid w-full pt-20 pb-16 place-items-center'>
        <ListTextOnlyComponent />
      </div>
      <div className='grid w-full pt-20 pb-16 place-items-center'>
        <ListWithIconComponent setNotification={setNotification} />
      </div>
    </>
  );
}

export default ListSimple;
