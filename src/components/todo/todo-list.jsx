const TodoList = (props) => {
  // props la object{}
  const { name, age, data } = props;
  // const name = props.name;
  // const age = props.age;
  // const data = props.data;
  const { TodoList1 } = props;

  console.log(">>> check props: ", props);
  return (
    <div className="todo-list">
      {TodoList1.map((item, index) => {
        return (
          <div className="todo-item">
            <div>{item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
      <div>{JSON.stringify(props.TodoList1)}</div>
    </div>
  );
};

export default TodoList;
