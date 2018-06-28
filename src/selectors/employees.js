import moment from "moment";
// eslint-disable-next-line
import _ from "lodash";
// Get visible expenses
// export default (employees, { text, sortBy, startDate, endDate }) => {
export default (employees, filters) => {
  return (
    employees
      .filter(employee => {
        const textMatch =
          employee.name.toLowerCase().includes(filters.text.toLowerCase()) ||
          employee.email.toLowerCase().includes(filters.text.toLowerCase()) ||
          employee.phone.toLowerCase().includes(filters.text.toLowerCase()) ||
          employee.extension
            .toLowerCase()
            .includes(filters.text.toLowerCase()) ||
          employee.gender.toLowerCase().includes(filters.text.toLowerCase()) ||
          employee.hod.toLowerCase().includes(filters.text.toLowerCase()) ||
          employee.department
            .toLowerCase()
            .includes(filters.text.toLowerCase()) ||
          employee.position
            .toLowerCase()
            .includes(filters.text.toLowerCase()) ||
          employee.country.toLowerCase().includes(filters.text.toLowerCase()) ||
          //below code will show all the records who has current month in thier date of birth ..
          // moment.unix(employee.dob).format("DD/MM/YYYY").toLowerCase().includes(moment().format("MM")) ||
          moment
            .unix(employee.dob)
            .format("DD/MMMM", "DD/MM")
            .toLowerCase()
            .includes(filters.text.toLowerCase());

        return textMatch;
        // eslint-disable-next-line
        // const SortedEmployees = _.orderBy(employees, ['type','department'], ['desc', 'asc']);
        // eslint-disable-next-line
      })
      // eslint-disable-next-line
      .sort((a, b) => {
        if (filters.sortBy === "department") {
          return a.department < b.department ? -1 : 1;
        } else if (filters.sortBy === "country") {
          return a.country < b.country ? -1 : 1;
        } else if (filters.sortBy === "name") {
          return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
        } else if (filters.sortBy === "position") {
          return a.position < b.position ? -1 : 1;
        }
      })
  );
};

// }).sort((a, b) =>  {
//   if (sortBy === 'department') {
//     return a.department < b.department ? 1 : -1;
//   } else if (sortBy === 'amount') {
//     return a.amount < b.amount ? 1 : -1;
//   }
// });
// };
