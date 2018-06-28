import React, { Component } from "react";
import { connect } from "react-redux";
import ExcelUploadForm from "./ExcelUploadForm";
import { startAddExcelList, startSetFile } from "../../actions/addExcelList";

class ExcelUpload extends Component {
  // const employee_id = this.props.location.employee.employeedata.id;
  onSubmit = values => {
    // const employee_id = this.props.isAuthenticated;
    this.props.startAddExcelList(values);
    // this.props.startSetFile(values);
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);

    return <ExcelUploadForm onSubmit={this.onSubmit} {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.uid
});
export default connect(
  mapStateToProps,
  { startAddExcelList, startSetFile }
)(ExcelUpload);
