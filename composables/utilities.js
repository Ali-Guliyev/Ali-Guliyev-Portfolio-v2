export const removeLastEl = (string) => {
  let newStr = "";
  for (let i = 0; i < string.length - 1; i++) {
    newStr += string[i];
  }
  return newStr;
};

export const randomIntNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const randomArrItem = (arr) => {
  return arr[randomIntNumber(0, arr.length)];
};

export const randomFloatNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};
