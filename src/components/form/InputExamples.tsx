import { Form, Input, SubmitButton } from '@fluid-design/fluid-ui';
import { useState } from 'react';
import * as Yup from 'yup';

import { useToast } from '@/lib/useToast';

import { CodeFrameComponentWrap } from '../framework/CodeFrameComponentWrap';

const InputExample = () => {
  const [present] = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
  });
  return (
    <CodeFrameComponentWrap className='min-w-[calc(min(20rem,100%-2rem))] items-stretch'>
      <Form
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          present({
            title: 'Form submitted',
            message: `${values.name}`,
          });
          setTimeout(() => {
            setSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => {
              setIsSubmitted(false);
            }, 2000);
          }, 2000);
        }}
      >
        <Input label='Name' name='name' type='text' />
        <Input label='Email' name='email' type='email' />
        <Input label='Password' name='password' type='password' />
        <SubmitButton
          className='w-full'
          isLoaded={isSubmitted}
          weight='outline'
          loadedOptions={{
            className: 'text-green-500',
          }}
        >
          Submit
        </SubmitButton>
      </Form>
    </CodeFrameComponentWrap>
  );
};

const BasicExample = () => {
  return (
    <CodeFrameComponentWrap className='min-w-[calc(min(20rem,100%-2rem))] items-stretch'>
      <Form
        initialValues={{
          name: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Input name='name' placeholder='Enter your name' type='text' />
      </Form>
    </CodeFrameComponentWrap>
  );
};

InputExample.displayName = 'InputExample';
BasicExample.displayName = 'BasicExample';

export const InputExamples = Object.assign(
  {},
  { Basic: BasicExample, Demo: InputExample }
);
