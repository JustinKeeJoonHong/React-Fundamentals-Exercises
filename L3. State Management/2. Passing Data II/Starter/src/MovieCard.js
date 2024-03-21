const MovieCard = ({ users, usersWhoLike, movieInfo }) => {
  return (
    <oi>
      {Object.keys(movieInfo).map((movieId) => {
        console.log("------");
        console.log(movieId);
        return (
          <li key={movieId.id}>
            <h2>{movieId.name}</h2>
            <p>
              {usersWhoLike.length == 0
                ? "Liked By:"
                : "None of the current users liked this movie"}
            </p>
          </li>
        );
      })}
    </oi>
  );
};

export default MovieCard;
