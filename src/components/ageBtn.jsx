const AgeBtn = ({ handleAge }) => {
  console.log('5 - Btn age');

  return (
    <>
      <button onClick={handleAge}>Increment age</button>
    </>
  );
};

export default AgeBtn;
