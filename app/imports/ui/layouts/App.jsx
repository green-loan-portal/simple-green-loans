import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import HomePageHP from '../pages/HomePageHP';
import ListStuff from '../pages/ListStuff';
import ListStuffAdmin from '../pages/ListStuffAdmin';
import AddStuff from '../pages/AddStuff';
import EditStuff from '../pages/EditStuff';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
<<<<<<< HEAD
import Form1 from '../forms/Form1';
import Form2 from '../forms/Form2';
import Form6 from '../forms/Form6';
import Form7 from '../forms/Form7';
import Form8 from '../forms/Form8';
import Form9 from '../forms/Form9';
import ProfilePage from '../pages/ProfilePage';
import AuthorizationPage from '../components/Discretion';
=======
import FormSeventh from '../pages/FormSeventh';
import FormEighth from '../pages/FormEighth';
import FormNinth from '../pages/FormNinth';
import ProfilePage from '../pages/ProfilePage';
import AuthorizationPage from '../components/Discretion';
import Page6 from '../pages/Page6';
import MiddleInformation from '../components/MiddleInformation';
>>>>>>> parent of ad84aeb... Finished Section 6 & 8. Need to update/fix section 7 & 9
import NavBar from '../components/NavBar';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePageHP} />
<<<<<<< HEAD
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <ProtectedRoute path="/profile" component={ProfilePage} />
            <ProtectedRoute path="/form/1" component={Form1} />
            <ProtectedRoute path="/form/2" component={Form2} />
            <ProtectedRoute path="/form/6" component={Form6} />
            <ProtectedRoute path="/form/7" component={Form7} />
            <ProtectedRoute path="/form/8" component={Form8} />
            <ProtectedRoute path="/form/9" component={Form9} />
            <ProtectedRoute path="/authorization" component={AuthorizationPage} />
=======
            <Route path="/newform6" component={Page6} />
            <Route exact path="/information" component={MiddleInformation} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <ProtectedRoute path="/profile" component={ProfilePage} />
            <ProtectedRoute path="/formseventh" component={FormSeventh} />
            <ProtectedRoute path="/formeighth" component={FormEighth} />
            <ProtectedRoute path="/formninth" component={FormNinth} />
            <ProtectedRoute path="/authorizationpage" component={AuthorizationPage} />
>>>>>>> parent of ad84aeb... Finished Section 6 & 8. Need to update/fix section 7 & 9
            <ProtectedRoute path="/list" component={ListStuff} />
            <ProtectedRoute path="/add" component={AddStuff} />
            <ProtectedRoute path="/edit/:_id" component={EditStuff} />
            <AdminProtectedRoute path="/admin" component={ListStuffAdmin} />
            <ProtectedRoute path="/signout" component={Signout} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
        );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
      return (isLogged && isAdmin) ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
        );
    }}
  />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
