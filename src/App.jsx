import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  HashRouter,
  MemoryRouter,
  NavLink,
  Navigate,
} from 'react-router-dom';

import Home from './components/home';
import Post from './components/posts';
import Profile from './components/profile';
import PostItem from './components/postitem';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4">MyAPPLogo</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
              {/* <Link to="/" className="nav-link">
                HOME
              </Link> */}
            </li>
            <li className="nav-item">
              <NavLink to="posts" className="nav-link">
                POST
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="profile" className="nav-link">
                PROFILE
              </NavLink>
            </li>
          </ul>
        </header>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts/:id" element={<PostItem />} />
          <Route path="posts" element={<Post />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
        <footer>
          <hr />
          Footer
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
