const TodoList = (props) => {
  // props la object{}
  // const { name, age, data } = props;
  // const name = props.name;
  // const age = props.age;
  // const data = props.data;
  const { TodoList1, deleteTodo } = props;
  const handleClick = (id) => {
    deleteTodo(id);
  };
  console.log(">>> check props: ", props);
  return (
    <div className="todo-list">
      {TodoList1.map((item, index) => {
        return (
          <div className="todo-item" key={index}>
            <div>{item.name}</div>
            <button
              onClick={() => handleClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
