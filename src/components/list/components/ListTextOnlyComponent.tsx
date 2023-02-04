import { useState } from 'react';

function ListTextOnlyComponent() {
  const list = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'IllinoisIndiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'MontanaNebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'PennsylvaniaRhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];
  const [names, setNames] = useState(list.slice(0, 6));
  const hasMore = names.length < list.length - 6;
  return (
    <div className='component contrast-more:contrast-ring w-full max-w-xs overflow-hidden rounded-lg bg-gray-50 shadow-lg shadow-gray-900/10 contrast-more:bg-white dark:bg-gray-900 dark:shadow-gray-900/30 dark:contrast-more:bg-gray-900 md:!w-2/3'>
      <ul
        aria-label='Load more'
        className='divide-y divide-gray-200/70 contrast-more:divide-gray-600 dark:divide-gray-700/70 dark:contrast-more:divide-gray-200'
      >
        {names.map((name) => (
          <li
            className='focus-visible:bgstone-200/30 px-4 py-2 text-gray-700 outline-none transition hover:bg-gray-200/30 contrast-more:text-gray-900 hover:contrast-more:bg-amber-300 dark:text-gray-200 dark:hover:bg-gray-600/30 dark:focus-visible:bg-gray-600/30 dark:contrast-more:text-gray-50 dark:hover:contrast-more:bg-amber-400 dark:contrast-more:hover:text-gray-900 dark:contrast-more:focus-visible:text-gray-900'
            key={name}
            tabIndex={0}
          >
            {name}
          </li>
        ))}
        {hasMore && (
          <button
            className='w-full py-2 text-center text-sm font-medium text-blue-600 contrast-more:text-base contrast-more:font-semibold dark:text-blue-400'
            onClick={() =>
              hasMore
                ? setNames([
                    ...names,
                    ...list.slice(names.length, names.length + 6),
                  ])
                : null
            }
          >
            Load more
          </button>
        )}
      </ul>
    </div>
  );
}

export default ListTextOnlyComponent;
