import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from './store/movies';

const App = () => {
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Movie:</h2>
      <ul>
        {movies
          ? movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
          : null}
      </ul>
      <hr />
      <button onClick={() => dispatch(addMovie())}>ADD MOVIE</button>
    </>
  );
};

export default App;
