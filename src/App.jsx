import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from './store/movies';
import { setType, fetchUsers } from './store/users';

const App = () => {
  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state) => state.users);
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
      <button onClick={() => dispatch(addMovie({ id: 3, title: 'movie31' }))}>
        ADD MOVIE
      </button>
      <hr />
      {/* <h3>Users type: {users.type}</h3>
      <button onClick={() => dispatch(setType('Admin'))}>SET TYEP</button> */}
      <div>{users.loading ? 'loading' : null}</div>
      <ul>
        {users
          ? users.users.map((user) => {
              <li key={user.id}>{user.name}</li>;
            })
          : null}
      </ul>
      <button onClick={() => dispatch(fetchUsers({ id: '1' }))}>
        GET USERS
      </button>
    </>
  );
};

export default App;
//Video No65 5:51
