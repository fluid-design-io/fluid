const Description = ({ children }) => {
  return (
    <div className="prose prose-sm min-w-[12.5rem]">
      <p>{children}</p>
    </div>
  );
};

Description.displayName = "Description";

export const Table = Object.assign({}, { D: Description });
