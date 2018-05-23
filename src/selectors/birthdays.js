import moment from 'moment';
import _ from 'lodash';
// Get visible expenses
// export default (employees, { text, sortBy, startDate, endDate }) => {
export default (employees, filters) => {
  return employees.filter((employee) => {
    const year = new Date().getFullYear();
    let DateofBirth = moment.unix(employee.dob, "MM-DD-YYYY").format(`MM-DD-${year}`);
    // const DateofBirth = moment.unix(employee.dob);
    const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(DateofBirth, 'day') : true;
    const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(DateofBirth, 'day') : true;
    const textMatch = employee.name.toLowerCase().includes(filters.birthDayText.toLowerCase());    

    return  startDateMatch & endDateMatch & textMatch;
    // eslint-disable-next-line
    const SortedEmployees = _.orderBy(employees, ['type','DateofBirth'], ['desc', 'asc']);
  }).sort((a, b) => {
    if (filters.startDate) {
      // const c = new Date(a.DateofBirth);
      // const d = new Date(b.DateofBirth);
      // return c-d;
    return moment.unix(a.dob).format("MM/DD") < moment.unix(b.dob).format("MM/DD") ? -1 : 1;
    } else  {
      return moment.unix(a.dob).format("MM/DD") < moment.unix(b.dob).format("MM/DD") ? -1 : 1;
    } 
  });
  
};

