import "./components/todo/todo.css";
import TodoList from "./components/todo/todo-list";
import TodoItem from "./components/todo/todo-input";
import TodoImg from "./components/todo/todo-img";
const App = () => {
  const hoidanit = "Phat";
  const age = 18;
  const data = {
    address: "Hanoi",
    country: "VietNam",
  };
  return (
    <div className="todo-container ">
      <div className="todo-title">Todo List</div>
      <TodoItem />
      <TodoList name={hoidanit} age={age} data={data} />
      <TodoImg />
    </div>
  );
};
export default App;
