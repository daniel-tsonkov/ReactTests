import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/index';
import NewsList from './components/news_list';

const App = () => {
  return (
    <>
      <Header />
      {/* <NewsList /> */}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
