const MovieCard = (props) => {
  console.log(props);
  return (
    <oi>
      {Object.keys(props.movies).map((movieId) => {
        const movie = props.moives[movieId];
        console.log(movieId);
        return (
          <li key={movie.id}>
            <h2>{movie.name}</h2>
            <p>
              {true
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
