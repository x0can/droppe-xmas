export const arrayRemove = (arr, value) => {
  return arr.filter((ele) => {
    return ele !== value;
  });
};

export const arrayReducer = (arr) => {
  if (arr.length > 5) {
    arr.length -= 1;
    return arr;
  }
  if (arr.length === 5) {
    return arr;
  }
};
