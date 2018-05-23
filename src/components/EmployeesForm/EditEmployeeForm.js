/* eslint react/prop-types: 0 */
import React from 'react';
import moment from 'moment';
import { Alert } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { CountryDropdown } from 'react-country-region-selector';
import { Field, reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';
import { startAddEmployee } from '../../actions/addEmployeeAction';
// import normalizePhone from './normalizePhone';
// import './AddEmployeeForm.css';

 class EditEmployeeForm extends React.Component {
   
  constructor (props) {
    // console.log(props.location.employee.employeedata.name)
    super(props);
    this.state = { 
      email: '',
      country: '', 
      region: '',
      error: '',
      imageURL:  '',
      isUploading: false,
      progress: 0,
      avatarURL:'',
      avatar: '',
      formValues: ''
    };
  }  
  componentDidMount = ()  => {
    this.handleInitialize();
    // this.props.handleSubmit();
  }

  handleInitialize = () => {
    const initData = {
      "name": this.props.location.selectedemployee.employeedata.name ? this.props.location.selectedemployee.employeedata.name : '',
      "imageURL": this.props.location.selectedemployee.employeedata.imageURL ? this.props.location.selectedemployee.employeedata.imageURL: '',
      "email": this.props.location.selectedemployee.employeedata.email ? this.props.location.selectedemployee.employeedata.email : '',
      "phone": this.props.location.selectedemployee.employeedata.phone ? this.props.location.selectedemployee.employeedata.phone : '',
      "extension": this.props.location.selectedemployee.employeedata.extension ? this.props.location.selectedemployee.employeedata.extension : '',
      "gender": this.props.location.selectedemployee.employeedata.gender ? this.props.location.selectedemployee.employeedata.gender : '',
      "position": this.props.location.selectedemployee.employeedata.position ? this.props.location.selectedemployee.employeedata.position : '',
      "dob": this.props.location.selectedemployee.employeedata.dob ? 
        moment.unix(this.props.location.selectedemployee.employeedata.dob).format("YYYY-MM-DD") : '',
      "jd": this.props.location.selectedemployee.employeedata.jd ? 
      moment.unix(this.props.location.selectedemployee.employeedata.jd).format("YYYY-MM-DD") : '',
      "department": this.props.location.selectedemployee.employeedata.department ? this.props.location.selectedemployee.employeedata.department : '',
      "hod": this.props.location.selectedemployee.employeedata.hod ? this.props.location.selectedemployee.employeedata.hod : '',
      "info": this.props.location.selectedemployee.employeedata.info ? this.props.location.selectedemployee.employeedata.info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      "country": this.props.location.selectedemployee.employeedata.country ? this.props.location.selectedemployee.employeedata.country : '',
      // "firstName": this.props.location.selectedemployee.employeedata.phone ? this.props.location.selectedemployee.employeedata.phone : '',
      // "lastName": this.props.currentUser.lastName,
      // "sex": this.props.currentUser.sex,
      // "email": this.props.userEmail,
      // "phoneNumber": this.props.currentUser.phoneNumber
    };

    this.props.initialize(initData);
  }

  renderInputField = (field) => {
    // console.log(field);
    return (
      <FormGroup>
          <Label>{field.myLabel}</Label>
          <Input 
            type="text"
            placeholder={field.myPlaceholder}
            {...field.input}
          />
        </FormGroup>
    );
  }

  renderSelectGenderField = (field) => {
    return (
      <FormGroup>
          <Label >Gender</Label>
          <Input 
            type="select" 
            name="gender" 
            {...field.input} 
          >
            <option name="male">male</option>
            <option name="female">female</option>
          </Input>
        </FormGroup>
    );
  }
  renderSelectField = (field) => {
    return (
      <FormGroup>
          <Label for="department">{field.myLabel}</Label>
          <Input type="select" 
            name="department" 
            {...field.input}
            >
            <option  style={{display:'none'}} >Choose Department</option>
            <option>Administration</option>
            <option>Client Services</option>
            <option>Content</option>
            <option>Design</option>
            <option>Digital</option>
            <option>Events</option>
            <option>Finance</option>
            <option>Human Resources</option>
            <option>Information Technology</option>
            <option>Management</option>
            <option>Media</option>
            <option>Production</option>
          </Input>
        </FormGroup>
    );
  }

  renderSelectHOD = (field) => {
    return (
      <FormGroup>
          <Label for="exampleSelect">{field.myLabel}</Label>
          <Input 
          type="select" 
          name="hod"
          {...field.input}
          >
            <option >No</option>
            <option>HOD</option>
          </Input>
      </FormGroup>
    );
  }
  renderSelectCountry = (field) => {
    return (
      <div  style={{marginBottom: 20}}>
      <Label for="exampleColor">{field.myLabel}</Label><br />
      <CountryDropdown className=".form-control"
          {...field.input}
          type="text"
          />
    </div>
    );
  }

  renderDateField = (field) => {
    // console.log(field);
    return (
      <FormGroup>
          <Label >{field.myLabel}</Label>
          <Input type="date"
           placeholder={field.myPlaceholder} 
           {...field.input}
           />
        </FormGroup>
    );
  }

 
  renderInfo = (field) => {
    
    return(
      <FormGroup>
        <Label>{field.myLabel}</Label>
          <Input 
            type="textarea"
            placeholder={field.myPlaceholder}
            {...field.input}
            />
      </FormGroup>
    );
  }


   render() {
    //  console.log(this.props);

    return (
      <Form className="container" style={{ padding: 10}} 
        onSubmit={this.props.handleSubmit}>
        
        {/* onSubmit={this.SubmitForm}>  */}
        
        <FormGroup>
          <Alert color="info" style={{alignItems: 'center', textAlign: 'center'}}>
            Add Employees to ZEENAH database
          </Alert>
        </FormGroup>
          <Field
            myPlaceholder="employee name here.."
            myLabel="name"
            name="name"
            component={this.renderInputField}
            type="text"
          />
          <Field
            myPlaceholder="employee email here.."
            myLabel="email"
            name="email"
            component={this.renderInputField}
            type="text"
          />
          <Field
            myPlaceholder="employee cell phone here.."
            myLabel="Phone"
            name="phone"
            component={this.renderInputField}
            type="text"
            // normalize={normalizePhone}
            
          />
          <Field
            myPlaceholder="employee extension here.."
            myLabel="Extension"
            name="extension"
            component={this.renderInputField}
            type="text"
          />
          <Field
            myPlaceholder="employee Gender here.."
            myLabel="Gender"
            name="gender"
            
            // value="male"
            component={this.renderSelectGenderField}
            // type="select"
          >
            <option name="male">Male</option>
            <option name="female">Female</option>
          </Field>
          <Field
            myLabel="Date of Birth"
            name="dob"
            component={this.renderDateField}
            type="date"
          />
          <Field
            myLabel="Joining Date"
            name="jd"
            component={this.renderDateField}
            type="date"
          />
          <Field
            myLabel="Choose Department"
            name="department"
            component={this.renderSelectField}
            type="select"
          />
           <Field
           dirty
            myLabel="Head of Department"
            name="hod"
            value="no"
            component={this.renderSelectHOD}
            type="select"
            touched
          />
          <Field
            myPlaceholder="employee Position here.."
            myLabel="Position"
            name="position"
            component={this.renderInputField}
            type="text"
          />
          <Field
            myLabel="Country of Origin"
            name="country"
            component={this.renderSelectCountry}
            type="select"
          />

           <Field 
            myLabel="Info"
            myPlaceholder="more about the employee ..."
            name="info"
            component={this.renderInfo}
            type="textarea"
          />

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const validate = (values) => {
  // console.log(values);
};


export default reduxForm({
  validate,
  form: 'AddEmployee',
  initialize,
})(connect(null, {startAddEmployee})(EditEmployeeForm));

