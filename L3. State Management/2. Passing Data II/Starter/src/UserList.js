const UserList = ({ users, usersWhoLikedMovie }) => {
  return (
    <ul>
      {Array.isArray(usersWhoLikedMovie)
        ? usersWhoLikedMovie.map((id) => <li key={id}>{users[id].name}</li>)
        : null}
    </ul>
  );
};

export default UserList;
