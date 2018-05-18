import React, { Component } from 'react';
import AppRouter from './Router/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './reducers';
// import { firebase } from './firebase/firebase';
import {startSetEmployees} from './actions/addEmployeeAction';
// import configureStore from './store/configureStore';
import './App.css';

class App extends Component {
  
 
  render() {
    const store = configureStore();
      // console.log(store.getState());
    return (
      <Provider store={store}>      
      <div >
        <AppRouter />
      </div>
      </Provider>
    );
  }
}

export default App;
