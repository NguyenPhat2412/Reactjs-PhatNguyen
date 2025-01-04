import "./todo.css";
import TodoList from "./todo-list";
import TodoItem from "./todo-input";
import TodoImg from "./todo-img";
import { useState } from "react";
const TodoApp = () => {
  const [TodoList1, setTodosList1] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomInt(1, 100),
      name: name,
    };
    setTodosList1([...TodoList1, newTodo]); // copy lai data trc do
    // TodoList1.push(newTodo);
    // setTodosList1(TodoList1) // ko nen sua doi truc tiep cua React
  };

  const deleteTodo = (id) => {
    const newTodo = TodoList1.filter((item) => item.id !== id);
    setTodosList1(newTodo);
  };

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="todo-container ">
      <div className="todo-title">Todo List</div>
      <TodoItem addNewTodo={addNewTodo} />
      {/* {TodoList1.length > 0 && (
        <TodoList
          // phai them () di thuc thi Function
          TodoList1={TodoList1}
        />
      )}
      {TodoList1.length === 0 && <TodoImg />} */}
      {TodoList1.length > 0 ? (
        <TodoList TodoList1={TodoList1} deleteTodo={deleteTodo} />
      ) : (
        <TodoImg />
      )}
    </div>
  );
};
export default TodoApp;
