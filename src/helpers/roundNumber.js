export const roundNumber = (num) => {
  num = Number(num);
  if (num > 1000) {
    return (num / 1000).toFixed() * 1000;
  } else if (num > 100) {
    return (num / 100).toFixed() * 100;
  } else if (num > 10) {
    return (num / 10).toFixed() * 10;
  } else {
    return num;
  }
};
