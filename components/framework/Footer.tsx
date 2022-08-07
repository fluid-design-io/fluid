import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("navbar");
  const navigation = [
    { name: t("Privacy", { ns: "navbar" }), href: "privacy" },
    { name: t("Contact", { ns: "navbar" }), href: "contact" },
  ];
  return (
    <footer className="mt-8 relative z-[10]">
      <div className="px-4 py-12 mx-auto text-xs max-w-7xl sm:px-6 md:!flex md:!items-center md:!justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:!order-2">
          {navigation.map(({ name, href }) => (
            <Link href={`/${href}`} key={name}>
              <a className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{name}</span>
                {name}
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-8 md:!mt-0 md:!order-1">
          <p className="text-xs text-center text-gray-400">
            &copy; 2022 ImageVision LLC. {" "}
            {t("All rights reserved", { ns: "navbar" })}
          </p>
        </div>
      </div>
    </footer>
  );
}
