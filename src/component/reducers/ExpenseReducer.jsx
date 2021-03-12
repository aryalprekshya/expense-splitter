const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return null;
    default:
      return state;
  }
};

export default ExpenseReducer;
