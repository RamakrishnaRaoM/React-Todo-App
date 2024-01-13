import { useState } from "react";
import TodoContext from "./TodoContext";
import { useContext } from "react";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  const [estate, setEstate] = useState(false);
  const [todoN, setTodon] = useState();

  const { TodoItems, setTodoItems } = useContext(TodoContext);
  const Change = (event) => {
    setTodon(event.target.value);
    TodoItems.map((item) => {
      if (item.name == todoName) {
        item.name = todoN;
        item.id = todoN;
      }
    });
  };

  return (
    <div className="container">
      <div className="row kg-row">
        {estate ? (
          <input className="col-6" placeholder="edit todo" onChange={Change} />
        ) : (
          <div className="col-6">{todoName}</div>
        )}
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn" onClick={() => setEstate(!estate)}>
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
