import Image from 'next/image';

import icon from '/public/assets/under-construction.svg';

function UnderConstruction({ message = 'under-construction' }) {
  return (
    <div className='relative z-0 flex min-h-[calc(100vh-61px)] items-center justify-center'>
      <div>
        <div className='mx-auto h-32 w-32 overflow-hidden lg:h-64 lg:w-64'>
          <Image
            alt='construction'
            layout='responsive'
            objectFit='contain'
            priority
            src={icon}
          />
        </div>
        <p className='pt-4 text-center'>{message}</p>
      </div>
    </div>
  );
}

export default UnderConstruction;
