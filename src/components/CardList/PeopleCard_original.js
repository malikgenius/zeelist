/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
// import ToggleButton from './ToggleButton';
import ModalEmployee from './ModalEmployee';

const PeopleCard = (props) => {
  
    // console.log(props);
    let cardImage = null;
    if (props.employee.imageURL) {
    cardImage = ( <CardImg top width="100%" src={`${props.employee.imageURL}`} alt="Card image cap" />)
    } else {
      if(props.employee.gender === 'female') {
        cardImage = (<CardImg top width="100%" src="/assets/female.svg" alt="Card image cap" />)
      } else {
        cardImage = (<CardImg top width="80%" height="80%" src="/assets/Boy02.svg" alt="Card image cap" />)
      }
    }

    const renderModalEmployee = () => {
      return (
        <ModalEmployee {...props} />
      )
    };
  return (
    <div>
      <Card>
        <div onClick={renderModalEmployee}>
        {cardImage}
        </div>
        {/* <CardImg top width="100%" src={`${props.employee.image}`} alt="Card image cap" /> */}
        <CardBody>
          <CardTitle style={{fontWeight: 500}}>{props.employee.name}</CardTitle>
          <CardSubtitle style={{fontWeight: 300}}>{props.employee.position}</CardSubtitle>
          <CardText>
            {/* <CardImg style={{width: 40}}width="10%" src="/assets/email.svg" />   */}
            <a style={{textDecoration: 'none', color: '#117a8b', fontWeight: 400}}href={`mailto:${props.employee.email}`}>{props.employee.email}</a>
          </CardText>
          <CardText><CardImg style={{width: 20, marginRight: 10}}width="10%" src="/assets/cellphone.svg" />
            <a style={{textDecoration: 'none', color: '#117a8b'}}href={`tel:${props.employee.phone}`}>{props.employee.phone}</a>
            {/* {`${props.employee.phone}`}  */}
            <CardImg style={{width: 20, marginRight: 10, marginLeft: 10,}}width="10%" src="/assets/phone-icon.svg" />{`${props.employee.extension}`}
          </CardText>
          {/* <Button>Button</Button> */}
          {/* <ToggleButton {...props}/> */}
          <ModalEmployee {...props}/>
        </CardBody>
      </Card>
    </div>
  );
};

export default PeopleCard;