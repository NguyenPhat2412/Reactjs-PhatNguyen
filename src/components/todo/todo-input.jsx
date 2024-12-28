import { useState } from "react";
const TodoItem = (props) => {
  // useState hook
  //const valueInput = "Phat";
  const [valueInput, setvalueInput] = useState("Phat");
  const { addNewTodo } = props;
  // addNewTodo("Phat");
  const handleClick = () => {
    addNewTodo(valueInput);
    setvalueInput(""); // reset lai
  };

  const handleOnChange = (name) => {
    setvalueInput(name); // lay gia tri tu o input
  };
  return (
    <div className="todo-input">
      <input
        placeholder="Activity"
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput} // su kien nao xay ra voi thuc thi
      ></input>
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div>My text is = {valueInput}</div>
    </div>
  );
};

export default TodoItem;
