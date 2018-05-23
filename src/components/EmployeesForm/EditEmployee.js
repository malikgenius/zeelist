import React, { Component} from 'react';
import { connect } from 'react-redux';
import EditEmployeeForm from './EditEmployeeForm';
import { startEditEmployee, startSetEmployees } from '../../actions/addEmployeeAction';


class EditEmployee extends Component {
    
    onSubmit = (values) => {
        const employee_id = this.props.location.selectedemployee.employeedata.id;
        this.props.startEditEmployee(employee_id, values);
        this.props.history.push('/');
        
    }
    render () {
        // console.log(this.props);
   
    return (
        <EditEmployeeForm
            onSubmit={this.onSubmit}
            {...this.props} 
        />
    );
}

}

export default connect(null, {startEditEmployee, startSetEmployees})(EditEmployee);