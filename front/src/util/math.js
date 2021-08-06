const averagePropInList = (list, property) => {
  if (list.length) {
    return list.reduce((a, b) => a + b[property], 0) / list.length;
  }
  return 0;
};

export { averagePropInList };
