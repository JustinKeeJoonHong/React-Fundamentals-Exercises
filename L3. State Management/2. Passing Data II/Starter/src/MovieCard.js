const MovieCard = ({ users, usersWhoLike, movieInfo }) => {
  return (
    <oi>
      {Object.keys(movieInfo).map((movieId) => {
        return (
          <li key={movieInfo.id}>
            <h2>{movie.name}</h2>
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
