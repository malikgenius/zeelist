/* eslint react/prop-types: 0 */
import React from 'react';
import { Alert } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { CountryDropdown } from 'react-country-region-selector';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import { firebase }  from '../../firebase/firebase';
import FileUploader from 'react-firebase-file-uploader';
import { startAddEmployee } from '../../actions/addEmployeeAction';
// import normalizePhone from './normalizePhone';
// import './AddEmployeeForm.css';

 class AddEmployeeForm2 extends React.Component {
   
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      extension: '',
      gender: '',
      dob: '',
      jd:'',
      department: '',
      hod: '',
      position: '',
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

  renderInputFieldName = (field) => {
    console.log(field.target.value);
    return (
      this.setState({
        name: field.target.value
      })
    );
  }

  renderInputFieldEmail = (field) => {
    console.log(field.target.value);
    return (
      this.setState({
        email: field.target.value
      })
    );
  }

  renderInputFieldPhone = (field) => {
    console.log(field.target.value);
    return (
      this.setState({
        phone: field.target.value
      })
    );
  }

  renderInputFieldExtension = (field) => {
    console.log(field.target.value);
    return (
      this.setState({
        extension: field.target.value
      })
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
    // console.log(field);
    return(
      <FormGroup>
        {/* <Label>{field.myLabel}</Label> */}
        <Input
          {...field.meta.autofilled=this.state.imageURL}
          type="input"
          // initialValues
          // value={this.state.imageURL}
          // {...field.input}
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


   render() {
    //  console.log(this.props);

    return (
      <Form className="container" style={{ padding: 10}} 
        onSubmit={this.props.onSubmit}>
        
        {/* onSubmit={this.SubmitForm}>  */}
        
        <FormGroup>
          <Alert color="info" style={{alignItems: 'center', textAlign: 'center'}}>
            Add Employees to ZEENAH DataBase
          </Alert>
        </FormGroup>
        <FormGroup>
          <Label>Employee Name</Label>
          <Input 
            type="text"
            value={this.state.name}
            onChange={this.renderInputFieldName}
          />
        </FormGroup>

        <FormGroup>
          <Label>Employee Email</Label>
          <Input 
            type="text"
            value={this.state.email}
            onChange={this.renderInputFieldEmail}
          />
        </FormGroup>

        <FormGroup>
          <Label>Employee Phone</Label>
          <Input 
            type="text"
            value={this.state.phone}
            onChange={this.renderInputFieldPhone}
          />
        </FormGroup>
         
        <FormGroup>
          <Label>Employee extension</Label>
          <Input 
            type="text"
            value={this.state.extension}
            onChange={this.renderInputFieldExtension}
          />
        </FormGroup>



      </Form>
    );
  }
}



export default AddEmployeeForm2;

