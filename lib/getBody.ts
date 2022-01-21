export const getBody = (children, key) =>
  children.length > 1 ? children.filter((div) => div.key === key) : undefined;
export const getBodyExcept = (children, key) =>
  children.length > 1 ? children.filter((div) => div.key !== key) : undefined;
