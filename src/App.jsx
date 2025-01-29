import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/home';
import Post from './components/posts';
import Profile from './components/profile';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">HOME</Link>
        <Link to="posts">POST</Link>
        <Link to="profile">PROFILE</Link>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Post />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <footer>
        <hr />
        Footer
      </footer>
    </BrowserRouter>
  );
};

export default App;
