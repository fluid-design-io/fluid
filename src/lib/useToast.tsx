import { Button } from '@fluid-design/fluid-ui';
import { CursorArrowRaysIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { useId } from 'react';
import toast from 'react-hot-toast';

export interface ToastProps {
  icon?: (props: React.ComponentProps<'svg'>) => React.ReactElement;
  image?: string;
  title?: string;
  message?: string;
  onDismiss?: () => void;
}

const ToastBody = (
  props: ToastProps & {
    t: Toast;
  }
) => {
  const { icon, image, title, message, onDismiss, t } = props;
  const Icon = icon || CursorArrowRaysIcon;
  const id = useId();
  return (
    <AnimatePresence mode='sync'>
      {t.visible && (
        <motion.div
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          className='pointer-events-auto relative mb-4 w-4/5 max-w-[240px] overflow-hidden rounded-full bg-gray-50/75 p-1 shadow-lg shadow-gray-700/10 backdrop-blur-2xl backdrop-filter dark:bg-gray-700/60 sm:w-3/5'
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          initial={{ opacity: 1, y: 80, filter: 'blur(0px)' }}
          key={id}
          layoutId={id}
          transition={{ type: 'spring', bounce: 0.2 }}
        >
          <div className='flex items-center space-x-4'>
            <div className='flex-shrink-0'>
              {image ? (
                <div className='relative h-9 w-9 overflow-hidden rounded-full'>
                  <img alt='notification' src={image} />
                </div>
              ) : (
                <Icon className='ml-2 h-5 w-5 text-gray-800 dark:text-gray-200' />
              )}
            </div>
            <div className='flex-grow'>
              <h4 className='text-center text-sm text-gray-800 dark:text-gray-200'>
                {title ? title : `Clicked`}
              </h4>
              <p className='text-center text-xs font-semibold text-gray-600 dark:text-gray-400'>
                {message}
              </p>
            </div>

            <Button
              className='relative right-1 mr-2 flex-shrink-0 p-1.5'
              color='stone'
              iconOnly
              onClick={() => toast.dismiss(t.id)}
              shape='pill'
              sr='Close Notification'
              weight='clear'
            >
              <XMarkIcon className='h-4 w-4 text-gray-600 dark:text-gray-400' />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const presentToast = (props: ToastProps | any) => {
  toast.custom((t) => <ToastBody {...{ ...props, t }} />);
};

export const useToast = () => [presentToast];
