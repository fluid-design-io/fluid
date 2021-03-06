import { useState } from "react";
import { useTranslation } from "next-i18next";
function ListTextOnlyComponent() {
  const { t } = useTranslation("list");
  const list = [
    t("country.Alabama", { ns: "list" }),
    t("country.Alaska", { ns: "list" }),
    t("country.Arizona", { ns: "list" }),
    t("country.Arkansas", { ns: "list" }),
    t("country.California", { ns: "list" }),
    t("country.Colorado", { ns: "list" }),
    t("country.Connecticut", { ns: "list" }),
    t("country.Delaware", { ns: "list" }),
    t("country.Florida", { ns: "list" }),
    t("country.Georgia", { ns: "list" }),
    t("country.Hawaii", { ns: "list" }),
    t("country.Idaho", { ns: "list" }),
    t("country.IllinoisIndiana", { ns: "list" }),
    t("country.Iowa", { ns: "list" }),
    t("country.Kansas", { ns: "list" }),
    t("country.Kentucky", { ns: "list" }),
    t("country.Louisiana", { ns: "list" }),
    t("country.Maine", { ns: "list" }),
    t("country.Maryland", { ns: "list" }),
    t("country.Massachusetts", { ns: "list" }),
    t("country.Michigan", { ns: "list" }),
    t("country.Minnesota", { ns: "list" }),
    t("country.Mississippi", { ns: "list" }),
    t("country.Missouri", { ns: "list" }),
    t("country.MontanaNebraska", { ns: "list" }),
    t("country.Nevada", { ns: "list" }),
    t("country.New Hampshire", { ns: "list" }),
    t("country.New Jersey", { ns: "list" }),
    t("country.New Mexico", { ns: "list" }),
    t("country.New York", { ns: "list" }),
    t("country.North Carolina", { ns: "list" }),
    t("country.North Dakota", { ns: "list" }),
    t("country.Ohio", { ns: "list" }),
    t("country.Oklahoma", { ns: "list" }),
    t("country.Oregon", { ns: "list" }),
    t("country.PennsylvaniaRhode Island", { ns: "list" }),
    t("country.South Carolina", { ns: "list" }),
    t("country.South Dakota", { ns: "list" }),
    t("country.Tennessee", { ns: "list" }),
    t("country.Texas", { ns: "list" }),
    t("country.Utah", { ns: "list" }),
    t("country.Vermont", { ns: "list" }),
    t("country.Virginia", { ns: "list" }),
    t("country.Washington", { ns: "list" }),
    t("country.West Virginia", { ns: "list" }),
    t("country.Wisconsin", { ns: "list" }),
    t("country.Wyoming", { ns: "list" }),
  ];
  const [names, setNames] = useState(list.slice(0, 6));
  const hasMore = names.length < list.length - 6;
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg shadow-lg md:w-2/3 bg-stone-50 dark:bg-stone-900 shadow-stone-900/10 dark:shadow-stone-900/30 component prefers-contrast:bg-white dark:prefers-contrast:bg-stone-900 prefers-contrast:contrast-ring">
      <ul
        className="divide-y divide-stone-200/70 dark:divide-stone-700/70 prefers-contrast:divide-stone-600 dark:prefers-contrast:divide-stone-200"
        aria-label={t("TextOnly.ul", { ns: "list" })}
      >
        {names.map((name) => (
          <li
            key={name}
            className="px-4 py-2 transition outline-none hover:bg-stone-200/30 focus-visible:bgstone-200/30 dark:hover:bg-stone-600/30 dark:focus-visible:bg-stone-600/30 hover:prefers-contrast:bg-amber-300 dark:hover:prefers-contrast:bg-amber-400 text-stone-700 dark:text-stone-200 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-50 dark:prefers-contrast:focus-visible:text-stone-900 dark:prefers-contrast:hover:text-stone-900"
            tabIndex={0}
          >
            {name}
          </li>
        ))}
        {hasMore && (
          <button
            className="w-full py-2 text-sm font-medium text-center text-blue-600 dark:text-blue-400 prefers-contrast:text-base prefers-contrast:font-semibold"
            onClick={() =>
              hasMore
                ? setNames([
                    ...names,
                    ...list.slice(names.length, names.length + 6),
                  ])
                : null
            }
          >
            {t("TextOnly.loadmore", { ns: "list" })}
          </button>
        )}
      </ul>
    </div>
  );
}

export default ListTextOnlyComponent;
