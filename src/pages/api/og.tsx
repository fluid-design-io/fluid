/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

const fontRegular = fetch(
  new URL('../../../assets/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());
const fontSemiBold = fetch(
  new URL('../../../assets/Inter-SemiBold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const handle = async (req: NextRequest) => {
  const InterRegular = await fontRegular;
  const InterSemiBold = await fontSemiBold;
  const { searchParams, host, protocol } = new URL(req.url);
  const title = searchParams.get('title') || 'No post title';
  const author = searchParams.get('author') || 'Anonymous';
  const date = new Date(searchParams.get('date') || '2022-08-22');
  const category = searchParams.get('category') || 'doc';
  const tagsString = searchParams.get('tags') || '';
  const tags = tagsString.split(',');
  const cover = `${protocol}//${host}/_next/image?url=${encodeURIComponent(
    searchParams.get('cover') || category === 'doc'
      ? '/og/og-base.jpg'
      : '/og/og-cover.png'
  )}&w=1200&q=75`;
  const logo = `${protocol}//${host}/_next/image?url=${encodeURIComponent(
    '/og/og-logo.png'
  )}&w=128&q=75`;

  if (category === 'doc') {
    return new ImageResponse(
      (
        <div tw='flex w-full h-full flex-col justify-end bg-slate-200 items-stretch'>
          <img
            src={cover}
            alt=''
            tw='flex-1 w-full h-full absolute inset-0'
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div tw='flex-1 flex w-full absolute top-12 justify-center'>
            <div tw='flex flex-col justify-center'>
              <img
                src={logo}
                alt=''
                tw='w-32 h-32'
                style={{ objectFit: 'contain' }}
              />
              <div tw='text-xl w-full justify-center font-semibold tracking-wide text-white text-center flex'>
                Fluid Design
              </div>
            </div>
          </div>
          <div tw='flex flex-col text-white p-8 border-t-8'>
            <div tw='text-5xl mb-6 font-semibold'>{title}</div>
            <div tw='flex flex-wrap mb-3'>
              {tags.length > 0 &&
                tags[0] !== '' &&
                tags.map((tag) => (
                  <div
                    key={tag}
                    tw='text-xl flex font-semibold bg-black/30 text-slate-100 px-4 py-1.5 rounded-full mr-4 mb-2 capitalize'
                  >
                    {tag}
                  </div>
                ))}
            </div>
            <div tw='text-lg'>
              {author +
                ' – ' +
                date.toLocaleDateString('en-US', { dateStyle: 'long' })}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 628,
        fonts: [
          {
            name: 'Inter',
            data: InterRegular,
            weight: 400,
          },
          {
            name: 'Inter',
            data: InterSemiBold,
            weight: 600,
          },
        ],
      }
    );
  } else {
    return new ImageResponse(
      (
        <div tw='flex w-full h-full flex-col justify-end bg-slate-200 items-stretch'>
          <img
            src={cover}
            alt=''
            tw='flex-1 w-full h-full'
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      )
    );
  }
};

export default handle;
