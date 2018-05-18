/* eslint react/prop-types: 0 */
import React from 'react';
import { Alert } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { CountryDropdown } from 'react-country-region-selector';
import { Field, reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';
import { firebase }  from '../../firebase/firebase';
import FileUploader from 'react-firebase-file-uploader';
import { startAddEmployee } from '../../actions/addEmployeeAction';
// import normalizePhone from './normalizePhone';
// import './AddEmployeeForm.css';

 class AddEmployeeForm extends React.Component {
   
  constructor (props) {
    console.log(props)
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
    }
    
  }
  
  
  componentDidMount = ()  => {
    this.handleInitialize();
  }

  handleInitialize = () => {
    const initData = {
      // "name": this.props.name ? this.props.name : this.props.values.name,
      // "name": this.props.name ? this.props.name : '',
      // "email": this.props.email ? this.props.email : '',
      // "phone": this.props.phone ? this.props.phone : '',
      // "extension": this.props.extension ? this.props.extension : '', 
      // "gender": this.props.gender ? this.props.gender : '',
      // "position": this.props.position ? this.props.position : '',
      // "dob": this.props.dob ? this.props.dob : '',
      // "jd": this.props.jd ? this.props.jd : '',
      "imageURL": this.state.imageURL,
      // "hod": this.props.hod ? this.props.hod : '',
      // "info": this.props.info ? this.props.info : '', 

      // "firstName": this.props.currentUser.firstName,
      // "lastName": this.props.currentUser.lastName,
      // "sex": this.props.currentUser.sex,
      // "email": this.props.userEmail,
      // "phoneNumber": this.props.currentUser.phoneNumber
    };

    this.props.initialize(initData);
  }

  // componentWillUpdate() {
  //   this.handleInitializeImage();
  // }
  componentWillReceiveProps() {
    this.handleInitializeImage();
  }

  handleInitializeImage = () => {
    const initData = {
  //     "imageURL": this.state.imageURL,
  //     // "name": this.props.field.input,
  //     // "email": this.props.email,
  //     // "phone": this.props.phone,
  //     // "extension": this.props.extension,
  //     // "gender": this.props.gender,
  //     // "position": this.props.position,
  //     // "dob": this.props.dob,
  //     // "jd": this.props.jd,
  //     // "hod": this.props.hod,
  //     // "info": this.props.info,
    };
    this.props.initialize(initData);
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
          .then(url => this.setState({imageURL: url}))
          // .then(this.state.imageURL => this.props.Image)
          .then(() => console.log(this.state.imageURL));
      };
      showImage = () => {
          return (
              // eslint-disable-next-line
            <a  href={this.state.imageURL} target="_blank"></a>
          );
          
      }

  renderInputField = (field) => {
    console.log(field);
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
            name="department" 
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
          <Label for="exampleSelect">{field.myLabel}</Label>
          <Input 
          type="select" 
          name="hod"
          
          {...field.input}
          >
            <option >No</option>
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
    console.log(field)
    return(
      <FormGroup>
        {/* <Label>{field.myLabel}</Label> */}
        <FileUploader 
                        // hidden
                        accept="image/*"
                        name="img"
                        randomizeFilename={false}
                        storageRef={firebase.storage().ref(`images/`)}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
        {/* <Input
          {...field.meta.autofilled=this.state.imageURL}
          type="input"
        /> */}
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

  // ReduxFormImage = (field) => {
  //   return (
  //   <FormGroup>
  //       <Label>{field.myLabel}</Label>
  //         <Input
  //           hidden
  //           change={field.input}
  //           type="text"
  //           value={this.state.imageURL}
  //           {...field.input}
  //           placeholder={field.myPlaceholder}
            
  //           />
  //     </FormGroup>
  //   );
  // }


handleSubmit = (values) => {
  console.log(values);
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
            value="Male"
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
            hidden
            myLabel="ImageURL"
            myPlaceholder=""
            name="imageURL"
            component={this.renderImage}
            type="text"
            // initial={this.state.imageURL}
            
          />

          <Field 
            myLabel="Info"
            myPlaceholder="more about the employee ..."
            name="info"
            component={this.renderInfo}
            type="textarea"
          />

        <Button  type="submit">Submit</Button>
      </Form>
    );
  }
}

const validate = (values) => {
  console.log(values);
};


export default reduxForm({
  validate,
  form: 'AddEmployee',
  initialize,
  // onSubmit: startAddEmployee,
  // onSubmit:this.props.onSubmitForm
  fields: ['name', 'email', 'phone', 'extension','gender','dob','jd','department', 'position', 'country', 'hod', 'info', 'imageURL']
})(connect(null, {startAddEmployee})(AddEmployeeForm));

// export default reduxForm({
//   validate,
//   form: 'AddEmployee',

// })
// (connect((state => ({
//   initialValues: {
//     employeeImage : state.imageURL,
//   },
//   enableReinitialize: true,
// })), {startAddEmployee})(AddEmployeeForm));