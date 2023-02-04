import {
  CogIcon,
  GlobeAmericasIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

function ListWithIconComponent({ setNotification, ...props }) {
  const list = [
    {
      name: 'explore',
      Icon: GlobeAmericasIcon,
    },
    {
      name: 'favorites',
      Icon: HeartIcon,
    },
    {
      name: 'user',
      Icon: UserIcon,
    },
    {
      name: 'cart',
      Icon: ShoppingCartIcon,
    },
    {
      name: 'settings',
      Icon: CogIcon,
    },
  ];
  return (
    <div
      className={`component contrast-more:contrast-ring w-full max-w-xs overflow-hidden rounded-lg bg-gray-50 shadow-lg shadow-gray-900/10 contrast-more:bg-white dark:bg-gray-900 dark:shadow-gray-900/30 dark:contrast-more:bg-gray-900 md:!w-2/3  ${
        props.className ? props.className : ``
      }`}
    >
      <ul
        aria-label='List of states in United States'
        className='divide-y divide-gray-200/70 contrast-more:divide-gray-600 dark:divide-gray-700/70 dark:contrast-more:divide-gray-200'
      >
        {list.map(({ name, Icon }) => (
          <li key={name}>
            <button
              className='flex w-full select-none items-center justify-start px-4 py-2 capitalize text-gray-700 outline-none transition hover:bg-gray-200/30 focus-visible:bg-gray-200/30 contrast-more:text-gray-900 hover:contrast-more:bg-amber-300 dark:text-gray-200 dark:hover:bg-gray-600/30 dark:focus-visible:bg-gray-600/30 dark:contrast-more:text-gray-50 dark:hover:contrast-more:bg-amber-400 dark:contrast-more:hover:text-gray-900 dark:contrast-more:focus-visible:text-gray-900'
              onClick={() =>
                setNotification({
                  enabled: true,
                  message: name,
                  Icon,
                })
              }
            >
              <Icon className='mr-2 h-4 w-4' />
              <span>{name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListWithIconComponent;
