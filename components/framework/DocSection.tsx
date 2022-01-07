import { HashtagIcon } from "@heroicons/react/outline";

function DocSection({
  sectionId,
  sectionTitle,
  sectionDescription = undefined,
  component,
}) {
  return (
    <section id={sectionId} className="pb-12">
      <h3 className={`w-full group ${sectionDescription ? "pb-4" : ""}`}>
        <a
          href={`#image`}
          className="absolute flex items-center -ml-10 border-0 opacity-0 hash group-hover:opacity-100 focus:opacity-100"
          aria-label="Anchor"
        >
          <HashtagIcon className="flex items-center justify-center w-6 h-6 p-1 text-gray-400 rounded-md shadow-sm ring-1 ring-gray-900/5 hover:ring-gray-900/10 hover:shadow hover:text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:shadow-none dark:ring-0" />
        </a>
        <span>{sectionTitle}</span>
      </h3>
      {sectionDescription && typeof sectionDescription === "string" ? (
        <p>{sectionDescription}</p>
      ) : (
        sectionDescription
      )}
      <div className="flex flex-col space-y-2 sm:space-y-4 md:space-y-8">
        {component}
      </div>
    </section>
  );
}

export default DocSection;
