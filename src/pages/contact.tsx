import { AppForm, AppInput, SubmitButton } from '../components/form';
import AppTextarea from '../components/form/AppTextarea';
import { Page } from '../components/framework';
import { SiteMeta } from '../interfaces/framwork';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as Yup from 'yup';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'index', 'navbar'])),
      // Will be passed to the page component as props
    },
  };
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  name: Yup.string().required().label('Name'),
  message: Yup.string().required().label('Message'),
});

export default function ContactPage() {
  const { t } = useTranslation();
  const meta: SiteMeta = {
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
    <Page meta={meta} sidebar={false} className='min-h-screen'>
      <div />
      <h1 className={`pt-16 px-4 text-center`}>
        {t(`Get in touch`, { ns: 'common' })}
      </h1>
      <section className={`pt-4`}>
        <div className='relative flex justify-center'>
          <div className={`w-full max-w-xs`}>
            <AppForm
              initialValues={{
                email: '',
                name: '',
                message: '',
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <AppInput autoFocus name='email' type='text' />
              <AppInput name='name' type='text' />
              <AppTextarea name='message' type='text' className='resize-none' />
              <SubmitButton title='Submit' slot='end' />
            </AppForm>
          </div>
        </div>
      </section>
    </Page>
  );
}
