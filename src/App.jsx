import User from './components/user';

const App = () => {
  const users = [
    { id: 1, name: 'user1}' },
    { id: 2, name: 'user2}' },
    { id: 3, name: 'user3}' },
  ];
  return (
    <>
      <User users={users} />
    </>
  );
};

export default App;
