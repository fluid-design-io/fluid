import Image from "next/image";
import icon from "../../public/assets/under-construction.svg";
import { useTranslation } from "next-i18next";

function UnderConstruction({
  message = "under-construction",
}) {
  const { t } = useTranslation("common");
  return (
    <div className="items-center justify-center min-h-[calc(100vh-61px)] relative flex z-0">
      <div>
        <div className="w-32 h-32 mx-auto overflow-hidden lg:w-64 lg:h-64">
          <Image
            priority
            src={icon}
            layout="responsive"
            objectFit="contain"
            alt="construction"
          />
        </div>
        <p className="pt-4 text-center">{t(message)}</p>
      </div>
    </div>
  );
}

export default UnderConstruction;
