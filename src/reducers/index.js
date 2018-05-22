// eslint-disable-next-line
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import employeesReducer from './EmployeeReducer';
import filtersReducer from './FiltersReducer';
import auth from './auth';


export default () => {
    const store = createStore(combineReducers({
        employees: employeesReducer,
        filters: filtersReducer,
        form: formReducer,
        auth: auth
    }), composeWithDevTools(
        applyMiddleware(thunk)
    ));
    return store;
};





// WORKING WITHOUT THUNK ... 

// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import employeesReducer from './EmployeeReducer';
// import auth from './auth';
// // import addEmployee from './addEmployeeReducer';
// import employees from './employeesList';
// import { reducer as formReducer } from 'redux-form';

// // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

// export default () => {
//     const store = createStore(
//         combineReducers({
//             employees: employees,
//             auth: auth,
//             form: formReducer
//         }),
//         (applyMiddleware(thunk))
//         // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ||
//     );
//     return store;
// };

