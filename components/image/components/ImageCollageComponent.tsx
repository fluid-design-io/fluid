import Image from "next/image";

const ImageCollageComponent = ({
  setNotification,
  srcs = undefined,
  ...props
}) => {
  const handleClick = (name) => {
    setNotification({ enabled: true, message: name });
  };
  return (
    <div
      className={`w-full max-w-xs mx-auto component grid aspect-square grid-cols-3 overflow-hidden shadow component card-bg rounded-xl gap-x-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 cursor-pointer motion-safe:hover:scale-[0.992] motion-safe:active:scale-[0.98] motion-safe:transition contrast-more:hover:ring-2 contrast-more:hover:ring-primary-800 dark:contrast-more:hover:ring-primary-50 contrast-more:hover:ring-offset-2 select-none  ${
        props.className ? props.className : ``
      }`}
      tabIndex={0}
      aria-label={`Collage related to Forest, by John Doe`}
      onClick={
        () =>
          handleClick(
            "Image collage"
          ) /* You can use router() to push to a new href once the component is clicked, it is better than wrapping it with an <a /> tag, which is not recommended. */
      }
    >
      <div className="relative w-full h-full col-span-2 select-none pointer-events-none">
        <Image
          src={
            srcs
              ? srcs[0]
              : "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          }
          alt="Beautiful forest from bird's eye view. By Geran de Klerk from Unsplash."
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="grid grid-flow-col grid-rows-2 gap-0.5 select-none pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src={
              srcs
                ? srcs[1]
                : "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            }
            alt="Foggy forest in the morning. By Marita Kavelashvili from Unsplash."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-full select-none pointer-events-none">
          <Image
            src={
              srcs
                ? srcs[2]
                : "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            }
            alt="Beautiful forest from low angle view. By kazuend from Unsplash."
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};
export default ImageCollageComponent;
