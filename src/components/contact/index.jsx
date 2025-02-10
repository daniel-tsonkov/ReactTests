import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
    initialValue: { email: '', firstname: '', lastname: '', message: '' },
    validationSchema: Yup.object({
      email: Yup.string().required('Enter email').email('invalid email'),
      firstname: Yup.string().required('Enter text'),
      lastname: Yup.string().required('Enter text'),
      message: Yup.string().required('Enter text').max(500, 'Too long'),
    }),
    onSubmit: (valuse, { resetForm }) => {
      console.log(valuse);
    },
  });

  return (
    <>
      <h1>Contact us</h1>
      <form className="mt-3" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email@example.com"
            {...formik.getFieldProps('email')}
          />
          {formik.errors.email && formik.touched.email ?
          
        :null}
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
        <div className="form-group mt-2">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" name="message" rows={3} />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Send message
        </button>
      </form>
    </>
  );
};

export default Contact;
