export const getUniqeElements = (array: string[]): string[] => {
  const newSet = new Set(array);
  return Array.from(newSet);
};
