import React from "react";

const TodoList = ({ state, dispatch }) => {
  console.log("state", state.items);
  return (
    <div>
      {state.items.map(item => (
        <li
          key={item.id}
          onClick={() => dispatch({ type: "TOGGLE_COMPLETED" })}
        >
          {item.item}
        </li>
      ))}
    </div>
  );
};

export default TodoList;
