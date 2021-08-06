const averagePropInList = (list, property) => {
  if (list.length) {
    const average = list.reduce((a, b) => a + b[property], 0) / list.length;

    return Math.round(average * 10) / 10;
  }
  return 0;
};

export { averagePropInList };
