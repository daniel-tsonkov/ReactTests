const App = () => {
  const triggerHandler = () => {
    console.log('hello');
  };
  return (
    <>
      <h1>Form:</h1>
      <input type="text" />
      <button ontClick={triggerHandler}>Trigger</button>
    </>
  );
};

export default App;
