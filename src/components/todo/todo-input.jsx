const TodoItem = (props) => {
  console.log(">>> check props: ", props);
  const { addNewTodo } = props;
  // addNewTodo("Phat");
  return (
    <div className="todo-input">
      <input placeholder="Activity"></input>
      <button>Add</button>
    </div>
  );
};

export default TodoItem;
