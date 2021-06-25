import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageWrapper from './components/layouts/OpenWrapper';
import PrivatePages from './components/layouts/PrivatePages.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import ForgetPassword from './components/ForgetPassword.jsx';
import Dashboard from './components/pages/Dashboard.jsx';

function App() {
  return (
    <>
      <PageWrapper>
        <ToastContainer />
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/password-reset">
              <ForgetPassword />
            </Route>
            <PrivatePages exact path="/home">
              <Dashboard />
            </PrivatePages>
          </Switch>
        </Router>
      </PageWrapper>

    </>
  );
}

export default App;
