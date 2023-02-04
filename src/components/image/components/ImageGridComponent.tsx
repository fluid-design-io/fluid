import Image from 'next/image';

function ImageGridComponent({ setNotification, ...props }) {
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
      className={`component card-bg w-full max-w-xs translate-x-0 transform overflow-hidden rounded-xl shadow ${
        props.className ? props.className : `aspect-[1.5/1]`
      }`}
    >
      <div className='grid h-full grid-cols-3 items-stretch gap-0.5'>
        {images.map(({ large, author }) => (
          <div
            aria-label={`Bird image shot by ${author} from Unsplash.`}
            className='relative h-full w-full cursor-pointer transition hover:opacity-90 active:opacity-80'
            key={large}
            tabIndex={0}
            onClick={() =>
              setNotification({
                enabled: true,
                image: large,
                message: 'Instagram Layout',
              })
            }
          >
            <Image
              alt={`Bird image shot by ${author} from Unsplash.`}
              className=' pointer-events-none select-none'
              layout='fill'
              objectFit='cover'
              src={large}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGridComponent;
