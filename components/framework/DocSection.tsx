import { HashtagIcon } from "@heroicons/react/outline";
import slug from "../../util/slug";

function DocSection({ title, description = undefined, component }) {
  return (
    <section id={slug(title)} className="pb-12">
      <h3
        className={`w-full group flex items-center ${
          description ? "pb-4" : ""
        }`}
      >
        <a
          href={`#image`}
          className="absolute right-0 flex items-center ml-0 mr-4 border-0 opacity-0 md:right-auto md:mr-auto md:-ml-10 lg:-ml-7 xl:-ml-10 hash group-hover:opacity-100 focus:opacity-100"
          aria-label={`${title}`}
        >
          <HashtagIcon className="flex items-center justify-center w-6 h-6 p-1 text-gray-400 rounded-md shadow-sm ring-1 ring-gray-900/5 hover:ring-gray-900/10 hover:shadow hover:text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:shadow-none dark:ring-0" />
        </a>
        <span>{title}</span>
      </h3>
      {description && typeof description === "string" ? (
        <p>{description}</p>
      ) : (
        description
      )}
      <div className="flex flex-col space-y-2 sm:space-y-4 md:space-y-8">
        {component}
      </div>
    </section>
  );
}

export default DocSection;
