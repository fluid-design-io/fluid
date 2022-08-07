export const getBody = (children, key) =>
  children.length > 0 ? children.filter((div) => div.key === key) : undefined;
export const getBodyExcept = (children, key) =>
  children.length > 0 ? children.filter((div) => div?.key !== key) : undefined;
