import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToNewsletter } from '../../store/utils/thunks';

const Newsletter = () => {
  const textInput = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;

    dispatch(addToNewsletter({ email: value }))
      .unwrap()
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="newsletter_container">
      <h1>Join our newsletter</h1>
      <div className="form">
        <Form className="mt-4" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="your@email.com"
              name="emails"
              ref={textInput}
            />
          </Form.Group>
          <Button className="mt-2" variant="primary" type="submit">
            Add me to the list
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Newsletter;
