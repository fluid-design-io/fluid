import Image from 'next/image';

const ImageCollageComponent = ({ srcs = undefined, ...props }) => {
  return (
    <div
      tabIndex={0}
      className={`component component card-bg mx-auto grid aspect-square w-full max-w-xs cursor-pointer select-none grid-cols-3 gap-x-0.5 overflow-hidden rounded-xl shadow focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 motion-safe:transition motion-safe:hover:scale-[0.992] motion-safe:active:scale-[0.98] contrast-more:hover:ring-2 contrast-more:hover:ring-primary-800 contrast-more:hover:ring-offset-2 dark:contrast-more:hover:ring-primary-50  ${
        props.className ? props.className : ``
      }`}
      aria-label="Collage related to Forest, by John Doe"
      // onClick={
      //   () =>
      //     handleClick(
      //       "Image collage"
      //     ) /* You can use router() to push to a new href once the component is clicked, it is better than wrapping it with an <a /> tag, which is not recommended. */
      // }
    >
      <div className='pointer-events-none relative col-span-2 h-full w-full select-none'>
        <Image
          alt="Beautiful forest from bird's eye view. By Geran de Klerk from Unsplash."
          layout='fill'
          objectFit='cover'
          src={
            srcs
              ? srcs[0]
              : 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
          }
        />
      </div>
      <div className='pointer-events-none grid select-none grid-flow-col grid-rows-2 gap-0.5'>
        <div className='relative h-full w-full'>
          <Image
            alt='Foggy forest in the morning. By Marita Kavelashvili from Unsplash.'
            layout='fill'
            objectFit='cover'
            src={
              srcs
                ? srcs[1]
                : 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
            }
          />
        </div>
        <div className='pointer-events-none relative h-full w-full select-none'>
          <Image
            alt='Beautiful forest from low angle view. By kazuend from Unsplash.'
            layout='fill'
            objectFit='cover'
            src={
              srcs
                ? srcs[2]
                : 'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
            }
          />
        </div>
      </div>
    </div>
  );
};
export default ImageCollageComponent;
