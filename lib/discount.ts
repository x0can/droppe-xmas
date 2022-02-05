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
  const newArr = getDups(arr);
  for (let i = 0; i <= newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
      count++;
    }
  }
  return count;
};
