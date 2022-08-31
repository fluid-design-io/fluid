import { CodeFrameComponentWrap } from '../framework/CodeFrameComponentWrap';
import { useToast } from '@/lib/useToast';
import { Form, Input, SubmitButton } from '@fluid-design/fluid-ui';
import { useState } from 'react';
import * as Yup from 'yup';

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
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
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
        <Input name='name' label='Name' type='text' />
        <Input name='email' label='Email' type='email' />
        <Input name='password' label='Password' type='password' />
        <SubmitButton
          weight='outline'
          className='w-full'
          isLoaded={isSubmitted}
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

InputExample.displayName = 'InputExample';

export const FormExamples = Object.assign({}, { Input: InputExample });
