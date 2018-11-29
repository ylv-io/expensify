export default expenses => expenses
  .map(o => o.amount)
  .reduce((sum, o) => sum + o, 0);
