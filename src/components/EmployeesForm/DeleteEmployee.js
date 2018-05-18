import React, { Component} from 'react';
import { connect } from 'react-redux';
import EditEmployeeForm from './EditEmployeeForm';
import { startRemoveEmployee } from '../../actions/addEmployeeAction';


class DeleteEmployee extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    
    componentDidMount =() => {
        const employee_id = this.props.location.selectedemployee.employeeid;
        this.props.startRemoveEmployee(employee_id)
        this.props.history.push('/');
    }
        
        
    
    render () {
        // console.log(this.props);
   
    return (
        <div></div>
    );
}

}

export default connect(null, {startRemoveEmployee})(DeleteEmployee);