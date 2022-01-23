import CodeBlock from "../framework/CodeBlock";

import { useTranslation } from "next-i18next";
import ListTextOnlyComponent from "./components/ListTextOnlyComponent";
//@ts-ignore
import textOnly from "raw-loader!../../lib/code/ListSimpleTextOnly.code.txt";
//@ts-ignore
import withIcon from "raw-loader!../../lib/code/ListWithIcon.code.txt";
import { ListWithIconComponent } from ".";
import { useState } from "react";

function ListSimple() {
  const [notification, setNotification] = useState(undefined);
  const { t } = useTranslation("common");
  const raw = {
    textOnly,
    withIcon,
  };
  return (
    <>
      <CodeBlock title={t("TextOnly.title", { ns: "list" })} raw={raw.textOnly}>
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <ListTextOnlyComponent />
        </div>
      </CodeBlock>
      <CodeBlock
        title={t("WithIcon.title", { ns: "list" })}
        raw={raw.withIcon}
        onDismiss={() => setNotification(undefined)}
        notification={notification}
      >
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <ListWithIconComponent setNotification={setNotification} />
        </div>
      </CodeBlock>
    </>
  );
}

export default ListSimple;
