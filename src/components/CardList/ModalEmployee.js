/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, 
        ModalFooter,  CardText,
        CardSubtitle, Media } 
from 'reactstrap';
import { Popup } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { Link }  from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';


class EmployeeModal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggleNested = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }
  toggleAll = ()  => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    // console.log(this.props.employee.id)
    return (
      <div>
        {/* <Button color="info" onClick={this.toggle}>more</Button> */}
        {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}> */}
        <Modal isOpen={this.props.isOpen} toggle={this.props.isClose} className={this.props.className}>
          <ModalHeader toggle={this.props.isClose}>{this.props.employee.name}
          {this.props.employee.jd || this.props.employee.dob
             ?  (<CardSubtitle style={{textDecoration: 'none', fontWeight: 300, marginTop: 5}}>
                   {/* since {moment.unix(this.props.employee.jd).format("YYYY")} {' '}  */}
                   Joined: {moment.unix(this.props.employee.jd).fromNow()} {' '} in {' '}{moment.unix(this.props.employee.jd).format("YYYY")} {' '}  
                   {/* parseInt((new Date(this.props.jd).getTime() / 1000).toFixed(0)) */}
                    {/* DOB: {this.props.employee.dob} */}
                </CardSubtitle>) : ''}
          {/* {this.props.employee.dob ?  (<CardSubtitle style={{textDecoration: 'none', fontWeight: 300, marginTop: 5}}> DOB:  {this.props.employee.dob}</CardSubtitle>) : ''} */}
          </ModalHeader>
          
          <ModalBody>
            <Media>
              <Media left href="#">
              { this.props.employee.imageURL ? 
                  <Media object style={{maxWidth: '100px', marginRight: 5}}src={`${this.props.employee.imageURL}`} alt="Generic placeholder image" />
                  :
                  <Media object style={{maxWidth: '100px', marginRight: 5}}src="/assets/male.jpg" alt="Generic placeholder image" />
              }
                {/* <Media object style={{maxWidth: '100px', marginRight: 5}}src={`${this.props.employee.imageURL}`} alt="Generic placeholder image" /> */}
              </Media>
              <Media body>
                <Media heading>
                  {this.props.employee.position}
                </Media>
                <CardText>
                  {/* <CardImg style={{width: 40}}width="10%" src="/assets/email.svg" />   */}
                  <a style={{textDecoration: 'none', color: '#117a8b', fontWeight: 400}}>{this.props.employee.department}</a>
                </CardText>
                {this.props.employee.info}
            </Media>
            </Media>
          </ModalBody>
          
          <ModalFooter>
          { this.props.isAuthenticated ? (<Link to={{ pathname: '/imageupload', 
            selectedemployee: {employeedata:this.props.employee}}} >
            <Popup
                  trigger={<Icon name="image" size="large"  />}
                  content='Upload Image'
            />
            
          </Link>): ''}

          {this.props.isAuthenticated ? (<Link to={{ pathname: '/editemployee',
           selectedemployee: {employeedata:this.props.employee}}}>
           <Popup
                  trigger={<Icon name="edit" size="large" />}
                  content='Edit record'
            />
           
            
          </Link>): ''}

           {this.props.isAuthenticated ? (
            // <Button color="danger" onClick={this.toggleNested}>Delete</Button>
            <Popup
                  trigger={<Icon style={{cursor: 'pointer'}} onClick={this.toggleNested} name="user delete" size="large" color="red"/>}
                  content='Delete Employee'
            />
            
          ): ''}

            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>Employee Delete Confirmation Page</ModalHeader>
              <ModalBody>Do you really want to Delete {this.props.employee.name}</ModalBody>
              <ModalFooter>
                <Link to={{ pathname: './deleteemployee',
                  selectedemployee: {employeeid: this.props.employee.id}}}>
                <Button color="danger" onClick={this.toggleNested}>YES</Button>
                </Link>{' '}
                <Button color="secondary" onClick={this.toggleAll}>NO</Button>
              </ModalFooter>
            </Modal>

          {' '}
            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
            <Button outline color="secondary" onClick={this.props.isClose}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
})
export default connect(mapStateToProps)(EmployeeModal);