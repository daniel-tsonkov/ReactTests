import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormThree = () => {
  const formikProps = {
    initialValues: { firstname: '', lastname: '', color: '', age: '' },
    validationSchema: Yup.object({
      firstname: Yup.string().required('Enter first name'),
      lastname: Yup.string().required('Enter last name'),
      age: Yup.string().required('Enter age'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  };

  const myCustomComponent = ({
    field,
    form: { touched, errors },
    ...props
  }) => (
    <>
      <label htmlFor={field.name}>{props.labelname}</label>
      <input type="text" className="form-control" {...field} />
      {errors[field.name] && touched[field.name] ? (
        <span>{errors[field.name]}</span>
      ) : null}
    </>
  );

  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <Formik {...formikProps}>
          {(formik) => (
            <Form>
              <label htmlFor="firstname">First name</label>
              <Field name="firstname" type="text" className="form-control" />
              {/*<ErrorMessage name="firstname" />*/}
              {formik.errors.firstname && formik.touched.firstname ? (
                <span>{formik.errors.firstname}</span>
              ) : null}
              <hr className="mb-4" />
              <Field
                name="lastname"
                placeholder="last name"
                component={myCustomComponent}
                labelname="Enter your last name"
              />

              <hr className="mb-4" />
              <Field
                name="age"
                placeholder="Age"
                component={myCustomComponent}
                labelname="Enter your age"
              />

              <hr className="mb-4" />
              <Field as="select" name="color" className="custom-select">
                <option value="red">RED</option>
                <option value="green">GREEN</option>
                <option value="blue">BLUE</option>
              </Field>

              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormThree;
