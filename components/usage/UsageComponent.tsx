import { useTranslation, Trans } from "next-i18next";
import Code from "../../util/Code";

function UsageComponent() {
  const { t } = useTranslation("usage");
  return (
    <div>
      <div className="prose dark:prose-invert">
        <p>{t("requirements.p1", { ns: "usage" })}</p>
        <Code
          content={`
/* Tailwindcss */
npm install -D tailwindcss
npx tailwindcss init
/* Framer Motion */
npm install framer-motion`.trim()}
          className={`bg-primary-800 dark:bg-primary-900 rounded-lg py-4`}
        />
        <p>
          <Trans
            i18nKey={"requirements.p2"}
            ns={"usage"}
            components={{
              tailwind: (
                <a
                  href="https://tailwindcss.com/docs/installation"
                  rel="noreferrer"
                  target={"_blank"}
                />
              ),
              framer: (
                <a
                  href="https://www.framer.com/docs/introduction/"
                  rel="noreferrer"
                  target={"_blank"}
                />
              ),
            }}
          />
        </p>
        <p>{t("requirements.p3", { ns: "usage" })}</p>
      </div>
    </div>
  );
}

export default UsageComponent;
