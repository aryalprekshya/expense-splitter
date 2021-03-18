const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return { ...state, user: action.payload.user };

    case "SAVE_EXPENSES":
      return {
        ...state,
        expenses: action.payload.expenses,
      };

    default:
      return state;
  }
};

export default ExpenseReducer;
