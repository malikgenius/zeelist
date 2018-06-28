import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
// import registerServiceWorker from './registerServiceWorker';
import configureStore from "./reducers";
import { startSetEmployees } from "./actions/addEmployeeAction";
import { startSetFile } from "./actions/addExcelList";
// import getVisibleEmployees from './selectors/employees';
import AppRouter, { history } from "./Router/AppRouter";
import LoadingAnimationLottie from "./components/CardList/LoadingAnimationLottie";
import "bootstrap/dist/css/bootstrap.min.css";
import { login, logout } from "./actions/auth";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

const store = configureStore();
// store.subscribe(() => {
//     const state = store.getState();
//     const visibleEmployees = getVisibleEmployees(state.employees, state.filters);
//     console.log(visibleEmployees);
// });

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingAnimationLottie />, document.getElementById("root"));

// store.dispatch(startSetEmployees()).then(() => {
//     ReactDOM.render(<App /> , document.getElementById('root'));
// });

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // why to dispatch login and logout here because we want our store to be updated when user first visits this page .. check andrew mead aut
    store.dispatch(login(user.uid));
    store.dispatch(startSetEmployees());
    // store.dispatch(startSetFile());
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/");
    } else {
      history.push(history.location.pathname);
    }
  } else {
    store.dispatch(logout());
    store.dispatch(startSetEmployees());
    // store.dispatch(startSetFile());
    renderApp();
    history.push("/");
  }
});
// registerServiceWorker();
