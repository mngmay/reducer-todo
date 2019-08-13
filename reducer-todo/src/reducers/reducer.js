export const initialState = {
  items: []
  /*
  Item shape: 
  {item: "Learn about reducers",
  completed: false,
  id: 3892987589} */
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [
          ...state.items,
          { item: action.payload, completed: false, id: Date.now() }
        ]
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
