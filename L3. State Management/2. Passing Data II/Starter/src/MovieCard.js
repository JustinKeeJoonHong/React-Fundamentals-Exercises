const MovieCard = ({ users, usersWhoLikedMovie, movieInfo }) => {
  console.log("this is userswhoLikedMovie");
  console.log(usersWhoLikedMovie);
  console.log(typeof usersWhoLikedMovie);
  console.log("below is movieInfo");
  console.log(movieInfo);
  console.log(typeof movieInfo);
  return (
    <oi>
      {Object.keys(movieInfo).map((movieId) => {
        return (
          <li key={movieId.id}>
            <h2>{movieId.name}</h2>
            <p>
              {usersWhoLikedMovie.length == 0
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
