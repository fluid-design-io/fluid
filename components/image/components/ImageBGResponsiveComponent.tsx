import Image from "next/image";

function ImageBGResponsiveComponent({ ...props }) {
  return (
    <div
      className={`relative grid justify-center w-full grid-cols-1 xs:grid-cols-2 component  ${
        props.className ? props.className : ``
      }`}
    >
      <div className="col-span-1">
        <div className="relative w-full h-full py-36">
          <Image
            src="https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Blue ocean and sand from birds eye view. By Ben Krygsman from Unsplash."
            layout="fill"
            objectFit="cover"
            objectPosition={"bottom"}
          />
        </div>
      </div>
      <div className="flex items-center justify-center col-span-1 p-4 bg-stone-50 dark:bg-stone-900">
        <svg
          className="w-full h-64 border-2 border-dashed rounded text-stone-200 dark:text-stone-600 dark:border-stone-600 border-stone-300"
          preserveAspectRatio="none"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeWidth="2"
            d="M0 0l200 200M0 200L200 0"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default ImageBGResponsiveComponent;
