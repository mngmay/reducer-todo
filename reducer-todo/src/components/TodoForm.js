import React, { useState } from "react";

const TodoForm = ({ state, dispatch }) => {
  const [newItem, setNewItem] = useState();

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
        onClick={() =>
          newItem && dispatch({ type: "ADD_ITEM", payload: newItem })
        }
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
