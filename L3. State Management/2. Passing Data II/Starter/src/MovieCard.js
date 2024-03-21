import UserList from "./UserList";

const MovieCard = ({ users, usersWhoLikedMovie, movieInfo }) => {
  const likedByMessage = usersWhoLikedMovie
    ? usersWhoLikedMovie.length !== 0
      ? "Liked By:"
      : "None of the current users liked this movie"
    : "None of the current users liked this movie";

  return (
    <div>
      <h2 key={movieInfo.id}>{movieInfo.name}</h2>
      <p>{likedByMessage}</p>
      <UserList users={users} usersWhoLikedMovie={usersWhoLikedMovie} />
    </div>
  );
};

export default MovieCard;
