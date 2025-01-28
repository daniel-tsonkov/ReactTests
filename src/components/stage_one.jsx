import { useContext, useRef } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

import { MyContext } from '../context';

const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;

    console.log(value);
    textInput.current.value = '';
  };

  console.log(context);

  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add player name"
            name="player"
            ref={textInput}
          />
        </Form.Group>
        <Button className="miami" variant="primary" type="submit">
          Add player
        </Button>
      </Form>
    </>
  );
};

export default Stage1;
