import Doc from '@/components/framework/Doc';
import { Collage, ImageGrid, SingleImage } from '@/components/image';
import ImageBackground from '@/components/image/ImageBackground';
import { SiteMeta } from '@/interfaces/framwork';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'navbar', 'image'])),
      // Will be passed to the page component as props
    },
  };
}
function CardPage() {
  const { t } = useTranslation();
  const meta: SiteMeta = {
    title: 'Fluid Design Docs | ' + t('Image', { ns: 'navbar' }),
    description: t('image-site-desc', { ns: 'image' }),
  };
  const sections = [
    {
      title: {
        raw: 'Single Image',
        transformed: t('Single Image', { ns: 'image' }),
      },
      description: '',
      component: <SingleImage />,
    },
    {
      title: {
        raw: 'Background',
        transformed: t('Background', { ns: 'image' }),
      },
      description: '',
      component: <ImageBackground />,
    },
    {
      title: { raw: 'Collage', transformed: t('Collage', { ns: 'image' }) },
      description: (
        <Trans
          i18nKey={'collage-desc'}
          components={{
            p: <p />,
            span: (
              <span
                className='code-highlight'
                aria-label='code snippet, aspect-square,'
              />
            ),
          }}
          ns={'image'}
        />
      ),
      component: <Collage />,
    },
    {
      title: { raw: 'Grid', transformed: t('Grid', { ns: 'image' }) },
      description: '',
      component: <ImageGrid />,
    },
  ];
  return (
    <Doc
      meta={meta}
      title={t(`Image`, { ns: 'navbar' })}
      description={t('image-site-desc', { ns: 'image' })}
      sections={sections}
    />
  );
}

export default CardPage;
