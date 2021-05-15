import React from 'react';
import withError from '../utils/errorHoc';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Row from 'react-bootstrap/Row';
import Lazyload from '../components/shared/lazyLoad';

class SigninContainer extends React.Component {
  state = {
    username: 'admin',
    password: 'admin',
    isMounted: false,
  };

  componentDidMount() {
    console.log(this.props, this.state);
  }

  render() {
    const { history } = this.props;
    return (
      <Row>
        <Helmet>
          <title>testApp Login</title>
        </Helmet>
        Hello World
        <button
          onClick={() => {
            history.push('/dashboard');
          }}
        >
          Dashboard
        </button>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    authInfo: state.auth,
  };
};

const ConnectedSigninContainer = connect(mapStateToProps)(SigninContainer);

export default withError(withRouter(ConnectedSigninContainer));
