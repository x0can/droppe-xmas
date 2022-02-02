/* eslint-disable no-plusplus */
const getDups = (arr) => {
  const dups = [];
  arr.forEach((x) => {
    dups.push(x.userId);
  });
  return dups;
};

export const calculateDiscount = (arr) => {
  let count = 0;
  const duplicates = getDups(arr);
  for (let i = 0; i <= duplicates.length; i++) {
    if (duplicates[i] === duplicates[i + 1]) {
      count++;
    }
  }
  return count;
};
