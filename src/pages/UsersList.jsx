import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../reducers/userSlice";
import loader from "../assets/loader.gif";
import UserCard from "../components/UserCard";
import "./UsersList.css"
import CreateUserForm from "../components/CreateUserForm";

const UsersList = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.userData);
  const status = useSelector((state) => state.user.status);

//   console.log(status);

  const fetchUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response.data);
        dispatch(getUsers(response.data))
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //   if(status === "loading") {
  //     return <img src={loader} />
  //   }

  return (
    <div>
      <h1>Users List</h1>
      {status === "loading" ? (
        <img src={loader} />
      ) : users ? (
        <div className="card-container">
            <CreateUserForm />
          {users.map((user) => <UserCard key={user.id} user={user} />)}
        </div>
      ) : null}
    </div>
  );
};

export default UsersList;
