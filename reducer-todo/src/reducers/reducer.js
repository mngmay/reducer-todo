import moment from "moment";

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
          {
            item: action.payload.newItem,
            completed: false,
            id: Date.now(),
            dateComplete: "",
            dueDate: moment(action.payload.dueDate).format("MMMM Do YYYY")
          }
        ]
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              completed: !item.completed,
              dateComplete: Date.now()
            };
          } else {
            return item;
          }
        })
      };
    case "DELETE_COMPLETED":
      return {
        ...state,
        items: state.items.filter(item => item.completed !== true)
      };
    default:
      return state;
  }
};
