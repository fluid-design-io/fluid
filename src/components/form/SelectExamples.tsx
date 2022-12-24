import { Form, Select, SubmitButton } from '@fluid-design/fluid-ui';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import * as Yup from 'yup';

import { defaultFormClassName } from '@/components/form';
import { CodeFrameComponentWrap } from '@/components/framework/CodeFrameComponentWrap';
import clsxm from '@/lib/clsxm';
import { food } from '@/lib/data/food';
import { reservationTime } from '@/lib/data/reservation-time';
import { states } from '@/lib/data/states';
import { useToast } from '@/lib/useToast';

const Demo = ({ className = '' }) => {
  const [present] = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const validationSchema = Yup.object().shape({
    state: Yup.object().required('State is required'),
    reservationTime: Yup.string().required('Reservation time is required'),
    food: Yup.array().min(1, 'You must select at least one food'),
  });
  return (
    <CodeFrameComponentWrap className={clsxm(defaultFormClassName, className)}>
      <Form
        onSubmit={(values, { setSubmitting }) => {
          present('Order submitted!');
          setTimeout(() => {
            setSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => {
              setIsSubmitted(false);
            }, 2000);
          }, 2000);
        }}
        initialValues={{
          state: states[5],
          reservationTime: '',
          food: [],
        }}
        validationSchema={validationSchema}
      >
        <Select itemKey='name' list={states} name='state' />
        <Select
          name='reservationTime'
          label='Reservation Time'
          placeholder='Select a time'
          list={reservationTime}
          hasEmptyOption
          emptyOptionText='Unspecified'
        />
        <Select
          name='food'
          itemKey='name'
          disabledKey='unavailable'
          list={food as any}
          label="What's on the menu? (max 4 items)"
          placeholder='Select your favorites'
          multiple={4}
        />
        <SubmitButton
          className='w-full btn-light-primary dark:btn-bold-primary mt-32'
          label='Order'
          isLoaded={isSubmitted}
          iconStart={ShoppingCartIcon}
          loadedOptions={{
            text: 'Order submitted!',
          }}
        />
      </Form>
    </CodeFrameComponentWrap>
  );
};

const CustomSelect = ({ className = '' }) => {
  return (
    <CodeFrameComponentWrap
      className={clsxm(defaultFormClassName, 'pb-36', className)}
    >
      <Form
        onSubmit={() => null}
        initialValues={{
          food: food.slice(0, 2),
        }}
      >
        <Select
          name='food'
          list={food as any}
          itemKey='name'
          label="What's on the menu?"
          placeholder='Select as many as you like'
          multiple
          /* @ts-ignore */
          selectedItemsClassName='flex flex-wrap p-2 gap-2'
          rednerOptionItem={({ item, Option }) => (
            <Option
              value={item}
              className={({ active, selected, disabled }) =>
                clsxm(
                  'flex flex-row justify-start items-center gap-2 px-2 py-1',
                  'bg-lime-50 dark:bg-lime-900',
                  active && 'bg-lime-100 dark:bg-lime-800',
                  selected &&
                    'bg-lime-600 text-lime-50 dark:bg-lime-400 dark:text-lime-900',
                  disabled && 'bg-lime-200 dark:bg-lime-700'
                )
              }
              disabled={item.unavailable}
            >
              {({ active, selected, disabled }) => (
                <>
                  <div className='w-4 h-4 flex items-center'>
                    {selected && '✓'}
                    {disabled && '🚫'}
                  </div>
                  <div className='flex-grow'>
                    {item.name}
                    {' • '}
                    {item.calories} calories
                  </div>
                </>
              )}
            </Option>
          )}
          renderSelectedItem={({ item, remove }) => (
            <button
              onClick={remove}
              className='flex flex-row justify-start items-center gap-2 px-2 py-1 bg-lime-200 dark:bg-lime-900 rounded-full'
            >
              <div className='flex-grow text-sm'>{item.name}</div>
            </button>
          )}
        />
      </Form>
    </CodeFrameComponentWrap>
  );
};

const Basic = ({ className = '' }) => {
  const cars = [
    'Audi',
    'BMW',
    'Chevrolet',
    'Dodge',
    'Ford',
    'Honda',
    'Toyota',
    'Tesla',
    'Volkswagen',
  ];
  return (
    <CodeFrameComponentWrap
      className={clsxm(defaultFormClassName, 'pb-36', className)}
    >
      <Form
        onSubmit={() => null}
        initialValues={{
          car: '',
        }}
      >
        <Select name='car' list={cars} label='Select a car' />
      </Form>
    </CodeFrameComponentWrap>
  );
};

Demo.displayName = 'Demo';
Basic.displayName = 'Basic';
CustomSelect.displayName = 'CustomSelect';

export const SelectExamples = Object.assign({}, { Demo, CustomSelect, Basic });
