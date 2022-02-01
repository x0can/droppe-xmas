export const compareArray = (arr1, arr2) => {
  arr1 = arr1.filter((val) => !arr2.includes(val));
  return arr1;
};
