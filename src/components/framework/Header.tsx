import Head from 'next/head';

export const Header = (meta: SiteMeta) => (
  <Head>
    <meta
      content='width=device-width, initial-scale=1, viewport-fit=cover'
      name='viewport'
    />
    <meta charSet='utf-8' />
    <title>{meta?.title ?? 'Fluid Design'}</title>

    <meta content={meta?.title ?? 'Fluid Design'} property='og:title' />
    <meta content={meta?.url ?? 'https://fluid-design.io'} property='og:url' />
    <meta content={meta?.title ?? 'Fluid Design'} property='og:title' />
    <meta
      property='og:description'
      content={
        meta?.description ?? 'A collection of beautifully designed components'
      }
    />
    <meta content={meta?.imageUrl ?? '/assets/share.jpg'} property='og:image' />

    <meta content='summary_large_image' name='twitter:card' />
    <meta
      content={meta?.url ?? 'https://fluid-design.io'}
      property='twitter:url'
    />
    <meta
      content={`${meta?.title ?? 'Fluid Design'}`}
      property='twitter:title'
    />
    <meta content={`${meta?.title ?? 'Fluid Design'}`} name='twitter:title' />
    <meta
      property='twitter:description'
      content={
        meta?.description ?? 'A collection of beautifully designed components'
      }
    />
    <meta
      name='twitter:description'
      content={
        meta?.description ?? 'A collection of beautifully designed components'
      }
    />
    <meta
      content={meta?.imageUrl ?? '/assets/share.jpg'}
      property='twitter:image'
    />
  </Head>
);
