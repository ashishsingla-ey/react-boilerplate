import React from 'react';
import withError from '../utils/errorHoc';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Row from 'react-bootstrap/Row';

class DashboardContainer extends React.Component {
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
          <title>testApp Dashboard</title>
        </Helmet>
        Dashboard
        <button
          onClick={() => {
            history.push('/');
          }}
        >
          Home
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

const ConnectedDashboardContainer = connect(mapStateToProps)(
  DashboardContainer,
);

export default withError(withRouter(ConnectedDashboardContainer));
