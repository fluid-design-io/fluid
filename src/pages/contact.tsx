import { Form, Input, SubmitButton } from '@fluid-design/fluid-ui';
import * as Yup from 'yup';

import { Page } from '../components/framework';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  name: Yup.string().required().label('Name'),
  message: Yup.string().label('Message'),
});

export default function ContactPage() {
  const meta = {
    title: 'Fluid Design',
    description:
      'Beautiful React components that are responsive, supports features like dark mode and a11y with elegant transitions.',
  };
  const handleSubmit = async (values) => {
    const { email, name, message } = values;
    const res = await fetch('/api/send-contact', {
      body: JSON.stringify({
        email,
        name,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      // setShowSuccessMessage(false);
      // setShowFailureMessage(true);
      // setButtonText("Send");
      return;
    }
    //   setShowSuccessMessage(true);
    //   setShowFailureMessage(false);
    //   setButtonText("Send");
  };
  return (
    <Page className='min-h-screen' meta={meta} sidebar={false}>
      <div />
      <h1 className='px-4 pt-16 text-center'>Get in touch</h1>
      <section className='pt-4'>
        <div className='relative flex justify-center'>
          <div className='w-full max-w-xs'>
            <Form
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
              initialValues={{
                email: '',
                name: '',
                message: '',
              }}
            >
              <Input autoFocus name='email' type='text' />
              <Input name='name' type='text' />
              {/* <AppTextarea name='message' type='text' className='resize-none' /> */}
              <SubmitButton label='Submit' />
            </Form>
          </div>
        </div>
      </section>
    </Page>
  );
}
