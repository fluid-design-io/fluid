import Image from 'next/image';

function ImageWithOverlayComponent({ src = undefined, ...props }) {
  return (
    <div
      tabIndex={0}
      aria-label='$Ocean is life. It is pure greatness and everyone must enjoy it. Shot by Andrzej Kryszpiniuk. From Unsplash.'
      className={`component card-bg group relative w-full max-w-xs overflow-hidden rounded-xl shadow outline-none focus-within:ring-2 focus-within:ring-gray-600 dark:focus-within:ring-gray-300 ${
        props.className ? props.className : `h-48`
      }`}
    >
      {/* Background Overlay */}
      <div className='absolute inset-0 z-[4] bg-black/10 opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100 motion-safe:transition-all motion-reduce:duration-500 contrast-more:bg-black/20 pointer-touch:opacity-100 ' />
      {/* Text Overlay */}
      <div className='absolute bottom-0 left-0 right-0 z-[5] translate-y-[calc(100%-3.875rem)] bg-gradient-to-b from-black/0 to-black/50 px-4 pb-2 pt-6 text-left transition-opacity group-hover:translate-y-0 group-focus:translate-y-0 rtl:text-right motion-safe:transition-all motion-reduce:duration-500 contrast-more:to-black/90 pointer-touch:translate-y-0'>
        <h2 className='text-xl font-semibold text-sky-100'>Ocean is life.</h2>
        <p className='leading-tight text-sky-100 opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100 motion-safe:transition-all motion-reduce:duration-500 pointer-touch:opacity-100'>
          It is pure greatness and everyone must enjoy it. Shot by Andrzej
          Kryszpiniuk. From Unsplash.
        </p>
      </div>
      {/* Image Background */}
      <div className='relative h-48 w-full'>
        <Image
          alt='It is pure greatness and everyone must enjoy it. Shot by Andrzej Kryszpiniuk. From Unsplash.'
          layout='fill'
          objectFit='cover'
          src={
            src
              ? src
              : 'https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'
          }
        />
      </div>
    </div>
  );
}

export default ImageWithOverlayComponent;
