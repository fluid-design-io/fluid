import CodeBlock from "../framework/CodeBlock";

import { useTranslation } from "next-i18next";
import ListTextOnlyComponent from "./components/ListTextOnlyComponent";
//@ts-ignore
import textOnly from "raw-loader!../../lib/code/ListSimpleTextOnly.code.txt";

function ListSimple() {
  const { t } = useTranslation("common");
  const raw = {
    textOnly,
  };
  return (
    <>
      <CodeBlock title={t("TextOnly.title", { ns: "list" })} raw={raw.textOnly}>
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <ListTextOnlyComponent />
        </div>
      </CodeBlock>
    </>
  );
}

export default ListSimple;
