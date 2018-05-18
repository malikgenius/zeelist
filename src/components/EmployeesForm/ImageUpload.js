import React, { Component} from 'react';
import { connect } from 'react-redux';
import ImageUploadForm from './ImageUploadForm';
import { startAddImage } from '../../actions/addEmployeeAction';

class ImageUpload extends Component {
    // const employee_id = this.props.location.employee.employeedata.id;
    onSubmit = (values) => {
        const employee_id = this.props.location.selectedemployee.employeedata.id;
        this.props.startAddImage(employee_id, values);
        this.props.history.push('/');
    }
    render () {
        // console.log(this.props.location.employee.employeedata);
   
    return (
        <ImageUploadForm 
            onSubmit={this.onSubmit}
            {...this.props} 
        />
    );
}

}

export default connect(null, {startAddImage})(ImageUpload);