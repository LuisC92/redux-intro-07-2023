/* eslint-disable react/prop-types */
import "./UserCard.css"


const UserCard = ({user}) => {


  return (
    <div className="card">
      <h3>User: {user.username}</h3>
      <p>
        Name: {user.name}
      </p>
      <p>Email: {user.email}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserCard;
