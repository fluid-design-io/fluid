import { useTranslation } from "next-i18next";
import {
  GlobeIcon,
  UserIcon,
  CogIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function ListWithIconComponent({ setNotification, ...props }) {
  const { t } = useTranslation("list");
  const list = [
    {
      name: t("WithIcon.list.explore", { ns: "list" }),
      Icon: GlobeIcon,
    },
    {
      name: t("WithIcon.list.fav", { ns: "list" }),
      Icon: HeartIcon,
    },
    {
      name: t("WithIcon.list.user", { ns: "list" }),
      Icon: UserIcon,
    },
    {
      name: t("WithIcon.list.cart", { ns: "list" }),
      Icon: ShoppingCartIcon,
    },
    {
      name: t("WithIcon.list.settings", { ns: "list" }),
      Icon: CogIcon,
    },
  ];
  return (
    <div
      className={`w-full max-w-xs overflow-hidden rounded-lg shadow-lg md:w-2/3 bg-stone-50 dark:bg-stone-900 shadow-stone-900/10 dark:shadow-stone-900/30 component prefers-contrast:bg-white dark:prefers-contrast:bg-stone-900 prefers-contrast:contrast-ring  ${
        props.className ? props.className : ``
      }`}
    >
      <ul
        className="divide-y divide-stone-200/70 dark:divide-stone-700/70 prefers-contrast:divide-stone-600 dark:prefers-contrast:divide-stone-200"
        aria-label={t("WithIcon.ul", { ns: "list" })}
      >
        {list.map(({ name, Icon }) => (
          <li key={name}>
            <button
              className="flex items-center justify-start w-full px-4 py-2 capitalize transition outline-none select-none hover:bg-stone-200/30 focus-visible:bg-stone-200/30 dark:hover:bg-stone-600/30 dark:focus-visible:bg-stone-600/30 hover:prefers-contrast:bg-amber-300 dark:hover:prefers-contrast:bg-amber-400 text-stone-700 dark:text-stone-200 prefers-contrast:text-stone-900 dark:prefers-contrast:text-stone-50 dark:prefers-contrast:focus-visible:text-stone-900 dark:prefers-contrast:hover:text-stone-900"
              onClick={() =>
                setNotification({
                  enabled: true,
                  message: name,
                  Icon,
                })
              }
            >
              <Icon className={"w-4 h-4 mr-2"} />
              <span>{name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListWithIconComponent;
