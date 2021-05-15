import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Password = ({
  username,
  password,
  submit,
  handleChange,
  authInfo,
  history,
}) => {
  return (
    <Form className="form-signin" id="passForm" onSubmit={submit}>
      <Card>
        <Card.Body>
          <Row className="justify-content-center">
            <h5 className="text-primary">testApp </h5>
          </Row>
          <Form.Group>
            <Form.Control
              type="text"
              name="username"
              id="inputEmail"
              value={username}
              readOnly
              title="click to edit"
              onClick={() => history.goBack()}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label srOnly>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              autoFocus
              value={password}
              onChange={handleChange}
            />
          </Form.Group>
          <button
            className="btn btn-lg btn-primary btn-block mt-3"
            type="submit"
            disabled={!password || authInfo.isLoading}
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

export default Password;
