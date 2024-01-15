import { useState } from "react";
import TodoContext from "./TodoContext";
import { useContext } from "react";

function TodoItem({ todoName, todoDate, onDeleteClick, onEdit}) {
  const [estate, setEstate] = useState(false);
  const [editText, setEdit] = useState(todoName);

  //const { TodoItems, setTodoItems } = useContext(TodoContext);

  return (
    <div className="container">
      <div className="row kg-row">
        {estate ? (
          <input
            className="col-6"
            value={editText}
            type="text"
            onChange={(e) => setEdit(e.target.value)}
          />
        ) : (
          <div className="col-6">{todoName}</div>
        )}
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className="btn btn-success edit"
            onClick={() => {
              setEstate(!estate);
              onEdit(editText);
            }}
          >
            {estate ? "save" : "Edit"}
          </button>
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
