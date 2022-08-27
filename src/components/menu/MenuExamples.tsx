import clsxm from '@/lib/clsxm';
import { useToast } from '@/lib/useToast';
import { Menu } from '@fluid-design/fluid-ui';
import { ChevronUpIcon, GlobeIcon } from '@heroicons/react/outline';

const Wrap = ({ className = '', children }) => {
  return (
    <div
      className={clsxm(
        'flex h-full flex-wrap items-center justify-center gap-6 px-4 lg:px-6',
        className
      )}
    >
      {children}
    </div>
  );
};

/* 
  .clickable {
      @apply border border-transparent hocus:border-primary-400/30 hocus:bg-primary-400/10 dark:hocus:border-primary-300/30 dark:hocus:bg-primary-500/10;
  }
*/

const DefaultMenu = () => {
  const [present] = useToast();
  return (
    <Wrap className='pt-16'>
      <Menu
        buttonClassName='hocus:contrast-bg hocus:contrast-text clickable group flex justify-start items-center rounded-md border border-transparent px-3 py-2 text-sm font-regular text-primary-700 transition-colors hocus:text-primary-800 contrast-more:text-primary-900 dark:text-primary-300/80 dark:hocus:text-primary-100 dark:contrast-more:text-primary-100 w-full'
        label={'Menu'}
        iconStart={GlobeIcon}
        iconEnd={ChevronUpIcon}
        iconEndPosition='between'
        menuPositionY='top'
        iconClassName='w-4 h-4'
        // @ts-ignore
        menus={[
          {
            label: 'Menu 1',
            onClick: () =>
              present({
                title: 'Menu 1',
              }),
          },
          {
            label: 'Menu 2',
            onClick: () =>
              present({
                title: 'Menu 2',
              }),
          },
        ]}
      />
    </Wrap>
  );
};

DefaultMenu.displayName = 'DefaultMenu';

export const MenuExamples = Object.assign({}, { Default: DefaultMenu });
