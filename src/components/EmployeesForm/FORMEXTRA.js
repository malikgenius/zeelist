/* eslint react/prop-types: 0 */
import React from 'react';
import { Alert } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { CountryDropdown } from 'react-country-region-selector';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { firebase }  from '../../firebase/firebase';
import FileUploader from 'react-firebase-file-uploader';
import { startAddEmployee } from '../../actions/addEmployeeAction';
// import normalizePhone from './normalizePhone';
// import './AddEmployeeForm.css';

 class AddEmployeeForm extends React.Component {
   
  constructor (props) {
    super(props);
    this.state = { 
      country: '', 
      region: '',
      error: '',
      imageURL: props.expense ? props.expense.imageURL: '',
      isUploading: false,
      progress: 0,
      avatarURL:'',
      avatar: ''
    };
  }
  
  
  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
    handleProgress = (progress) => this.setState({progress});
    handleUploadError = (error) => {
      this.setState({isUploading: false});
    }
    // handle upload images to Firebase .. 
    handleUploadSuccess = (filename) => {
        this.setState({avatar: filename, progress: 100, isUploading: false});
        firebase.storage().ref(`images/`).child(filename).getDownloadURL()
          .then(url => this.setState({imageURL: url}));
          
          // .then(this.setState({formValues: this.state.imageURL}))
          
          // .then(() => console.log(formValues))
        // console.log(this.state.avatarURL, "IMAGE STATE AFTER UPLOAD",this.state.formValue[img])
      };
      showImage = () => {
          return (
              // eslint-disable-next-line
            <a  href={this.state.imageURL} target="_blank"></a>
          );
          
      }

      showEmployeeImage = (field) => {
        return (
          <FormGroup>
            <Label>{field.myLabel}</Label>
            {this.showImage}
          </FormGroup>
        );
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
            name="select" 
            {...field.input} 
          >
            <option>Male</option>
            <option>Female</option>
          </Input>
        </FormGroup>
    );
  }
  renderSelectField = (field) => {
    return (
      <FormGroup>
          <Label for="department">{field.myLabel}</Label>
          <Input type="select" 
            name="select" 
            {...field.input}
            >
            <option  style={{display:'none'}} >Choose Department</option>
            <option>Admin</option>
            <option>Account Management</option>
            <option>Creative</option>
            <option>Design</option>
            <option>Events</option>
            <option>Finance</option>
            <option>Human Resources</option>
            <option>IT</option>
            <option>Media</option>
            <option>Marketing</option>
            <option>Production</option>
            <option>Public Relations</option>
          </Input>
        </FormGroup>
    );
  }

  renderSelectHOD = (field) => {
    return (
      <FormGroup>
          <Label for="exampleSelect">Head of Department</Label>
          <Input 
          type="select" 
          name="select" 
          {...field.input}
          
          >
            <option>No</option>
            <option>Yes</option>
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

  renderImage = (field) => {
    // console.log(` image filed ${field}`)
    return (
      <FormGroup>
      <Label >
        {...field.input}
      {this.state.imageURL}
        {/* <Label>{field.myLabel}</Label> */}
        
        <FileUploader 
                        
                        hidden
                        accept="image/*"
                        // name="img"
                        randomizeFilename={false}
                        storageRef={firebase.storage().ref(`images/`)}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
        />
      </Label>
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
    
    //  console.log(this.props)
     const { handleSubmit } = this.props;

    return (
      <Form className="container" style={{ padding: 10}} 
        onSubmit={handleSubmit}>
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
            component={this.renderSelectGenderField}
            type="select"
          />
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
            myLabel="Choose Department"
            name="hod"
            component={this.renderSelectHOD}
            type="select"
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
            myLabel="More info"
            myPlaceholder="more about the employee ..."
            name="info"
            component={this.renderInfo}
            type="textarea"
          />
          <Field myLabel="Upload Employee Image"
            name="image"
            component={this.renderImage}
            type="file"
          >
           </Field>
           <br />
          <Field myLabel="Image"
            name="employeeimage"
            component={this.showEmployeeImage}
            type='image'
            >
            </Field>

        <Button  type="submit">Submit</Button>
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
  // onSubmit: startAddEmployee,
  // onSubmit: this.SubmitForm
  // fields: ['name', 'email', 'phone', 'extension','gender','dob','jd','department', 'position', 'country', 'hod', 'about']
})(connect(null, {startAddEmployee})(AddEmployeeForm));