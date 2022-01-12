import Image from "next/image";

function ImageOnlyComponent({ src = undefined, ...props }) {
  return (
    <div
      className={`w-full max-w-xs overflow-hidden shadow component card-bg rounded-xl ${
        props.className ? props.className : `h-48`
      } `}
    >
      <div className="relative w-full h-full pointer-events-none select-none">
        <Image
          src={
            src
              ? src
              : "https://images.unsplash.com/photo-1545647274-96644da34363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          }
          alt="birds eye view of the beautiful ocean with a boat driving by."
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default ImageOnlyComponent;
