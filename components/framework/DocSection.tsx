import { HashtagIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useTranslation } from "next-i18next";
import slug from "../../util/slug";

function DocSection({
  title: { raw, transformed },
  docTitle = undefined,
  description = undefined,
  component,
}) {
  const [isCoping, setIsCoping] = useState(false);
  const { t } = useTranslation("common");
  const handleCopy = () => {
    setIsCoping(true);
    setTimeout(() => {
      setIsCoping(false);
    }, 3000);
  };
  return (
    <section id={slug(raw)} className="pb-12">
      <h2
        className={`w-full group flex items-center doc-section-header anchor ${
          description ? "pb-4" : ""
        }`}
      >
        <CopyToClipboard
          text={`https://fluid-design.io/docs/${docTitle.toLowerCase()}/#${slug(raw)}`}
          onCopy={handleCopy}
        >
          <a
            href={`#${slug(raw)}`}
            className="absolute right-0 flex items-center ml-0 mr-4 border-0 opacity-0 anchor anchor-link hash-link md:!right-auto md:!mr-auto md:!-ml-10 lg:-ml-7 xl:-ml-10 hash group-hover:opacity-100 focus:opacity-100"
            title={`Direct link to heading ${transformed}`}
            aria-live="assertive"
            aria-label={
              isCoping
                ? t(`Section hashtag copied`)
                : `${transformed}. ${t(`Click to copy section hashtag`)}`
            }
          >
            <HashtagIcon className="flex items-center justify-center w-6 h-6 p-1 text-primary-400 rounded-md shadow-sm ring-1 ring-primary-900/5 hover:ring-primary-900/10 hover:shadow hover:text-primary-700 dark:bg-primary-700 dark:text-primary-300 dark:shadow-none dark:ring-0" />
          </a>
        </CopyToClipboard>
        {transformed}
      </h2>
      {description && typeof description === "string" ? (
        <p>{description}</p>
      ) : (
        description
      )}
      <div className="flex flex-col space-y-2 sm:space-y-4 md:!space-y-8">
        {component}
      </div>
    </section>
  );
}

export default DocSection;
