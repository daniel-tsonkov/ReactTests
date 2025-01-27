import { createContext, useState } from 'react';

const MyContext = createContext();
const MyProvider = (props) => {
  const [active, setActive] = useState(true);
  const [users, setUsers] = useState([
    { id: 1, name: 'user1}' },
    { id: 2, name: 'user2}' },
    { id: 3, name: 'user3}' },
  ]);
  return (
    <MyContext.Provider
      value={{
        users: users,
        activeState: active,
        setActive: () => setActive(!active),
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
