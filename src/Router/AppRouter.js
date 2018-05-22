import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import NavbarToggle2 from '../components/Main/NavbarToggle2';
import HomePage from '../components/Main/HomePage';
import LoginPage from '../components/LoginForm/LoginPage';
import AddEmployee from '../components/EmployeesForm/AddEmployee';
import ListHome from '../components/ListView/ListHome';
import ImageUpload from '../components/EmployeesForm/ImageUpload';
import EditEmployee from '../components/EmployeesForm/EditEmployee';
import DeleteEmployee from '../components/EmployeesForm/DeleteEmployee';
import BirthDayHome from '../components/Birthdays/BirthDayHome';
import PrivateRoute from './PrivateRoute';
// import AddEmployeeForm from '../components/EmployeesForm/AddEmployeeForm';

export const history = createHistory();

class AppRouter extends Component {
    render() {
      return (
        // <div>
        //   <HomePage />
        // </div>
        
        <Router history={history}>
          <div >
            <NavbarToggle2 />
            <Switch>
              <Route  path="/login" component={LoginPage} />
              <Route exact path="/" component={HomePage} />
              <Route  path="/listview" component={ListHome} />
              <Route path="/birthday" component={BirthDayHome} />
              <PrivateRoute path="/addemployee" component={AddEmployee} />
              <PrivateRoute path="/imageupload" component={ImageUpload} />
              <PrivateRoute path="/editemployee" component={EditEmployee} />
              <PrivateRoute path="/deleteemployee" component={DeleteEmployee} />
            </Switch>
        </div>
        </Router>
        
        
      );
    }
  }
  
  export default AppRouter;