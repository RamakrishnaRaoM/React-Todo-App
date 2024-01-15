//import Todo from "./Todo";
import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "./TodoContext";

function TodoItems({ onDeleteClick }) {
  const { todoItems, setTodoItems } = useContext(TodoContext);
  console.log(todoItems);
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
          id={item.id}
          onEdit={(newTxt) => {
            console.log(newTxt);
            const updatedList = todoItems.map((t) => {
              if (item.name == t.name) {
                item.name = newTxt;
              }
              return t;
            });
            setTodoItems(updatedList);
          }}
        />
      ))}
    </div>
  );
}
export default TodoItems;
