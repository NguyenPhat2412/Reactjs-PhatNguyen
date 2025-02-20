import UserTable from "../components/users/user_table";
import UserForm from "../components/users/user_form";
const UserPage = () => {
  return (
    <div>
      <div>
        <UserForm />
        <UserTable />
      </div>
    </div>
  );
};

export default UserPage;
