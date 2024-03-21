import MovieCard from "./MovieCard";

const Dashboard = ({ usersByMovie, movies, users }) => {
  const movieCards = Object.keys(movies).map((id) => {
    <MovieCard
      key={id}
      users={users}
      usersWhoLike={usersByMovie[id]}
      movieInfo={movies[id]}
    />;
  });
  return <ul>{movieCards}</ul>;
};

export default Dashboard;
