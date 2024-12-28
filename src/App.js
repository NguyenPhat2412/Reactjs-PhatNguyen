import "./components/todo/todo.css";
import TodoList from "./components/todo/todo-list";
import TodoItem from "./components/todo/todo-input";
import TodoImg from "./components/todo/todo-img";
import { useState } from "react";
const App = () => {
  const [TodoList1, setTodosList1] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Do Homework" },
    { id: 3, name: "Play Game" },
  ]);
  const hoidanit = "Phat";
  const age = 18;
  const data = {
    address: "Hanoi",
    country: "VietNam",
  };

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomInt(1, 100),
      name: name,
    };
    setTodosList1([...TodoList1, newTodo]); // copy lai data trc do
    // TodoList1.push(newTodo);
    // setTodosList1(TodoList1) // ko nen sua doi truc tiep cua React
  };

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="todo-container ">
      <div className="todo-title">Todo List</div>
      <TodoItem addNewTodo={addNewTodo} />
      <TodoList
        name={hoidanit}
        age={age}
        data={data}
        // phai them () di thuc thi Function
        TodoList1={TodoList1}
      />
      <TodoImg />
    </div>
  );
};
export default App;
