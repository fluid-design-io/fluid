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
    </Wrap>
  );
};

export const ToastExamples = Object.assign(
  {},
  {
    Simple: ToastSimple,
  }
);
