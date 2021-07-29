import { Switch } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import * as authOperations from "./redux/auth/auth-operations";
import { connect } from 'react-redux';

// Component
import NavBar from './views/NavBar';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';
import Contacts from './views/Contacts';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';


class App extends Component{

  componentDidMount() {
    this.props.onGetCurrentUser();
  };

  render() {
    return (
    <div className="App">

      <NavBar />

      <Switch>
        <PublicRoute path={routes.home} exact component={HomeView} />
        <PublicRoute path={routes.about} component={AboutView} />
        <PublicRoute path={routes.login} component={LoginView} restricted redirectTo={routes.contact} />
        <PublicRoute path={routes.signup} component={SignupView} restricted redirectTo={routes.contact} />
        <PrivateRoute path={routes.contact} component={Contacts} restricted redirectTo={routes.login} />
      </Switch>

    </div>
  );
  }
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
};


export default connect(null, mapDispatchToProps)(App);
