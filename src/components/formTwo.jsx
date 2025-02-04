import { useFormik } from 'formik';

const FormTwo = () => {
  const formik = useFormik({
    initialValues: { firstname: '' },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <form>
          <label htmlFor="firstname">First name</label>
          <input className="form-control" type="text" name="firstname" />

          <hr className="mb-4" />
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormTwo;
