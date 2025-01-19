import { useState } from 'react';
import Nav from './nav';

export default function Header() {
  let [keywords, setKeywords] = useState('');

  const onChangeHandler = (event) => {
    setKeywords(event.target.value);
  };

  return (
    <div>
      <header>
        <div className="logo">LOGO News</div>
        <input onChange={onChangeHandler} />
        The keywords are: {keywords}
        <Nav />
      </header>
    </div>
  );
}
