import React from "react";

const TodoList = ({ state, dispatch }) => {
  console.log("state", state.items);
  return (
    <div>
      {state.items.map(item => (
        <li
          key={item.id}
          onClick={() => {
            dispatch({ type: "TOGGLE_COMPLETED", payload: item });
            console.log("item clicked", state.items);
          }}
          className={`completed-${item.completed}`}
        >
          <span>{item.item}</span>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
