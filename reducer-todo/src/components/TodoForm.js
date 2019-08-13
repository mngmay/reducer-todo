import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [newItem, setNewItem] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleChanges = e => {
    e.target.name === "newItem" && setNewItem(e.target.value);
    e.target.name === "dueDate" && setDueDate(e.target.value);
  };

  return (
    <div>
      <input
        className="item-input"
        type="text"
        name="newItem"
        value={newItem}
        onChange={handleChanges}
      />
      <input
        className="item-dueDate"
        type="date"
        name="dueDate"
        value={dueDate}
        onChange={handleChanges}
      />
      <button
        onClick={() => {
          newItem &&
            dispatch({ type: "ADD_ITEM", payload: { newItem, dueDate } });
          setNewItem("");
        }}
      >
        Add Todo
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DELETE_COMPLETED" });
        }}
      >
        Remove Completed
      </button>
    </div>
  );
};

export default TodoForm;
