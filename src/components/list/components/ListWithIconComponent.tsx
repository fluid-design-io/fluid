import {
  CogIcon,
  GlobeAmericasIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';

function ListWithIconComponent({ setNotification, ...props }) {
  const { t } = useTranslation('list');
  const list = [
    {
      name: t('WithIcon.list.explore', { ns: 'list' }),
      Icon: GlobeAmericasIcon,
    },
    {
      name: t('WithIcon.list.fav', { ns: 'list' }),
      Icon: HeartIcon,
    },
    {
      name: t('WithIcon.list.user', { ns: 'list' }),
      Icon: UserIcon,
    },
    {
      name: t('WithIcon.list.cart', { ns: 'list' }),
      Icon: ShoppingCartIcon,
    },
    {
      name: t('WithIcon.list.settings', { ns: 'list' }),
      Icon: CogIcon,
    },
  ];
  return (
    <div
      className={`w-full max-w-xs overflow-hidden rounded-lg shadow-lg md:!w-2/3 bg-gray-50 dark:bg-gray-900 shadow-gray-900/10 dark:shadow-gray-900/30 component contrast-more:bg-white dark:contrast-more:bg-gray-900 contrast-more:contrast-ring  ${
        props.className ? props.className : ``
      }`}
    >
      <ul
        aria-label={t('WithIcon.ul', { ns: 'list' })}
        className='divide-y divide-gray-200/70 dark:divide-gray-700/70 contrast-more:divide-gray-600 dark:contrast-more:divide-gray-200'
      >
        {list.map(({ name, Icon }) => (
          <li key={name}>
            <button
              className='flex items-center justify-start w-full px-4 py-2 capitalize transition outline-none select-none hover:bg-gray-200/30 focus-visible:bg-gray-200/30 dark:hover:bg-gray-600/30 dark:focus-visible:bg-gray-600/30 hover:contrast-more:bg-amber-300 dark:hover:contrast-more:bg-amber-400 text-gray-700 dark:text-gray-200 contrast-more:text-gray-900 dark:contrast-more:text-gray-50 dark:contrast-more:focus-visible:text-gray-900 dark:contrast-more:hover:text-gray-900'
              onClick={() =>
                setNotification({
                  enabled: true,
                  message: name,
                  Icon,
                })
              }
            >
              <Icon className='w-4 h-4 mr-2' />
              <span>{name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListWithIconComponent;
