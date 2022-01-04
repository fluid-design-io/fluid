import Image from "next/image";
import icon from "../../public/assets/under-construction.svg";
function UnderConstruction({
  message = "This page is currently under construction...",
}) {
  return (
    <div className="items-center justify-center min-h-[calc(100vh-61px)] relative flex z-0">
      <div>
        <div className="w-32 h-32 mx-auto overflow-hidden lg:w-64 lg:h-64">
          <Image priority src={icon} layout="responsive" objectFit="contain" alt="construction" />
        </div>
        <p className="pt-4">{message}</p>
      </div>
    </div>
  );
}

export default UnderConstruction;
