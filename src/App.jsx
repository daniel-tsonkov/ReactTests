import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/home';
import Post from './components/posts';
import Profile from './components/profile';
import PostItem from './components/postitem';

const App = () => {
  return (
    <BrowserRouter>
      console.log("asd");
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
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="posts" className="nav-link">
                POST
              </Link>
            </li>
            <li className="nav-item">
              <Link to="profile" className="nav-link">
                PROFILE
              </Link>
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
