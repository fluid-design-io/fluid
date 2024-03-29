import { ImageCollageComponent } from '../image';

export const CardCollageComponent = () => {
  const tags = [
    {
      id: 1,
      name: 'Nature',
    },
    {
      id: 2,
      name: 'Wallpaper',
    },
    {
      id: 3,
      name: 'Fog',
    },
  ];
  return (
    <>
      <ImageCollageComponent />
      <div className='w-full max-w-xs dark:text-white'>
        <div className='pt-4 false'>
          <h3 className='flex items-center font-bold text-left capitalize '>
            Forest
          </h3>
        </div>
        <p className='pt-1 text-sm text-gray-600 dark:text-gray-400 contrast-more:text-gray-800 dark:contrast-more:text-gray-100 contrast-more:font-medium'>
          32 photos •{' '}
          <span className='cursor-pointer hover:opacity-80 hover:underline'>
            <a aria-label='Browse more images by John Doe' href=''>
              By John Doe
            </a>
          </span>
        </p>
        <div className='-mt-1'>
          <ul className='flex flex-wrap justify-start w-full pt-4 gap-x-3 no-scroll'>
            {tags.map(({ id, name }) => (
              <li className='list-none' key={id}>
                <button
                  aria-label={`Browse category related to ${name}`}
                  className='px-4 py-1 text-sm font-medium capitalize rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-200 dark:bg-gray-700 contrast-more:hover:ring-2 contrast-more:hover:ring-gray-800 dark:contrast-more:hover:ring-gray-50 contrast-more:hover:ring-offset-2 hover:bg-gray-300 dark:hover:bg-gray-600 contrast-more:font-semibold contrast-more:border contrast-more:border-gray-700 dark:contrast-more:border-gray-200 dark:contrast-more:bg-gray-800 dark:contrast-more:text-gray-50 contrast-more:text-gray-800'
                  // onClick={() => {}}
                >
                  <span className='sr-only'>{name}</span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
