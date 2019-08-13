import React from "react";
import moment from "moment";

const TodoList = ({ state, dispatch }) => {
  return (
    <div>
      {state.items.map(item => (
        <li
          key={item.id}
          onClick={() => {
            dispatch({ type: "TOGGLE_COMPLETED", payload: item });
          }}
          className={`completed-${item.completed}`}
        >
          <span>{item.item}</span> <span>Due: {item.dueDate}</span>{" "}
          {item.completed && (
            <span>
              Completed:{" "}
              {moment(item.dateComplete).format("MMMM Do YYYY, h:mm:ss a")}
            </span>
          )}
        </li>
      ))}
    </div>
  );
};

export default TodoList;
