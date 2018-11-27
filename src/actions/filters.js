
// SET_TEXT
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT',
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});


// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date: date
});

// SET_END_DATE
export const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date: date
});