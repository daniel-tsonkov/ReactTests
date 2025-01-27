import { createContext, useState } from 'react';

const MyContext = createContext();
const MyProvider = (props) => {
  const [user, setUser] = useState([]);
  return <MyContext.Provider>{props.children};</MyContext.Provider>;
};

export { MyContext, MyProvider };
