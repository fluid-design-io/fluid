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
      className={`w-full max-w-xs overflow-hidden rounded-lg shadow-lg md:!w-2/3 bg-primary-50 dark:bg-primary-900 shadow-primary-900/10 dark:shadow-primary-900/30 component contrast-more:bg-white dark:contrast-more:bg-primary-900 contrast-more:contrast-ring  ${
        props.className ? props.className : ``
      }`}
    >
      <ul
        aria-label={t('WithIcon.ul', { ns: 'list' })}
        className='divide-y divide-primary-200/70 dark:divide-primary-700/70 contrast-more:divide-primary-600 dark:contrast-more:divide-primary-200'
      >
        {list.map(({ name, Icon }) => (
          <li key={name}>
            <button
              className='flex items-center justify-start w-full px-4 py-2 capitalize transition outline-none select-none hover:bg-primary-200/30 focus-visible:bg-primary-200/30 dark:hover:bg-primary-600/30 dark:focus-visible:bg-primary-600/30 hover:contrast-more:bg-amber-300 dark:hover:contrast-more:bg-amber-400 text-primary-700 dark:text-primary-200 contrast-more:text-primary-900 dark:contrast-more:text-primary-50 dark:contrast-more:focus-visible:text-primary-900 dark:contrast-more:hover:text-primary-900'
              onClick={() =>
                setNotification({
                  enabled: true,
                  message: name,
                  Icon,
                })
              }
            >
              <Icon className="w-4 h-4 mr-2" />
              <span>{name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListWithIconComponent;
