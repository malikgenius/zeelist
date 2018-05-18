import React, { Component} from 'react';
import { Button, CardImg } from 'reactstrap';
import FileUploader from 'react-firebase-file-uploader';
import { firebase }  from '../../firebase/firebase';


export default class ImageUploadForm extends Component {
   constructor(props) {
       super(props);

       this.state = {
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
            const employee_id = this.props.location.selectedemployee.employeedata.id
            this.setState({avatar: filename, progress: 100, isUploading: false});
            firebase.storage().ref(`images/${employee_id}`).child(filename).getDownloadURL()
            .then(url => this.setState({imageURL: url}));
            console.log(this.state.imageURL);
            
            // .then(this.setState({formValues: this.state.imageURL}))
            
            // .then(() => console.log(formValues))
            // console.log(this.state.avatarURL, "IMAGE STATE AFTER UPLOAD",this.state.formValue[img])
        };

        onFormSubmit = (e) => {
            e.preventDefault();
            if(!this.state.imageURL) {
                this.setState(() => ({ error: `Please upload ${this.props.location.selectedemployee.employeedata.name} Image`}));
            } else {
                this.setState(() => ({ error: ''}))
                this.props.onSubmit({
                    imageURL: this.state.imageURL
                });
            }
        }

   render() {
    const employee_id = this.props.location.selectedemployee.employeedata.id;
    // console.log(this.props.location.employee.employeedata);

   
       return (
        <div>
            <form onSubmit={this.onFormSubmit}>
            {!this.state.imageURL? <p className="form__error">{this.state.error}</p> : ''}
            {this.state.isUploading && <p>Uploading {this.state.progress} %</p>}
            <FileUploader 
                        // hidden
                        accept="image/*"
                        name="img"
                        randomizeFilename={false}
                        storageRef={firebase.storage().ref(`images/${employee_id}`)}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
        {!this.state.isUploading ? 
        <Button type="submit">Submit </Button> : <Button disabled> Submit </Button>}            
            </form>
        {/* Uploaded image visualization */}
        <div>
            {this.state.imageURL ? 
            <CardImg style={{width: 100, marginRight: 10, marginLeft: 10,}}width="100%" 
            src={`${this.state.imageURL}`} />: ''}
        </div>

        </div>
       );
   }
}

