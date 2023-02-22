import { Button, useToast } from '@fluid-design/fluid-ui';

import clsxm from '@/lib/clsxm';

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

const ToastSimple = () => {
  const [presentToast] = useToast();
  return (
    <Wrap>
      <Button
        label='Present Toast'
        onClick={() =>
          presentToast({
            title: 'Order placed',
            message: 'Your order has been placed.',
            role: 'success',
            autoDismiss: true,
            duration: 3000,
            component: null,
          } as any)
        }
        weight='light'
        color='emerald'
      />
      <Button
        label='Info Toast'
        onClick={() =>
          presentToast({
            title: 'Order shipped',
            message: 'Your order has been shipped.',
            role: 'info',
          } as any)
        }
        weight='light'
        color='sky'
      />
      <Button
        label='Warning Toast'
        onClick={() =>
          presentToast({
            title: 'Order delayed',
            message: 'Your order has been delayed due to a shipping issue.',
            role: 'warning',
            autoDismiss: false,
          } as any)
        }
        weight='light'
        color='amber'
      />
      <Button
        label='Error Toast'
        onClick={() =>
          presentToast({
            title: 'Order failed',
            message: 'Your order has failed.',
            role: 'error',
            autoDismiss: false,
          } as any)
        }
        weight='light'
        color='red'
      />
      <Button
        label='Default Toast'
        onClick={() =>
          presentToast({
            title: 'Order update',
            message: 'You have an order update.',
            role: 'default',
          } as any)
        }
        weight='light'
        color='gray'
      />
    </Wrap>
  );
};

const ToastCustom = () => {
  const [presentToast] = useToast();
  const component = ({ dismiss }) => (
    <div className='flex flex-col items-center justify-center gap-4 dark:text-white p-2'>
      <h3 className='text-2xl font-bold'>Custom Body</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
      </p>
      <div className='flex justify-between w-full'>
        <div className='flex-grow' />
        <Button
          label='Dismiss'
          onClick={dismiss}
          color='fuchsia'
          weight='clear'
          size='sm'
        />
      </div>
    </div>
  );
  return (
    <Wrap>
      <Button
        label='Custom Toast'
        onClick={() =>
          presentToast({
            // mark
            role: 'blank',
            // mark
            component,
            autoDismiss: false,
          } as any)
        }
        weight='light'
        color='gray'
      />
    </Wrap>
  );
};

export const ToastExamples = Object.assign(
  {},
  {
    Simple: ToastSimple,
    Custom: ToastCustom,
  }
);
