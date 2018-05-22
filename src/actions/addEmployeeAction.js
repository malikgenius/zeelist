import {firebase} from '../firebase/firebase';
// Add User into Redux store 
// from Form to local reducer state...
export const employeeAdd = (values) => {
    // console.log(values);
    return {
        type: 'EMPLOYEE_ADD',
        values
    };
};
// adding employee from EmployeeForm and updating firebase & local Reducer State.
export const startAddEmployee = (values = {}) => {
    let {
        name = '',
        email = '',
        phone = '',
        extension = '',
        country = '',
        gender = '',
        hod = '',
        imageURL = '',
        info = '',
        jd = '',
        position = '',
        dob = '',
    } = values;
    // eslint-disable-next-line
    let dateofbirth = parseInt((new Date(dob).getTime() / 1000).toFixed(0));
    // eslint-disable-next-line
    let dateofjoining = parseInt((new Date(jd).getTime() / 1000).toFixed(0));
     dob = dateofbirth;
     jd = dateofjoining;
    // const dateofjoining = jd;
    const employee = { name, email, phone, extension, country, gender, hod, imageURL, info, jd, position, dob
        
    };
    // console.log(values);
    return (dispatch) => {
    firebase.database().ref('/employees').push(employee)
    .then((ref) => {
        dispatch(employeeAdd({
            id: ref.key,
            ...values
        }));
    });
};
};

// importing all employees from firebase DB.

export const employeeSet = (employees) => {
    // console.log(employees);
    return {
        type: 'EMPLOYEES_SET',
        employees
    };
};

export const startSetEmployees = () => {
    return(dispatch) => {
        return firebase.database().ref('/employees').once('value').then((snapshot) => {
                const employees = [];
                snapshot.forEach((childSnapShot) => {
                  employees.push({
                    id: childSnapShot.key,
                    // dob2: parseInt((new Date(childSnapShot.val().dob).getTime() / 1000).toFixed(0)),
                    // doj: parseInt((new Date(childSnapShot.val().jd).getTime() / 1000).toFixed(0)),
                    ...childSnapShot.val()
                  });
                });
                dispatch(employeeSet(employees));
              });
    };
};

// export const startSetEmployees = () => {
//     return(dispatch) => {
//         return firebase.database().ref('/employees').on('value', (snapshot) => {
//                 const employees = [];
//                 snapshot.forEach((childSnapShot) => {
//                   employees.push({
//                     id: childSnapShot.key,
//                     ...childSnapShot.val()
//                   });
//                 });
//                 dispatch(employeeSet(employees));
//               });
//     };
// };

export const  addImage = (id, values) => ({
    type: 'EDIT_EMPLOYEE',
    id,
    values
});
export const startAddImage = (id, values) => {
    console.log(id, values);
    return(dispatch) => {
        return firebase.database().ref(`/employees/${id}`).update(values)
        .then(() => {
            dispatch(addImage(id, values));
        });
    };
};

export const  EditEmployee = (id, employee) => ({
    type: 'EDIT_EMPLOYEE',
    id,
    employee
});
// eslint-disable-next-line
export const startEditEmployee = (id, values) => {
    // eslint-disable-next-line
    let {name, email, phone, extension, country, gender, hod, imageURL, info, jd , position, dob} = values;
    // eslint-disable-next-line
    let dateofbirth = parseInt((new Date(dob).getTime() / 1000).toFixed(0));
    // eslint-disable-next-line
    let dateofjoining = parseInt((new Date(jd).getTime() / 1000).toFixed(0));
     dob = dateofbirth;
     jd = dateofjoining;
    // const dateofjoining = jd;
    const employee = { name, email, phone, extension, country, gender, hod, imageURL, info, jd, position, dob
        
    };

    return(dispatch) => {
        return firebase.database().ref(`/employees/${id}`).update(employee)
        .then(() => {
            dispatch(addImage(id, employee));
        });
    };
};







// REMOVE_EXPENSE we can use (id) if we dont want object .. 
export const removeEmployee = (id) => ({
    type: 'REMOVE_EMPLOYEE',
    id
  });
  
  export const startRemoveEmployee = (id) => {
    return(dispatch, getState) => {
    //   const uid = getState().auth.uid
      return firebase.database().ref(`employees/${id}`).remove()
        .then(() => {
          dispatch(removeEmployee(id));
        });
    };
  };

// export const deleteEmployee = ( id ) => ({
//     type: 'DELETE_EMPLOYEE',
//     id
// });

// export const startDeleteEmployee = (id) => {
//     console.log(id);
// };



// below we can configure default values to none so if form has left something (not filled) wont give us firebase error and rest will be uploaded to db.
// should add all the fields from form here if missed that field will not be saved in db.

// export const startAddEmployee = (values = {}) => {
//     const {
//     name= '', phone='', email='', extension='', country=''
//     } = values;
//     const employees = {
//         name, phone, email, extension, country
//     }; 
//     console.log(values);
//       firebase.database().ref('/employees').push(employees)
//       .then((values) => {
//           return {
//               type: 'ADD_EMPLOYEE',
//               payload: values
//           };
//       });
//     //   this.props.history.push('/');

    
// };


// below setup will make sure all these fields were filled and rest of the form will be ignored, if fields are left empty from below will 
// generate error.

// export const startAddEmployee = ({name, email, phone, extension, country}) => {
//     console.log({name, email, phone, extension, country});
//       firebase.database().ref('/employees').push({name, email, phone, extension, country})
//       .then(({name, email, phone, extension, country }) => {
//           return {
//               type: 'ADD_EMPLOYEE',
//               payload: {name, email, phone, extension, country }
//           };
//       });
//     //   this.props.history.push('/');

    
// };

// export const startAddEmployee = ({name, email, phone, extension, country}) => {
//     console.log({name, email, phone, extension, country});
//     fetch('http://127.0.0.1:3000/posts',  {
//         method: 'POST',
//         header: {
//             // 'Accept': 'application/json',
//             // 'Content-type': 'application/json'
//         },
//         body: {name, email, phone, extension, country}
//     }).then((values) => {
//         return {
//             type: 'ADD_EMPLOYEE',
//             payload: values
//         };
//     });
// };

   


//middleware redux thunk 