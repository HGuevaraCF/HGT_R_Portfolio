import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { validateMail } from '../utils/helpers';
import { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === 'name') {
      setName(inputValue);
    } else if (inputName === 'email') {
      setEmail(inputValue);
    } else if (inputName === 'message') {
      setMessage(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateMail(email)) {
      setErrorMessage("Invalid Email.");
      return;
    } else {
      switch (true) {
        case (!email):
          setErrorMessage("Email is required.");
          return;
        case (!name):
          setErrorMessage("Name is required.");
          return;
        case (!message):
          setErrorMessage("Message is required.");
          return;
      }
    }
    alert(`Thaks for reaching me out. I'll contact you as soon as posible.`);

    setEmail('');
    setName('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <Container style={{
      textAlign: 'justify'
    }}>
      <h1>Contact</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            type='input'
            name='name'
            onChange={handleChange}
            placeholder='John Smith'
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            type='email'
            name='email'
            onChange={handleChange}
            placeholder='Enter email'
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            value={message}
            rows={3}
            onChange={handleChange}
            name='message'
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </Container>
  )
}

export default Contact;