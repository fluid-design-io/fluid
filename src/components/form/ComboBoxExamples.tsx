import { ComboBox, Form } from '@fluid-design/fluid-ui';

import { defaultFormClassName } from '@/components/form';
import { CodeFrameComponentWrap } from '@/components/framework/CodeFrameComponentWrap';
import clsxm from '@/lib/clsxm';
import { food } from '@/lib/data/food';
import { reservationTime } from '@/lib/data/reservation-time';
import { states } from '@/lib/data/states';

const Demo = ({ className = '' }) => {
  return (
    <CodeFrameComponentWrap
      className={clsxm(
        'w-full max-w-md flex flex-col justify-start items-stretch bg-white',
        className
      )}
    >
      <Form
        onSubmit={() => null}
        initialValues={{
          state: states[5],
          reservationTime: '',
          food: food.slice(0, 2),
        }}
      >
        <ComboBox itemKey='name' list={states} name='state' />
        <ComboBox
          name='reservationTime'
          label='Reservation Time'
          placeholder='Select a time'
          list={reservationTime}
          hasEmptyOption
          emptyOptionText='Unspecified'
        />
        <ComboBox
          name='food'
          itemKey='name'
          disabledKey='unavailable'
          list={food}
          label="What's on the menu?"
          placeholder='Type to search for food'
          multiple
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
        <ComboBox name='car' list={cars} label='Select a car' />
      </Form>
    </CodeFrameComponentWrap>
  );
};

Basic.displayName = 'Basic';
Demo.displayName = 'Demo';

export const ComboBoxExamples = Object.assign({}, { Basic, Demo });
