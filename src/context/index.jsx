import { createContext, useState } from 'react';

const MyContext = createContext();
const MyProvider = (props) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'user1}' },
    { id: 2, name: 'user2}' },
    { id: 3, name: 'user3}' },
  ]);
  return (
    <MyContext.Provider value={users}>{props.children};</MyContext.Provider>
  );
};

export { MyContext, MyProvider };
