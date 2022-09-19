import { Form, Switch } from '@fluid-design/fluid-ui';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { CodeFrameComponentWrap } from '@/components/framework/CodeFrameComponentWrap';
import clsxm from '@/lib/clsxm';
import { useToast } from '@/lib/useToast';

const SwitchDemo = () => {
  const [present] = useToast();
  const [isNotificationDisabled, setIsNotificationDisabled] = useState(false);
  return (
    <CodeFrameComponentWrap className='w-full max-w-md flex flex-col items-stretch'>
      <Form
        onSubmit={() => null}
        initialValues={{
          notifications: true,
          notificationOptions: {
            email: true,
            sms: true,
            push: false,
          },
        }}
      >
        <Switch
          name='notifications'
          className={clsxm('transition-all duration-700 mb-0')}
          onChange={(value) => {
            setIsNotificationDisabled(!value);
            present({
              title: 'Notifications',
              message: value ? 'Enabled' : 'Disabled',
            });
          }}
        />
        <div className='overflow-hidden p-1 -m-1'>
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            animate={{
              height: isNotificationDisabled ? 0 : 'auto',
              opacity: isNotificationDisabled ? 0 : 1,
            }}
            transition={{
              type: 'spring',
              bounce: 0.1,
            }}
          >
            <Switch
              name='notificationOptions.email'
              className='pt-4'
              activeClassName='bg-amber-400 dark:bg-amber-600'
              disabled={isNotificationDisabled}
              onChange={(value) =>
                present({
                  title: 'Email Notifications',
                  message: value ? 'Enabled' : 'Disabled',
                })
              }
            />
            <Switch
              name='notificationOptions.sms'
              label='SMS'
              activeClassName='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 [background-size:150%] [background-position:-0.5rem]'
              inactiveClassName='bg-gradient-to-r from-gray-800 to-gray-300 dark:from-gray-100 dark:to-gray-600 [background-size:150%] [background-position:-0.5rem]'
              toggleClassName='bg-transparent'
              toggleInactiveClassName='!ring !ring-white !ring-inset'
              toggleActiveClassName='!ring-[10px] !ring-white !ring-inset'
              disabled={isNotificationDisabled}
              onChange={(value) =>
                present({
                  title: 'SMS Notifications',
                  message: value ? 'Enabled' : 'Disabled',
                })
              }
            />
            <Switch
              name='notificationOptions.push'
              activeClassName='bg-blue-400 dark:bg-sky-600'
              disabled={true}
              description='This feature is coming soon.'
            />
          </motion.div>
        </div>
      </Form>
    </CodeFrameComponentWrap>
  );
};

const CustomBG = () => {
  const [present] = useToast();
  return (
    <CodeFrameComponentWrap className='w-full max-w-md flex flex-col items-stretch'>
      <Form
        onSubmit={() => null}
        initialValues={{
          email: true,
        }}
      >
        <Switch
          name='email'
          label='Email Notifications'
          activeClassName='bg-amber-400 dark:bg-amber-600'
          description='Receive notifications via email'
          onChange={(value) =>
            present({
              title: 'Email Notifications',
              message: value ? 'Enabled' : 'Disabled',
            })
          }
        />
      </Form>
    </CodeFrameComponentWrap>
  );
};

const Advanced = () => {
  const [present] = useToast();

  return (
    <CodeFrameComponentWrap className='w-full max-w-md flex flex-col items-stretch'>
      <Form
        onSubmit={() => null}
        initialValues={{
          sms: true,
        }}
      >
        <Switch
          name='sms'
          label='SMS'
          activeClassName='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 [background-size:150%] [background-position:-0.5rem]'
          inactiveClassName='bg-gradient-to-r from-gray-800 to-gray-300 dark:from-gray-100 dark:to-gray-600 [background-size:150%] [background-position:-0.5rem]'
          toggleClassName='bg-transparent'
          toggleInactiveClassName='!ring !ring-white !ring-inset'
          toggleActiveClassName='!ring-[10px] !ring-white !ring-inset'
          description='fees are charged by your carrier'
          onChange={(value) =>
            present({
              title: 'SMS Notifications',
              message: value ? 'Enabled' : 'Disabled',
            })
          }
        />
      </Form>
    </CodeFrameComponentWrap>
  );
};

SwitchDemo.displayName = 'SwitchDemo';
CustomBG.displayName = 'CustomBG';
Advanced.displayName = 'Advanced';

export const SwitchExamples = Object.assign(
  {},
  { Demo: SwitchDemo, CustomBG, Advanced }
);
