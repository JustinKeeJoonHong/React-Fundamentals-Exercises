const MovieCard = (movies) => {
  return (
    <oi>
      {movies.map((movie) => {
        <h2>{movie.name}</h2>;
        <p>
          {True ? "Liked By:" : "None of the current users liked this movie"}
        </p>;
      })}
    </oi>
  );
};

export default MovieCard;
