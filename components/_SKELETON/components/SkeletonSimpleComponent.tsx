import { useTranslation } from "next-i18next";
function SkeletonSimpleComponent() {
  const { t } = useTranslation("list");
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg shadow-lg md:!w-2/3 bg-primary-50 dark:bg-primary-900 shadow-primary-900/10 dark:shadow-primary-900/30 component contrast-more:bg-white dark:contrast-more:bg-primary-900 contrast-more:contrast-ring">
      
    </div>
  );
}

export default SkeletonSimpleComponent;
