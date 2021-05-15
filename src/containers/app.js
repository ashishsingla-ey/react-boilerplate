import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/scss/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { UserAgentProvider, UserAgent } from '@quentin-sommer/react-useragent';

// top level components
import Container from 'react-bootstrap/Container';
// import Sidebar from '../components/navigation/sidebar';
import Lazyload from '../components/shared/lazyLoad';
const MobileView = Lazyload(() => import('../components/mobileView'));

// lazy loaded containers
const Signin = Lazyload(() => import('../containers/signin'));
const Dashboard = Lazyload(() => import('../containers/dashboard'));

// root app component
class App extends Component {
  state = {
    icons: { className: 'abc-icons' },
    isMounted: false,
    sidebarToggled: false,
  };

  updateAppState = (data, cb) => this.setState(data, cb);

  render() {
    return (
      <UserAgentProvider ua={window.navigator.userAgent}>
        <IconContext.Provider value={this.state.icons}>
          <UserAgent computer>
            <Router basename="/app">
              <div id="wrapper">
                <div id="page-content-wrapper">
                  <Container fluid>
                    <Switch>
                      <Route path="/" component={Signin} />
                      <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                  </Container>
                </div>
              </div>
            </Router>
          </UserAgent>
          <UserAgent mobile>
            <MobileView />
          </UserAgent>
        </IconContext.Provider>
      </UserAgentProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    authInfo: state.auth,
  };
};

export default connect(mapStateToProps)(App);
