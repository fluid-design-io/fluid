export const getPrevItem = (list: string[], index: number, skip = 0) => {
  return list[index - (1 + skip)] || list[list.length - (1 + skip)];
};
export const getNextItem = (list: string[], index: number, skip = 0) => {
  return list[index + (1 + skip)] || list[0 + skip];
};
