import { ImageCollageComponent } from "../../image";

function CardCollageComponent({ setNotification }) {
  const tags = [
    {
      id: 1,
      name: "Nature",
    },
    {
      id: 2,
      name: "Wallpaper",
    },
    {
      id: 3,
      name: "Fog",
    },
  ];
  const handleClick = (name) => {
    setNotification({ enabled: true, message: name });
  };
  return (
    <>
      <ImageCollageComponent setNotification={setNotification} />
      <div className="w-full max-w-xs dark:text-white">
        <div className="pt-4 false">
          <h3 className="flex items-center font-bold text-left capitalize ">
            Forest
          </h3>
        </div>
        <p className="pt-1 text-sm text-stone-600 dark:text-stone-400 prefers-contrast:text-stone-800 dark:prefers-contrast:text-stone-100 prefers-contrast:font-medium">
          32 photos •{" "}
          <span className="cursor-pointer hover:opacity-80 hover:underline">
            <a href="" aria-label={`Browse more images by John Doe`}>
              By John Doe
            </a>
          </span>
        </p>
        <div className="-mt-1">
          <ul className="flex flex-wrap justify-start w-full pt-4 gap-x-3 no-scroll">
            {tags.map(({ id, name }) => (
              <li key={id} className="list-none">
                <button
                  className="px-4 py-1 text-sm font-medium capitalize rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 bg-stone-200 dark:bg-stone-700 prefers-contrast:hover:ring-2 prefers-contrast:hover:ring-stone-800 dark:prefers-contrast:hover:ring-stone-50 prefers-contrast:hover:ring-offset-2 hover:bg-stone-300 dark:hover:bg-stone-600 prefers-contrast:font-semibold prefers-contrast:border prefers-contrast:border-stone-700 dark:prefers-contrast:border-stone-200 dark:prefers-contrast:bg-stone-800 dark:prefers-contrast:text-stone-50 prefers-contrast:text-stone-800"
                  aria-label={`Browse category related to ${name}`}
                  onClick={() => handleClick(name)}
                >
                  <span className="sr-only">{name}</span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CardCollageComponent;
