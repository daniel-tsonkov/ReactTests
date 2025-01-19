import { useState } from 'react';
import Navigation from './nav';

export default function Header(props) {
  let [active, setActive] = useState('active');
  let [keywords, setKeywords] = useState('');

  // const onChangeHandler = (event) => {
  //   const value = event.target.value === '' ? 'active' : 'no - active';
  //   setKeywords(event.target.value);
  //   setActive(value);
  // };

  return (
    <header clasname={active}>
      <div className="logo">LOGO News</div>
      <input onChange={props.getKeywords} />
      {/* The keywords are: {keywords} */}
      <Navigation />
    </header>
  );
}
