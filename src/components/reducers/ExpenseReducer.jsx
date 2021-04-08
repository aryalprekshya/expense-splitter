const ExpenseReducer = (state, action) => {
  console.log(action.payload.secondEmail);
  switch (action.type) {
    case "SET_USER_INFO":
      return { ...state, user: action.payload.user };

    case "SET_SECOND_USER_EMAIL":
      return { ...state, secondUserEmail: action.payload.secondEmail };

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
