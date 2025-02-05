import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
        <Formik {...formikProps}>
          <Form>
            <label htmlFor="firstname">First name</label>
            <Field name={firstname} type="text" className="form-control" />
            <ErrorMessage name="firstname" />

            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormThree;
