import Image from "next/image";
import CodeBlock from "../framework/CodeBlock";

function ImageGrid() {
  const raw = {
    instagram: `
function Example() {
  const images = [
    {
      large:
        "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1622631211634-e307f33e4ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=10",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1490718720478-364a07a997cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1630497946593-2d38c0fd65a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1580598152173-e5fab42e08a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1561982558-05602498d458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      author: "Ray Hennessy",
    },
  ];
  return (
    <div className="w-full max-w-xs overflow-hidden shadow component card-bg rounded-xl">
      <div className="grid grid-cols-3 gap-0.5">
        {images.map(({ large, author }) => (
          <div key={large} className="relative aspect-square">
            <Image
              src={large}
              alt={\`Bird image shot by \${author} from Unsplash.\`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
    `,
  };
  const images = [
    {
      large:
        "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1622631211634-e307f33e4ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=10",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1490718720478-364a07a997cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1630497946593-2d38c0fd65a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1580598152173-e5fab42e08a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      author: "Ray Hennessy",
    },
    {
      large:
        "https://images.unsplash.com/photo-1561982558-05602498d458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      author: "Ray Hennessy",
    },
  ];
  return (
    <>
      <CodeBlock title="Instagram Layout" raw={raw.instagram}>
        <div className="grid w-full pt-20 pb-16 place-items-center">
          <div className="w-full max-w-xs overflow-hidden shadow component card-bg rounded-xl">
            <div className="grid grid-cols-3 gap-0.5">
              {images.map(({ large, author }) => (
                <div key={large} className="relative aspect-square">
                  <Image
                    src={large}
                    alt={`Bird image shot by ${author} from Unsplash.`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CodeBlock>
    </>
  );
}

export default ImageGrid;
