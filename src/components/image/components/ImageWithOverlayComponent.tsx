import { useTranslation } from 'next-i18next';
import Image from 'next/image';

function ImageWithOverlayComponent({ src = undefined, ...props }) {
  const { t } = useTranslation('image');
  return (
    <div
      className={`relative w-full max-w-xs overflow-hidden shadow component card-bg rounded-xl group focus-within:ring-2 focus-within:ring-primary-600 dark:focus-within:ring-primary-300 outline-none ${
        props.className ? props.className : `h-48`
      }`}
      tabIndex={0}
      aria-label={`${t('with-overlay.ocl', { ns: 'image' })}. ${t(
        'with-overlay.ocldesc',
        { ns: 'image' }
      )}`}
    >
      {/* Background Overlay */}
      <div className='absolute inset-0 z-[4] opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black/10 motion-reduce:duration-500 transition-opacity motion-safe:transition-all pointer-touch:opacity-100 contrast-more:bg-black/20 ' />
      {/* Text Overlay */}
      <div className='px-4 pb-2 pt-6 absolute bottom-0 left-0 right-0 text-left rtl:text-right z-[5] from-black/0 to-black/50 contrast-more:to-black/90 motion-reduce:duration-500 transition-opacity motion-safe:transition-all bg-gradient-to-b translate-y-[calc(100%-3.875rem)] pointer-touch:translate-y-0 group-hover:translate-y-0 group-focus:translate-y-0'>
        <h2 className='text-xl font-semibold text-sky-100'>
          {t('with-overlay.ocl', { ns: 'image' })}
        </h2>
        <p className='leading-tight transition-opacity opacity-0 text-sky-100 group-hover:opacity-100 group-focus:opacity-100 pointer-touch:opacity-100 motion-reduce:duration-500 motion-safe:transition-all'>
          {t('with-overlay.ocldesc', { ns: 'image' })}
        </p>
      </div>
      {/* Image Background */}
      <div className='relative w-full h-48'>
        <Image
          src={
            src
              ? src
              : 'https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'
          }
          alt={t('with-overlay.ocldesc', { ns: 'image' })}
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  );
}

export default ImageWithOverlayComponent;
