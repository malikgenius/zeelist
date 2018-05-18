const initialstate = [];

export default (state = initialstate, action) => {
  // console.log(action.values);
  switch (action.type) {
    case 'EMPLOYEE_ADD':
      return (
        [...state, action.values]
      );

    case 'EMPLOYEES_SET':
      return state = action.employees;

    case 'EDIT_EMPLOYEE':
      return state.map((employee) => {
        if(employee.id === action.id) {
          return {
            ...employee,
            ...action.values
          };
        } else {
          return employee;
        }
      });

    case 'REMOVE_EMPLOYEE':
      return state.filter(({id}) => id !== action.id);
      // return state.filter(({id}) => {
      //   id !== action.id;
      // });
        
    // case 'REMOVE_EXPENSE':
    //   return state.filter(({ id }) => id !== action.id);
    // case 'EDIT_EXPENSE':
    //   return state.map((expense) => {
    //     if (expense.id === action.id) {
    //       return {
    //         ...expense,
    //         ...action.updates
    //       };
    //     } else {
    //       return expense;
    //     }
    //   });
    // case 'SET_EXPENSES':
    //   return (
    //     state = action.expenses
    //   )
    default:
      return state;
  }
};