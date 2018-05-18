/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startAddEmployee } from '../../actions/addEmployeeAction';
import AddEmployeeForm from './AddEmployeeForm';
// import AddEmployeeForm2 from './AddEmployeeForm2';


export class AddEmployee extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            values: {}
        };
    }
    
    Submit = (values) => {
        // console.log(values);
        this.props.startAddEmployee(values);
        this.props.history.push('/');
    }
    render() {
        // console.log(`this is HOC state ${this.state.values}`);
        return (
            <AddEmployeeForm onSubmit={this.Submit}  />
        );
    }
}
    const mapDispatchToProps = (dispatch) => ({
    startAddEmployee: (values) => dispatch(startAddEmployee(values))
    });


export default connect(null, mapDispatchToProps)(AddEmployee);