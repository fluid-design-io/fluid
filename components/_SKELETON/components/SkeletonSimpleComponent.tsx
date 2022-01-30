import { useTranslation } from "next-i18next";
function SkeletonSimpleComponent() {
  const { t } = useTranslation("list");
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg shadow-lg md:w-2/3 bg-stone-50 dark:bg-stone-900 shadow-stone-900/10 dark:shadow-stone-900/30 component prefers-contrast:bg-white dark:prefers-contrast:bg-stone-900 prefers-contrast:contrast-ring">
      
    </div>
  );
}

export default SkeletonSimpleComponent;
