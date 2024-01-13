//import Todo from "./Todo";
import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteClick }) {
  console.log(todoItems);
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
          id={item.name}
        />
      ))}
    </div>
  );
}
export default TodoItems;
