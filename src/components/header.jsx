export default function Header() {
  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <header>
        <div className="logo" onClick={() => console.log('clicked')}>
          LOGO
        </div>
        <input onChange={onChangeHandler} />
      </header>
    </div>
  );
}
