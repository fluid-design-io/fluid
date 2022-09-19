import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import icon from '/public/assets/under-construction.svg';

function UnderConstruction({ message = 'under-construction' }) {
  const { t } = useTranslation('common');
  return (
    <div className='items-center justify-center min-h-[calc(100vh-61px)] relative flex z-0'>
      <div>
        <div className='w-32 h-32 mx-auto overflow-hidden lg:w-64 lg:h-64'>
          <Image
            alt='construction'
            layout='responsive'
            objectFit='contain'
            priority
            src={icon}
          />
        </div>
        <p className='pt-4 text-center'>{t(message)}</p>
      </div>
    </div>
  );
}

export default UnderConstruction;