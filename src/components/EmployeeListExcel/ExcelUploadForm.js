import React, { Component } from "react";
import { Button, CardImg } from "reactstrap";
import FileUploader from "react-firebase-file-uploader";
import { firebase } from "../../firebase/firebase";
// import { connect } from "react-redux";

export default class ExcelUploadForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      fileURL: "",
      isUploading: false,
      progress: 0,
      avatarURL: "",
      avatar: ""
    };
  }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
  };
  // handle upload images to Firebase ..
  handleUploadSuccess = filename => {
    const isAuthenticated = this.props.isAuthenticated;
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref(`excellist/${isAuthenticated}`)
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ fileURL: url }));
    console.log(this.state.fileURL);

    // .then(this.setState({formValues: this.state.fileURL}))

    // .then(() => console.log(formValues))
    // console.log(this.state.avatarURL, "IMAGE STATE AFTER UPLOAD",this.state.formValue[img])
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (!this.state.fileURL) {
      this.setState(() => ({
        error: `Please upload Excel List of Employees`
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        fileURL: this.state.fileURL
      });
    }
  };

  render() {
    // const employee_id = this.props.location.selectedemployee.employeedata.id;
    // console.log(this.props.location.employee.employeedata);

    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          {!this.state.fileURL ? (
            <p className="form__error">{this.state.error}</p>
          ) : (
            ""
          )}
          {this.state.isUploading && <p>Uploading {this.state.progress} %</p>}
          <FileUploader
            // hidden
            accept="*"
            name="file"
            randomizeFilename={false}
            storageRef={firebase
              .storage()
              .ref(`excellist/${this.props.isAuthenticated}`)}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          {!this.state.isUploading ? (
            <Button type="submit">Submit </Button>
          ) : (
            <Button disabled> Submit </Button>
          )}
        </form>
        {/* Uploaded image visualization */}
        <div>
          {this.state.fileURL ? (
            <CardImg
              style={{ width: 100, marginRight: 10, marginLeft: 10 }}
              width="100%"
              src={`${this.state.fileURL}`}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.uid
// });

// export default connect(mapStateToProps)(ExcelUploadForm);
