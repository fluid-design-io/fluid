import { HashtagIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import slug from '../../util/slug';

function DocSection({
  title: { raw, transformed },
  docTitle = undefined,
  description = undefined,
  component,
}) {
  const [isCoping, setIsCoping] = useState(false);
  const handleCopy = () => {
    setIsCoping(true);
    setTimeout(() => {
      setIsCoping(false);
    }, 3000);
  };
  return (
    <section className='pb-12' id={slug(raw)}>
      <h2
        className={`doc-section-header anchor group flex w-full items-center ${
          description ? 'pb-4' : ''
        }`}
      >
        <CopyToClipboard
          onCopy={handleCopy}
          text={`https://fluid-design.io/docs/${docTitle.toLowerCase()}/#${slug(
            raw
          )}`}
        >
          <a
            aria-live='assertive'
            className='anchor anchor-link hash-link hash absolute right-0 ml-0 mr-4 flex items-center border-0 opacity-0 focus:opacity-100 group-hover:opacity-100 md:!right-auto md:!mr-auto md:!-ml-10 lg:-ml-7 xl:-ml-10'
            href={`#${slug(raw)}`}
            title={`Direct link to heading ${transformed}`}
            aria-label={
              isCoping
                ? 'Section hashtag copied'
                : `${transformed}. Click to copy section hashtag`
            }
          >
            <HashtagIcon className='flex h-6 w-6 items-center justify-center rounded-md p-1 text-gray-400 shadow-sm ring-1 ring-gray-900/5 hover:text-gray-700 hover:shadow hover:ring-gray-900/10 dark:bg-gray-700 dark:text-gray-300 dark:shadow-none dark:ring-0' />
          </a>
        </CopyToClipboard>
        {transformed}
      </h2>
      {description && typeof description === 'string' ? (
        <p>{description}</p>
      ) : (
        description
      )}
      <div className='flex flex-col space-y-2 sm:space-y-4 md:!space-y-8'>
        {component}
      </div>
    </section>
  );
}

export default DocSection;
