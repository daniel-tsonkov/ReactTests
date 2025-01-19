import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/index';
import NewsList from './components/news_list';
// import StatePlayground from './components/playgrounds/state';
import { newsData } from './utils/data';

const App = () => {
  let [news, setNews] = useState(newsData);
  console.log(news);

  return (
    <>
      <Header />
      <div className="container">
        {/* <StatePlayground /> */} <NewsList news={news} />
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
