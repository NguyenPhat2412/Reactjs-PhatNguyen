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

  const addNewTodo = (name) => {
    alert(`call me ${name}`);
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
      />
      <TodoImg />
    </div>
  );
};
export default App;
