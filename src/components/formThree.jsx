import { Formik, Form } from 'formik';

const FormThree = () => {
  const formikProps = {
    initialValues: { firstname: '' },
    validationSchema: Yup.object({
      firstname: Yup.string().required('This is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  };

  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <Formik>
          <form>
            <label htmlFor="firstname">First name</label>
            <input className="form-control" type="text" name="firstname" />

            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Submit
            </button>
          </form>
        </Formik>
      </div>
    </div>
  );
};

export default FormThree;
