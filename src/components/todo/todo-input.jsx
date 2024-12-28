const TodoItem = (props) => {
  console.log(">>> check props: ", props);
  const { addNewTodo } = props;
  // addNewTodo("Phat");
  const handleClick = () => {
    alert("Click me");
  };

  const handleOnChange = (name) => {
    console.log(">>> handleOnChange", name); // lay gia tri tu o input
  };
  return (
    <div className="todo-input">
      <input
        placeholder="Activity"
        type="text"
        onChange={(event) => handleOnChange(event.target.value)} // su kien nao xay ra voi thuc thi
      ></input>
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default TodoItem;
