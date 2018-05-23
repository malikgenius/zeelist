/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import { Icon } from 'semantic-ui-react';
// import ToggleButton from './ToggleButton';
import ModalEmployee from './ModalEmployee';
// import { CopyToClipboard } from 'react-copy-to-clipboard';

class PeopleCard extends Component {

  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      showModal: false,
      copied: false,
    };
  }


  ToggleModalEmployee = () => {
    return (
    this.setState({showModal : !this.state.showModal})
    );
  };

  render() {
  
    let cardImage = null;
    if (this.props.employee.imageURL) {
    cardImage = ( <CardImg top width="100%" src={`${this.props.employee.imageURL}`} alt="Card image cap" />)
    } else {
      if(this.props.employee.gender === 'female') {
        cardImage = (<CardImg top width="100%" src="/assets/female.jpg" alt="Card image cap" />);
      } else {
        cardImage = (<CardImg top width="80%" height="80%" src="/assets/male.jpg" alt="Card image cap" />)
      }
    }

    
  return (
    <div>
      <Card>
        <div onClick={this.ToggleModalEmployee}>
        {cardImage}
        </div>
        {/* <CardImg top width="100%" src={`${props.employee.image}`} alt="Card image cap" /> */}
        <CardBody>
          <CardTitle style={{fontWeight: 500}}>{this.props.employee.name}</CardTitle>
          <CardSubtitle style={{fontWeight: 300}}>{this.props.employee.position}</CardSubtitle>
          <CardText>
            {/* <CardImg style={{width: 40}}width="10%" src="/assets/email.svg" />   */}
            <a style={{textDecoration: 'none', color: '#117a8b', fontWeight: 400}}href={`mailto:${this.props.employee.email}`}>{this.props.employee.email}</a>
          </CardText>
          <CardText>
            {/* <CardImg style={{width: 15, marginRight: 10}}width="10%" src="/assets/cellphone.svg" /> */}
            <Icon name="mobile" size="large" color="grey" />
            <a style={{textDecoration: 'none', color: '#117a8b'}}href={`tel:${this.props.employee.phone}`}>{this.props.employee.phone}</a>
            {/* {`${props.employee.phone}`}  */}
            {/* <CardImg style={{width: 20, marginRight: 10, marginLeft: 10,}}width="10%" src="/assets/phone-icon.svg" /> */}
            <Icon name="phone" size="large" color="grey" />{`${this.props.employee.extension}`}
            {/* {this.state.copied ? <div style={{color: 'red'}}>Copied.</div> : null} */}
          </CardText>
          {/* <Button>Button</Button> */}
          {/* <ToggleButton {...props}/> */}
          <ModalEmployee 
            isOpen={this.state.showModal}
            isClose={this.ToggleModalEmployee}
            {...this.props}/>
        </CardBody>
      </Card>
    </div>
  );
}
};

export default PeopleCard;