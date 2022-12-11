import { Form, Input, SubmitButton, Textarea } from '@fluid-design/fluid-ui';
import { useState } from 'react';
import * as Yup from 'yup';

import { defaultFormClassName } from '@/components/form';
import { useToast } from '@/lib/useToast';

import { CodeFrameComponentWrap } from '../framework/CodeFrameComponentWrap';

const BasicExample = () => {
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
    <CodeFrameComponentWrap className={defaultFormClassName}>
      <Form
        validationSchema={validationSchema}
        initialValues={{
          message: '',
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
        <Textarea label='Message' name='message' maxRows={4} />
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

BasicExample.displayName = 'BasicExample';

export const TextareaExamples = Object.assign({}, { Basic: BasicExample });
