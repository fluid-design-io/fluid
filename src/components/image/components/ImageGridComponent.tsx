import { useTranslation } from 'next-i18next';
import Image from 'next/image';

function ImageGridComponent({ setNotification, ...props }) {
  const { t } = useTranslation('image');
  const images = [
    {
      large:
        'https://images.unsplash.com/photo-1514819121162-8f4345eb8fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      author: 'Ray Hennessy',
    },
    {
      large:
        'https://images.unsplash.com/photo-1622631211634-e307f33e4ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=10',
      author: 'Ray Hennessy',
    },
    {
      large:
        'https://images.unsplash.com/photo-1490718687940-0ecadf414600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      author: 'Ray Hennessy',
    },
    {
      large:
        'https://images.unsplash.com/photo-1630497946593-2d38c0fd65a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      author: 'Ray Hennessy',
    },
    {
      large:
        'https://images.unsplash.com/photo-1580598152173-e5fab42e08a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      author: 'Ray Hennessy',
    },
    {
      large:
        'https://images.unsplash.com/photo-1561982558-05602498d458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      author: 'Ray Hennessy',
    },
  ];
  {
    /* transform translate-x-0 is needed to patch ios touch will break rounded corners. */
  }
  return (
    <div
      className={`w-full max-w-xs overflow-hidden transform translate-x-0 shadow component card-bg rounded-xl ${
        props.className ? props.className : `aspect-[1.5/1]`
      }`}
    >
      <div className='grid grid-cols-3 gap-0.5 items-stretch h-full'>
        {images.map(({ large, author }) => (
          <div
            key={large}
            className='relative w-full h-full transition cursor-pointer hover:opacity-90 active:opacity-80'
            tabIndex={0}
            aria-label={`Bird image shot by ${author} from Unsplash.`}
            onClick={() =>
              setNotification({
                enabled: true,
                image: large,
                message: t(`instagram-layout.message`, { ns: 'image' }),
              })
            }
          >
            <Image
              src={large}
              alt={`Bird image shot by ${author} from Unsplash.`}
              layout='fill'
              objectFit='cover'
              className=' select-none pointer-events-none'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGridComponent;
