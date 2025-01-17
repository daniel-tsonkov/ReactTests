import Nav from './nav';

export default function Header() {
  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <header>
        <div className="logo">LOGO News</div>
        <input onChange={onChangeHandler} />
        <Nav />
      </header>
    </div>
  );
}
