import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [newItem, setNewItem] = useState("");

  const handleChanges = e => {
    setNewItem(e.target.value);
    console.log(e.target.value);
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
      <button
        onClick={() => {
          newItem && dispatch({ type: "ADD_ITEM", payload: newItem });
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
