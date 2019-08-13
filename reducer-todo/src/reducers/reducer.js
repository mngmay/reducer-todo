export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};
