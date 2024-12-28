const TodoList = (props) => {
  // props la object{}
  // const { name, age, data } = props;
  // const name = props.name;
  // const age = props.age;
  // const data = props.data;

  console.log(">>> check props: ", props);
  return (
    <div className="todo-list">
      <div>My name is {props.name}</div>
      <div>learning React</div>
      <div>Do HomeWork</div>
    </div>
  );
};

export default TodoList;
