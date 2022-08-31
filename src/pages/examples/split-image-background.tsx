import Head from 'next/head';

import ImageBGResponsiveComponent from '@/components/image/components/ImageBGResponsiveComponent';

function ResponsiveCard() {
  return (
    <>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
         html, body {
           background: none !important;
         }
         `,
          }}
        />
      </Head>
      <div className='flex items-center justify-center w-full h-screen overflow-hidden'>
        <ImageBGResponsiveComponent />
      </div>
    </>
  );
}
export default ResponsiveCard;
