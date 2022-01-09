import Head from "next/head";
import { SplitImageBackground } from "../../components/image/ImageBackground";
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
      <div className="flex items-center justify-center w-full h-screen overflow-hidden">
        <SplitImageBackground />
      </div>
    </>
  );
}
export default ResponsiveCard;
