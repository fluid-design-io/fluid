import { Form, Input, SubmitButton } from '@fluid-design/fluid-ui';
import { Textarea } from '@fluid-design/fluid-ui';
import { Select } from '@fluid-design/fluid-ui';
import * as Yup from 'yup';

import { defaultFormClassName } from '@/components/form';
import { CodeFrameComponentWrap } from '@/components/framework/CodeFrameComponentWrap';
import clsxm from '@/lib/clsxm';
import { food } from '@/lib/data/food';

const Basic = ({ className = '' }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First Name is required'),
    email: Yup.string()
      .min(3, 'Must be at least 3 characters long')
      .email('Invalid email')
      .required('Email is required'),
    message: Yup.string(),
  });
  return (
    <CodeFrameComponentWrap className={defaultFormClassName}>
      <Form
        onSubmit={() => null}
        initialValues={{
          firstName: '',
        }}
        validationSchema={validationSchema}
      >
        <Input label='First Name' name='firstName' type='text' />
        <Input label='Email' name='email' type='email' />
        <Textarea label='Message' name='message' minRows={4} />
        <SubmitButton label='Submit' />
      </Form>
    </CodeFrameComponentWrap>
  );
};

const ObjectValues = ({ className = '' }) => {
  const validationSchema = Yup.object().shape({
    food: Yup.array()
      .min(1, 'You must select at least one food')
      .max(4, 'You can only select up to 4 foods'),
  });

  return (
    <CodeFrameComponentWrap className={clsxm(defaultFormClassName, 'pb-36')}>
      <Form
        onSubmit={() => null}
        initialValues={{
          food: [],
        }}
        validationSchema={validationSchema}
      >
        <Select
          name='food'
          itemKey='name'
          disabledKey='unavailable'
          list={food}
          label='Food'
          placeholder='Select food'
          //multiple={4} // max 4
          multiple // unlimited
        />
      </Form>
    </CodeFrameComponentWrap>
  );
};

Basic.displayName = 'Basic';
ObjectValues.displayName = 'ObjectValues';

export const ValidationExamples = Object.assign({}, { Basic, ObjectValues });
