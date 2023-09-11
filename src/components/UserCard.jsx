/* eslint-disable react/prop-types */
import "./UserCard.css"
import { useDispatch } from "react-redux";
import { deleteUsers } from "../reducers/userSlice";

const UserCard = ({user}) => {

    const dispatch = useDispatch()

    const deleteUser = (id)=>{
        dispatch(deleteUsers(id))
    }

  return (
    <div className="card">
      <h3>User: {user.username}</h3>
      <p>
        Name: {user.name}
      </p>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
      <button onClick={()=>deleteUser(user.id)}>Delete User</button>
    </div>
  );
};

export default UserCard;
