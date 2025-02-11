import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../store/utils/thunks';

import { showToast } from '../utils/tools';

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { email: '', firstname: '', lastname: '', message: '' },
    validationSchema: Yup.object({
      email: Yup.string().required('Enter email').email('invalid email'),
      firstname: Yup.string().required('Enter text'),
      lastname: Yup.string().required('Enter text'),
      message: Yup.string().required('Enter text').max(500, 'Too long'),
    }),
    onSubmit: (valuses, { resetForm }) => {
      dispatch(sendMessage(valuses))
        .unwrap()
        .then((response) => {
          resetForm();
          showToast('SUCCESS', 'Message send');
        })
        .catch((err) => {
          showToast('ERROR', 'Message not send');
        });
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
          {formik.errors.email && formik.touched.email ? (
            <Alert variant="danger">{formik.errors.email}</Alert>
          ) : null}
        </div>
        <div className="form-group mt-2">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            placeholder="Enter your name"
            {...formik.getFieldProps('firstname')}
          />
          {formik.errors.firstname && formik.touched.firstname ? (
            <Alert variant="danger">{formik.errors.firstname}</Alert>
          ) : null}
        </div>
        <div className="form-group mt-2">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Enter your last name"
            {...formik.getFieldProps('lastname')}
          />
          {formik.errors.lastname && formik.touched.lastname ? (
            <Alert variant="danger">{formik.errors.lastname}</Alert>
          ) : null}
        </div>
        <div className="form-group mt-2">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows={3}
            {...formik.getFieldProps('message')}
          />
          {formik.errors.message && formik.touched.message ? (
            <Alert variant="danger">{formik.errors.message}</Alert>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Send message
        </button>
      </form>
    </>
  );
};

export default Contact;
