import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Post from './components/posts';
import Profile from './components/profile';

const App = () => {
  return (
    <BrowserRouter>
      <header>Header</header>
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
