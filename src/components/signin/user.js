import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Username = ({ username, submit, handleChange, authInfo }) => {
  return (
    <Form className="form-signin" id="userForm" onSubmit={submit}>
      <Card>
        <Card.Body>
          <Row className="justify-content-center">
            <h5 className="text-primary">testApp </h5>
          </Row>
          <Form.Group>
            <Form.Label srOnly>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              id="inputEmail"
              placeholder="Username or Email"
              required
              autoFocus
              value={username}
              onChange={handleChange}
            />
          </Form.Group>
          <button
            className="btn btn-lg btn-primary btn-block mt-3"
            type="submit"
            disabled={!username || authInfo.isLoading}
          ></button>
          {!authInfo.isLoading && authInfo.error && (
            <Alert variant="danger" className="mt-3">
              {authInfo.error.message}
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Form>
  );
};

export default Username;
