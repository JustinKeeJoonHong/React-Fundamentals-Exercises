import MovieCard from "./MovieCard";

const UserList = ({ users, usersWhoLikedMovie }) => {
  return (
    <ul>
      {usersWhoLikedMovie.map((id) => {
        <li key={id}>{users[id].name}</li>;
      })}
    </ul>
  );
};

export default UserList;
