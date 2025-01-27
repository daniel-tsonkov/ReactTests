import { useContext } from 'react';
import { MyContext } from '../context';

const UserItem = () => {
  const context = useContext(MyContext);
  console.log(context);

  return (
    <>
      {context.activeState
        ? context.users.map((user) => (
            <div key={user.id}>
              <div>Name:{user.name}</div>
            </div>
          ))
        : null}
      <button onClick={context.setActive}>Toggle it</button>
    </>
  );
};

export default UserItem;
