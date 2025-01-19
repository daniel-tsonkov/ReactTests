import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/index';
import NewsList from './components/news_list';
// import StatePlayground from './components/playgrounds/state';
import { newsData } from './utils/data';

const App = () => {
  let [news, setNews] = useState(newsData);

  const getKeywords = () => {
    console.log('hey');
  };

  return (
    <>
      <Header getKeywords={getKeywords} />
      <div className="container">
        {/* <StatePlayground /> */}{' '}
        <NewsList news={news}>
          <br />
          <h1>Crildreen</h1>
        </NewsList>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
