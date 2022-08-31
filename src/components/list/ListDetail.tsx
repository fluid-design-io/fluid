import { useTranslation } from 'next-i18next';
//@ts-ignore
import withstar from 'raw-loader!@/lib/code/ListDetail.code.txt';
import { useState } from 'react';

import { ListDetailLargeComponent } from '.';
import ListDetailComponent from './components/ListDetailComponent';

function ListDetail() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation('common');
  const raw = {
    withstar,
    large: ``,
  };
  const features: { [x: string]: CodeBlockFeatureProps } = {
    withstar: {
      interactions: {
        hover: true,
        click: {
          description: 'List item and start button are cliable.',
        },
      },
      ui: {
        RTL: true,
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
        <ListDetailComponent setNotification={setNotification} />
      </div>
      <div className='grid w-full pt-20 pb-16 place-items-center'>
        <ListDetailLargeComponent />
      </div>
    </>
  );
}

export default ListDetail;
