const ExpenseReducer = (state, action) => {
  console.log(action.payload.user);
  switch (action.type) {
    case "SET_USER_INFO":
      return { ...state, user: action.payload.user };

    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: action.payload.expense,
      };

    case "EDIT_EXPENSE":
      return null;

    case "DELETE_EXPENSE":
      return null;

    case "CALCULATE_TOTAL":
      return null;

    default:
      return state;
  }
};

export default ExpenseReducer;
