const Contact = () => {
  return (
    <>
      <h1>Contact us</h1>
      <form className="mt-3">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email@example.com"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Enter your last name"
          />
        </div>
      </form>
    </>
  );
};

export default Contact;
