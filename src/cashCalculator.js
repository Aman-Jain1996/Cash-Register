let cashCalculator = (amount) => {
  let obj = {
    2000: 0,
    500: 0,
    100: 0,
    20: 0,
    10: 0,
    5: 0,
    1: 0
  };
  let noteAvailable = Object.keys(obj).reverse();

  let filterNotes = noteAvailable.filter((item) => item <= amount);

  filterNotes.map((item) => {
    let quotient = Math.floor(amount / item);
    amount = amount % item;
    let obj1 = {};
    obj1[item] = quotient;
    Object.assign(obj, obj1);
    return 0;
  });
  return obj;
};

export default cashCalculator;
