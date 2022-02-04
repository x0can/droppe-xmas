/* eslint-disable no-plusplus */
const getDups = (arr) => {
  const dups = [];
  arr.forEach((x) => {
    dups.push(x.productId);
  });
  return dups;
};

export const calculateDiscount = (arr) => {
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    }
  }
  return count;
};
